from django.contrib import admin
from .models import *

@admin.register(Goodie)
class GoodieAdmin(admin.ModelAdmin):
    list_display = ('nom', 'prix', 'stock')
    search_fields = ('nom',)
    list_filter = ('prix', 'stock')