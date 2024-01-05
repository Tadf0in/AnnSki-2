from rest_framework import serializers
from .models import *


class GoodieSerialier(serializers.ModelSerializer):
    class Meta:
        model = Goodie
        fields = '__all__'
