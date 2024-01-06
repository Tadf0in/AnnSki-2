from django.urls import path
from . import views

urlpatterns = [
    path('', views.GoodiesView.as_view(), name='goodies'),
    path('<int:goodie_id>', views.GoodieView.as_view(), name='goodie'),
    path('commande', views.CommandeView.as_view(), name='commande'),
]
