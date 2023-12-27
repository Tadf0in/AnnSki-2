from django.contrib import admin
from .models import *


@admin.register(Membre)
class MembreAdmin(admin.ModelAdmin):
    list_display = ('nomprenom', 'adherent')
    search_fields = ('nom', 'prenom', 'mail', 'tel')
    list_filter = ('adherent', 'ecole')

    def nomprenom(self, mbr):
        return mbr.nom + ' ' + mbr.prenom

## TODO -> à voir plus tard
# @admin.register(Adhesion)
# class AdhesionAdmin(admin.ModelAdmin):
#     search_fields = ('numero', 'membre__nom', 'membre__prenom', 'membre__mail')
#     list_filter = ('membre__ecole',)