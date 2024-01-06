from rest_framework.permissions import AllowAny
from rest_framework.views import Response, status, APIView
from .serializers import *
from .models import *


class GoodiesView(APIView):
    permission_classes = (AllowAny,)
    authentication_classes = ()

    def get(self, request):
        goodies = Goodie.objects.all()
        serializer = GoodieSerialier(goodies, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    

class GoodieView(APIView):
    permission_classes = (AllowAny,)
    authentication_classes = ()

    def get(self, request, goodie_id):
        goodie = Goodie.objects.get(pk=goodie_id)
        serializer = GoodieSerialier(goodie)
        return Response(serializer.data, status=status.HTTP_200_OK)
    

class CommandeView(APIView):
    permission_classes = (AllowAny,)
    authentication_classes = ()

    def post(self, request):
        data = request.data

        data['goodie'] = data['goodie_id']
        del data['goodie_id']

        ## TODO -> Get/Create Membre
        # data['membre'] = None
        # del data['nom'], data['prenom'], data['mail'], data['tel'], data['ecole']

        data['paye'] = False

        serializer = CommandeSerializer(data=data)
        if serializer.is_valid(raise_exception=True):
            data['goodie'] = Goodie.objects.get(pk=data['goodie'])

            # Si quantié pas bonne
            if int(data['quantite']) <= 0 or int(data['quantite']) > data['goodie'].stock:
                return Response(status=status.HTTP_406_NOT_ACCEPTABLE)

            data['membre'] = Membre.objects.get(pk=data['membre'])
            commande = serializer.create(data)
            if commande is not None:
                return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(status=status.HTTP_400_BAD_REQUEST)
