from rest_framework import serializers
from .models import *


class EventSerialier(serializers.ModelSerializer):
    def get_field_names(self, declared_fields, info):
        return super().get_field_names(declared_fields, info) + ['nb_inscrits']

    class Meta:
        model = Event
        fields = '__all__'
