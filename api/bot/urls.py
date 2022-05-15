from django.urls import path
from bot.views import BotList

urlpatterns = [
    path('', BotList.as_view())
]
