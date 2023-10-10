from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.authentication import SessionAuthentication
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
            event = Event.objects.order_by('-date')[0]
        else:
            event = Event.objects.get(pk=event_id)
        serializer = EventSerialier(event)
        return Response(serializer.data, status=status.HTTP_200_OK)



class RegisterView(APIView):
    permission_classes = (IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)   

    def post_auth(self, request, event_id):
        data = request.data

        data['membre'] = request.user.pk
        data['sortie'] = event_id

        serializer = InscriptionSerializer(data=data)
        if serializer.is_valid(raise_exception=True):

            data['sortie'] = Event.objects.get(pk=event_id)
            data['membre'] = Membre.objects.get(user=request.user)
            if Inscription.objects.filter(membre=data['membre'], sortie=data['sortie']).exists():
                return Response(status=status.HTTP_208_ALREADY_REPORTED)

        
            inscription = serializer.create(data)
            if inscription is not None:
                return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(status=status.HTTP_400_BAD_REQUEST)


    def post(self, request, event_id):
        event = Event.objects.get(pk=event_id)

        if request.user.is_anonymous:
            # Create anonymous user with Nom/Prénom/Email
            return Response(status=status.HTTP_401_UNAUTHORIZED)

        else:
            return self.post_auth(request, event_id)