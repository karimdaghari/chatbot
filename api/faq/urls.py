from django.urls import path
from faq.views import QuestionList, AnswerList

urlpatterns = [
    path('question/', QuestionList.as_view()),
    path('answer/', AnswerList.as_view())
]
