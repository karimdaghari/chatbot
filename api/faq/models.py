from django.db import models


class Question(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    text = models.TextField()

    class Meta:
        ordering = ['created']

    def __str__(self) -> str:
        return self.text


class Answer(Question, models.Model):
    question = models.OneToOneField(
        Question, related_name='related_question_id', on_delete=models.CASCADE)
