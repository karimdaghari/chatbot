from rest_framework import serializers
from bot.models import DjangoChatterbotStatement


class DjangoChatterbotStatementSerializer(serializers.ModelSerializer):
    class Meta:
        model = DjangoChatterbotStatement
        fields = ['id', 'created_at', 'conversation', 'text',
                  'in_response_to', 'persona', 'search_text', 'search_in_response_to']
