from django.db import models
from user_api.models import Membre


class Event(models.Model):
    lieu = models.CharField(max_length=128, verbose_name='Station')
    desc = models.CharField(max_length=255, verbose_name='Description')
    date = models.DateField(auto_now=False, auto_now_add=False)
    prixA = models.PositiveSmallIntegerField(default=28, verbose_name='Prix Adhérent')
    prixNA = models.PositiveSmallIntegerField(default=37, verbose_name='Prix Non Adhérent')
    nb_max = models.PositiveSmallIntegerField(default=63, verbose_name='Places disponibles')
    can_register = models.BooleanField(default=False, verbose_name='Inscriptions ouvertes')
    background_img = models.URLField(max_length=500, default="https://fr.newsonthesnow.com/news/wp-content/uploads/sites/3/2021/05/FR-Top-10-des-stations-de-ski-ide%CC%81ales-pour-un-week-end-hero-shutterstock-2-optimized.jpg")
    logo_img = models.URLField(max_length=500, default="https://img.freepik.com/vecteurs-premium/creation-du-logo-station-ski_71835-128.jpg") 

    @property
    def nb_inscrits(self):
        return Inscription.objects.filter(sortie=self.id).count()

    def register_user(self, user) -> None:
        self.inscrits.add(user)

    def unregister_user(self, user) -> None:
        self.inscrits.remove(user)

    def __str__(self) -> str:
        return self.lieu

    class Meta:
        verbose_name = 'Sortie'
        verbose_name_plural = 'Sorties'
        ordering = ('lieu',)


class Inscription(models.Model):
    membre = models.ForeignKey(Membre, on_delete=models.CASCADE)
    sortie = models.ForeignKey(Event, on_delete=models.SET_NULL, null=True)
    paye = models.BooleanField(default=False, verbose_name='Payé')
    present_aller = models.BooleanField(default=False, verbose_name="Présent à l'aller")
    present_retour = models.BooleanField(default=False, verbose_name="Présent au retour")

    def __str__(self) -> str:
        return str(self.membre)