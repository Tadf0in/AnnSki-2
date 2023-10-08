from django.db import models
from user_api.models import Membre


class Event(models.Model):
    location = models.CharField(max_length=128, verbose_name='Station')
    desc = models.CharField(max_length=255, verbose_name='Description')
    date = models.DateField(auto_now=False, auto_now_add=False)
    prixA = models.PositiveSmallIntegerField(default=26, verbose_name='Prix Adhérent')
    prixNA = models.PositiveSmallIntegerField(default=35, verbose_name='Prix Non Adhérent')
    nb_max = models.PositiveSmallIntegerField(default=60, verbose_name='Places disponibles')
    can_register = models.BooleanField(default=False, verbose_name='Inscriptions ouvertes')
    background_img = models.URLField(max_length=500, default="https://fr.newsonthesnow.com/news/wp-content/uploads/sites/3/2021/05/FR-Top-10-des-stations-de-ski-ide%CC%81ales-pour-un-week-end-hero-shutterstock-2-optimized.jpg")
    logo_img = models.URLField(max_length=500, default="https://scontent.flyn1-1.fna.fbcdn.net/v/t39.30808-1/309455246_553894126738316_1694927504537490417_n.jpg?stp=dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=754033&_nc_ohc=Ink_21fjHIoAX-i0RB_&_nc_ht=scontent.flyn1-1.fna&oh=00_AfBI6uKyChkwxn8d3qsv-WLQpLOVHJoQ5w9g5oQdW7aA3Q&oe=65245296") 

    def register_user(self, user) -> None:
        self.inscrits.add(user)

    def unregister_user(self, user) -> None:
        self.inscrits.remove(user)

    def __str__(self) -> str:
        return self.location

    class Meta:
        verbose_name = 'Sortie'
        verbose_name_plural = 'Sorties'


class Inscription(models.Model):
    membre = models.ForeignKey(Membre, on_delete=models.CASCADE)
    sortie = models.ForeignKey(Event, on_delete=models.SET_NULL, null=True)
    paye = models.BooleanField(default=False, verbose_name='Payé')
    present_aller = models.BooleanField(default=False, verbose_name="Présent à l'aller")
    present_retour = models.BooleanField(default=False, verbose_name="Présent au retour")

    def __str__(self) -> str:
        return str(self.membre)