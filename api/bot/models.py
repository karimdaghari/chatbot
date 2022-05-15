from django.db import models


class DjangoChatterbotStatement(models.Model):
    text = models.CharField(max_length=255)
    created_at = models.DateTimeField()
    conversation = models.CharField(max_length=32)
    in_response_to = models.CharField(max_length=255, blank=True, null=True)
    persona = models.CharField(max_length=50)
    search_text = models.CharField(max_length=255)
    search_in_response_to = models.CharField(max_length=255)

    class Meta:
        managed = False
        db_table = 'django_chatterbot_statement'
