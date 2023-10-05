from django.urls import path
from . import views

urlpatterns = [
    path('', views.EventsView.as_view(), name='events'),
    path('register/<int:event_id>', views.RegisterView.as_view(), name='register-event'),
]
