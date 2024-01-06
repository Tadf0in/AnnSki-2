from rest_framework import serializers
from .models import *


class GoodieSerialier(serializers.ModelSerializer):
    class Meta:
        model = Goodie
        fields = '__all__'


class CommandeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Commande
        fields = '__all__'

    def create(self, data):
        new_commande = Commande(**data)
        new_commande.save()
        return new_commande