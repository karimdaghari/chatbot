from django.contrib import admin

from faq.models import Question, Answer


class QuestionAdmin(admin.ModelAdmin):
    fieldsets = [
        ('Type your question', {'fields': ['text']})
    ]

    list_display = ['text']


class AnswerAdmin(admin.ModelAdmin):
    fieldsets = [
        ('Select related question', {'fields': ['question']}),
        ('Type the answer', {'fields': ['text']})
    ]

    list_display = ['question', 'text']


admin.site.register(Question, QuestionAdmin)
admin.site.register(Answer, AnswerAdmin)

admin.site.urls
