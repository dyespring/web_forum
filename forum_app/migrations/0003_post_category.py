# Generated by Django 5.0.4 on 2024-04-29 12:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('forum_app', '0002_comment'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='category',
            field=models.CharField(default='dummy', max_length=50),
            preserve_default=False,
        ),
    ]
