# Generated by Django 4.2.5 on 2023-10-05 14:37

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=128)),
                ('location', models.CharField(max_length=128)),
                ('desc', models.CharField(max_length=255)),
                ('date', models.DateField()),
                ('prixA', models.PositiveSmallIntegerField()),
                ('prixNA', models.PositiveSmallIntegerField()),
                ('nb_max', models.PositiveSmallIntegerField()),
                ('inscrits', models.ManyToManyField(blank=True, related_name='inscrits', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
