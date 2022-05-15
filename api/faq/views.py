from faq.models import Question, Answer
from faq.serializers import QuestionSerializer, AnswerSerializer
from rest_framework import generics


class QuestionList(generics.ListCreateAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer


class AnswerList(generics.ListCreateAPIView):
    queryset = Answer.objects.all()
    serializer_class = AnswerSerializer
