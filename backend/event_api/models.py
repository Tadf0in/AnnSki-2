from django.db import models
from django.contrib.auth import get_user_model

user_model = get_user_model()

class Event(models.Model):
    title = models.CharField(max_length=128)
    location = models.CharField(max_length=128)
    desc = models.CharField(max_length=255)
    date = models.DateField(auto_now=False, auto_now_add=False)
    prixA = models.PositiveSmallIntegerField(default=26)
    prixNA = models.PositiveSmallIntegerField(default=35)
    nb_max = models.PositiveSmallIntegerField(default=60)
    inscrits = models.ManyToManyField(user_model, related_name='inscrits', blank=True)