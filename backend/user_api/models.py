from django.db import models


class Membre(models.Model):
    nom = models.CharField(max_length=255, verbose_name="Nom")
    prenom = models.CharField(max_length=255, verbose_name="Prénom")
    mail = models.EmailField(max_length=255, verbose_name="Adresse mail", unique=True)
    tel = models.CharField(max_length=255, verbose_name="Numéro de téléphone")
    ecole = models.CharField(max_length=255, verbose_name="École", choices=(
        ("Polytech", "Polytech"),
        ("IUT", "IUT"),
        ("IAE", "IAE"),
        ("exte", "Exté"),
    ))

    @property
    def adherent(self) -> bool:
        return Adhesion.objects.filter(membre=self).exists()

    def __str__(self) -> str:
        return f"{self.nom} {self.prenom}"

    class Meta:
        ordering = ('nom', 'prenom')


class Adhesion(models.Model):
    membre = models.OneToOneField(Membre, on_delete=models.CASCADE)
    numero = models.CharField(max_length=50, verbose_name="Numéro carte USCA", blank="True", unique=True)

    def __str__(self) -> str:
        return self.numero
