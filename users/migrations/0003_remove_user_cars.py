# Generated by Django 5.0.1 on 2024-01-12 13:26

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_user_cars'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='cars',
        ),
    ]
