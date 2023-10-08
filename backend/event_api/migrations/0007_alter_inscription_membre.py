# Generated by Django 4.2.5 on 2023-10-08 16:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('user_api', '0001_initial'),
        ('event_api', '0006_remove_inscription_sortie_alter_event_inscrits'),
    ]

    operations = [
        migrations.AlterField(
            model_name='inscription',
            name='membre',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='user_api.membre'),
        ),
    ]
