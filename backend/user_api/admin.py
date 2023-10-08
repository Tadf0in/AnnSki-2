from django.contrib import admin
from .models import *

from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import User


# User Inline
class MembreInline(admin.StackedInline):
    model = Membre
    can_delete = False

class UserMembreAdmin(UserAdmin):
    inlines = [MembreInline]

    list_display = ['name', 'adherent']
    search_fields = ['first_name', 'last_name', 'email', 'membre__tel']
    list_filter = ('membre__is_adherent',)

    def name(self, user):
        return f"{user.first_name} {user.last_name} ({user.username})"
    
    def adherent(self, user):
        return user.membre.is_adherent
    adherent.boolean = True

admin.site.unregister(User)
admin.site.register(User, UserMembreAdmin)


@admin.register(Membre)
class MembreAdmin(admin.ModelAdmin):
    search_fields = ['user__first_name', 'user__last_name', 'user__email', 'tel']