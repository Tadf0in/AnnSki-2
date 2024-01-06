from django.db import models
from user_api.models import Membre


class Goodie(models.Model):
    nom = models.CharField(max_length=255, verbose_name='Nom')
    desc = models.CharField(max_length=255, verbose_name='Description', blank=True)
    prix = models.FloatField()
    image = models.URLField(max_length=500)
    stock = models.IntegerField()

    def __str__(self) -> str:
        return self.nom
    

class Commande(models.Model):
    goodie = models.ForeignKey(Goodie, on_delete=models.SET_NULL, null=True)
    membre = models.ForeignKey(Membre, on_delete=models.SET_NULL, null=True)
    quantite = models.PositiveIntegerField(default=1)
    paye = models.BooleanField(default=False)

    @property
    def total(self):
        return self.quantite * self.goodie.prix
    
    def __str__(self) -> str:
        return f"{self.goodie} x{self.quantite}"