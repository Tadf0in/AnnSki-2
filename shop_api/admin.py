from django.contrib import admin
from .models import *

@admin.register(Goodie)
class GoodieAdmin(admin.ModelAdmin):
    list_display = ('nom', 'prix', 'stock')
    search_fields = ('nom',)
    list_filter = ('prix', 'stock')


@admin.register(Commande)
class CommandeAdmin(admin.ModelAdmin):
    list_display = ('goodie', 'membre', 'quantite', 'total')
    search_fields = ('nom', 'membre__nom', 'membre__prenom')
    list_filter = ('quantite', 'paye')