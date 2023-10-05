from rest_framework.permissions import AllowAny
from rest_framework.views import Response, status, APIView
from .serializers import *
from .models import *


class EventsView(APIView):
    permission_classes = (AllowAny,)
    authentication_classes = ()

    def get(self, request):
        events = Event.objects.all()
        serializer = EventSerialier(events, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)