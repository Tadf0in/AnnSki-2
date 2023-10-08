# Generated by Django 4.2.5 on 2023-10-08 17:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('event_api', '0007_alter_inscription_membre'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='event',
            options={'verbose_name': 'Sortie', 'verbose_name_plural': 'Sorties'},
        ),
        migrations.AlterField(
            model_name='event',
            name='can_register',
            field=models.BooleanField(default=False, verbose_name='Inscriptions ouvertes'),
        ),
        migrations.AlterField(
            model_name='event',
            name='desc',
            field=models.CharField(max_length=255, verbose_name='Description'),
        ),
        migrations.AlterField(
            model_name='event',
            name='location',
            field=models.CharField(max_length=128, verbose_name='Station'),
        ),
        migrations.AlterField(
            model_name='event',
            name='nb_max',
            field=models.PositiveSmallIntegerField(default=60, verbose_name='Places disponibles'),
        ),
        migrations.AlterField(
            model_name='event',
            name='prixA',
            field=models.PositiveSmallIntegerField(default=26, verbose_name='Prix Adhérent'),
        ),
        migrations.AlterField(
            model_name='event',
            name='prixNA',
            field=models.PositiveSmallIntegerField(default=35, verbose_name='Prix Non Adhérent'),
        ),
        migrations.AlterField(
            model_name='inscription',
            name='paye',
            field=models.BooleanField(default=False, verbose_name='Payé'),
        ),
        migrations.AlterField(
            model_name='inscription',
            name='present_aller',
            field=models.BooleanField(default=False, verbose_name="Présent à l'aller"),
        ),
        migrations.AlterField(
            model_name='inscription',
            name='present_retour',
            field=models.BooleanField(default=False, verbose_name='Présent au retour'),
        ),
    ]
