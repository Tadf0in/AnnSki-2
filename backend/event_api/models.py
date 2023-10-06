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
    background_img = models.URLField(max_length=200, default="https://fr.newsonthesnow.com/news/wp-content/uploads/sites/3/2021/05/FR-Top-10-des-stations-de-ski-ide%CC%81ales-pour-un-week-end-hero-shutterstock-2-optimized.jpg")
    logo_img = models.URLField(max_length=500, default="https://scontent.flyn1-1.fna.fbcdn.net/v/t39.30808-1/309455246_553894126738316_1694927504537490417_n.jpg?stp=dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=754033&_nc_ohc=Ink_21fjHIoAX-i0RB_&_nc_ht=scontent.flyn1-1.fna&oh=00_AfBI6uKyChkwxn8d3qsv-WLQpLOVHJoQ5w9g5oQdW7aA3Q&oe=65245296") 

    def register_user(self, user) -> None:
        self.inscrits.add(user)

    def unregister_user(self, user) -> None:
        self.inscrits.remove(user)