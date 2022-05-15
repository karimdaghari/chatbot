from chatterbot import ChatBot
from chatterbot.trainers import ListTrainer
from chatterbot.trainers import ChatterBotCorpusTrainer

bot = ChatBot("buddy",
              storage_adapter="chatterbot.storage.SQLStorageAdapter",
              database_uri='sqlite:///db.sqlite3'
              )

trainer = ChatterBotCorpusTrainer(bot)

trainer.train('chatterbot.corpus.english')

while True:
    try:
        print('> ', end='')
        output = bot.get_response(input())
        print(output)
    except(KeyboardInterrupt, EOFError, SystemExit):
        break
