from django.urls import path
from . import views

urlpatterns = [
    path('', views.EventsView.as_view(), name='events'),
    path('<int:event_id>', views.EventView.as_view(), name='next-event'),
    path('register/<int:event_id>', views.RegisterView.as_view(), name='register-event'),
]
