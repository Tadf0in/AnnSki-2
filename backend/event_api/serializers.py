from rest_framework import serializers
from .models import *


class EventSerialier(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'
