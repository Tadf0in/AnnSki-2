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

