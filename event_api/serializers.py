from rest_framework import serializers
from .models import *


class EventSerialier(serializers.ModelSerializer):
    def get_field_names(self, declared_fields, info):
        return super().get_field_names(declared_fields, info) + ['nb_inscrits']

    class Meta:
        model = Event
        fields = '__all__'

    
class InscriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Inscription
        fields = '__all__'

    def create(self, data):
        new_inscription = Inscription(**data)
        new_inscription.save()
        return new_inscription
