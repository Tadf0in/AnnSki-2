from rest_framework.permissions import AllowAny
from rest_framework.views import Response, status, APIView
from .serializers import *
from .models import *
from user_api.models import Membre


class EventsView(APIView):
    permission_classes = (AllowAny,)
    authentication_classes = ()

    def get(self, request):
        events = Event.objects.order_by('-date')
        serializer = EventSerialier(events, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    

class EventView(APIView):
    permission_classes = (AllowAny,)
    authentication_classes = ()

    def get(self, request, event_id=0):
        if event_id == 0:
            event = Event.objects.order_by('-date')[0] # next event
        else:
            event = Event.objects.get(pk=event_id)
        serializer = EventSerialier(event)
        return Response(serializer.data, status=status.HTTP_200_OK)


class RegisterView(APIView):
    permission_classes = (AllowAny,)
    authentication_classes = ()   

    def post(self, request, event_id):
        data = request.data
    
        data['sortie'] = event_id

        # Membre
        data['membre'], isAlreadyMembre = Membre.objects.get_or_create(mail=data['mail'])
        if not isAlreadyMembre:
            # TODO -> Creer membre 
            del  data['adherent'], data['nom'], data['prenom'], data['mail'], data['tel'], data['ecole']
        data['membre'] = data['membre'].pk
        
        data['paye'] = False
        
        # Bus
        match data['bus']:
            case "a/r":
                data['present_aller'] = True
                data['present_retour'] = True
            case "aller":
                data['present_aller'] = True
                data['present_retour'] = False
            case "retour":
                data['present_aller'] = False
                data['present_retour'] = True
            case "aucun":
                data['present_aller'] = False
                data['present_retour'] = False
            case _:
                return Response(status=status.HTTP_400_BAD_REQUEST)
        del data['bus']

        serializer = InscriptionSerializer(data=data)
        if serializer.is_valid(raise_exception=True): 
            data['sortie'] = Event.objects.get(pk=data['sortie'])
            data['membre'] = Membre.objects.get(pk=data['membre'])

            # Si déjà inscrit
            if Inscription.objects.filter(membre=data['membre'], sortie=data['sortie']).exists():
                return Response(status=status.HTTP_208_ALREADY_REPORTED)
            
            # Si inscription à la sortie pas ouvertes
            if not data['sortie'].can_register:
                return Response(status=status.HTTP_403_FORBIDDEN)
            
            inscription = serializer.create(data)
            if inscription is not None:
                return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(status=status.HTTP_400_BAD_REQUEST)