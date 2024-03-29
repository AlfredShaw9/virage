# Generated by Django 5.0.1 on 2024-01-12 11:43

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('carstoid', '0004_remove_cartoid_comment_cartoid_identified_comment'),
        ('comments', '0004_comment_car_to_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cartoid',
            name='identified_comment',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='car_to_id_commented_on', to='comments.comment'),
        ),
    ]
