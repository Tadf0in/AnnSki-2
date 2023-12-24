from django.contrib import admin
from .models import *

@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ['lieu', 'date']
    search_fields = ['lieu']


@admin.register(Inscription)
class InscriptionAdmin(admin.ModelAdmin):
    list_display = ['membre', 'sortie', 'paye', 'present_aller', 'present_retour']
    
    list_filter = ['paye', 'present_aller', 'present_retour']
    search_fields = ('membre__user__first_name', 'membre__user__last_name', 'membre__user__email', 'membre__tel')
    
    list_editable = ['paye', 'present_aller', 'present_retour']
    autocomplete_fields = ['membre', 'sortie']
