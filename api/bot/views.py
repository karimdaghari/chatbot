from rest_framework.response import Response
from rest_framework.views import APIView
from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer
from chatterbot.ext.django_chatterbot import settings

from bot.models import DjangoChatterbotStatement
from bot.serializers import DjangoChatterbotStatementSerializer


class BotList(APIView):
    """
    List all bot statements, or create a new statement.
    """

    chatbot = ChatBot(**settings.CHATTERBOT)

    trainer = ChatterBotCorpusTrainer(chatbot)

    def get(self, request):
        statements = DjangoChatterbotStatement.objects.all()
        serializer = DjangoChatterbotStatementSerializer(statements, many=True)
        data = serializer.data

        def shapeData(datum: any):
            created_at: str = datum['created_at']
            text: str = datum['in_response_to']
            bot_reply: str = datum['text']

            return {
                'created_at': created_at,
                'text': text,
                'bot_reply': bot_reply
            }
        mappedData = map(shapeData, data)
        return Response(mappedData)

    def post(self, request):
        input = request.data['text']
        response = self.chatbot.get_response(input)
        reply = response.serialize()

        return Response(reply)
