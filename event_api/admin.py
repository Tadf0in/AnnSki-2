from django.contrib import admin
from django.http.response import HttpResponse
from .models import *
import csv

@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ('lieu', 'date', 'nb_inscrits')
    search_fields = ('lieu',)


@admin.register(Inscription)
class InscriptionAdmin(admin.ModelAdmin):
    list_display = ('membre', 'sortie', 'paye', 'present_aller', 'present_retour')
    
    list_filter = ('paye', 'present_aller', 'present_retour', 'sortie')
    search_fields = ('membre__user__first_name', 'membre__user__last_name', 'membre__user__email', 'membre__tel')
    
    list_editable = ('paye', 'present_aller', 'present_retour')
    autocomplete_fields = ('membre', 'sortie')

    actions = ('download_csv',)

    def download_csv(self, request, queryset):
        response = HttpResponse(content_type='text/csv')
        response['Content-Disposition'] = f'attachment; filename=Inscriptions {queryset[0].sortie.lieu}.csv'
        
        field_names = ["Aller", "Retour", "Nom", "Prenom", "Adherent", "Commentaires", "Mail", "Tel", "Payé"]
        writer = csv.writer(response)
        writer.writerow(field_names)
        
        for obj in queryset:
            aller = False if obj.present_aller else "/"
            retour = False if obj.present_retour else "/"
            writer.writerow([aller, retour, obj.membre.nom, obj.membre.prenom, bool(obj.membre.adherent), "", obj.membre.mail, obj.membre.tel, obj.paye])
    
        return response
    
    download_csv.short_description = "Télécharger le tableau"