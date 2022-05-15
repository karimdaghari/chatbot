from rest_framework import serializers
from faq.models import Question, Answer


class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ['id', 'created', 'text']


class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = ['id', 'created', 'text', 'question']
        depth = 1
