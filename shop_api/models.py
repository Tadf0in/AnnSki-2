from django.db import models

class Goodie(models.Model):
    nom = models.CharField(max_length=255, verbose_name='Nom')
    desc = models.CharField(max_length=255, verbose_name='Description', blank=True)
    prix = models.FloatField()
    image = models.URLField(max_length=500)
    stock = models.IntegerField()

    def __str__(self):
        return self.nom