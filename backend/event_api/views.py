from rest_framework.permissions import AllowAny, IsAuthenticatedOrReadOnly
from rest_framework.authentication import SessionAuthentication
from rest_framework.views import Response, status, APIView
from .serializers import *
from .models import *


class EventsView(APIView):
    permission_classes = (AllowAny,)
    authentication_classes = ()

    def get(self, request):
        events = Event.objects.order_by('-date')
        serializer = EventSerialier(events, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
class NextEventView(APIView):
    permission_classes = (AllowAny,)
    authentication_classes = ()

    def get(self, request):
        events = Event.objects.order_by('-date')[0]
        serializer = EventSerialier(events)
        return Response(serializer.data, status=status.HTTP_200_OK)

class RegisterView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)
    authentication_classes = (SessionAuthentication,)

    def post(self, request, event_id):
        event = Event.objects.get(pk=event_id)

        if request.user.is_anonymous:
            # Create anonymous user with Nom/Prénom/Email
            return Response(status=status.HTTP_401_UNAUTHORIZED)

        else:
            event.register_user(user=request.user)
            event.save()
            return Response(status=status.HTTP_200_OK)