# Generated by Django 4.2.5 on 2023-10-08 16:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('event_api', '0005_inscription_present_retour'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='inscription',
            name='sortie',
        ),
        migrations.AlterField(
            model_name='event',
            name='inscrits',
            field=models.ManyToManyField(blank=True, related_name='inscrits', to='event_api.inscription'),
        ),
    ]
