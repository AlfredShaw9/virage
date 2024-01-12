# Generated by Django 5.0.1 on 2024-01-11 17:44

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Car',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('make', models.CharField(max_length=30)),
                ('model', models.CharField(max_length=30)),
                ('year', models.PositiveIntegerField()),
                ('image', models.CharField()),
                ('bodystyle', models.CharField()),
                ('engine', models.CharField()),
                ('power', models.PositiveIntegerField()),
                ('layout', models.CharField()),
                ('weight', models.PositiveIntegerField()),
                ('description', models.TextField(max_length=1000)),
            ],
        ),
    ]
