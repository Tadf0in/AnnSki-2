from django.db import models
from django.contrib.auth import get_user_model

user_model = get_user_model()


class Membre(models.Model):
    user = models.OneToOneField(user_model, on_delete=models.CASCADE)
    
    tel = models.CharField(max_length=12, verbose_name="Numéro de téléphone")
    is_adherent = models.BooleanField(verbose_name="Adhérent", default=False)
    num_usca = models.CharField(max_length=20, null=True, blank=True, verbose_name="Numéro carte USCA")

    
    def __str__(self) -> str:
        return f"{self.user.first_name} {self.user.last_name} ({self.user.username})"

