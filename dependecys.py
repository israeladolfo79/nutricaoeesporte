from os import system
from platform import system as sistema_operacional

comand = """npm install -g  babel-cli && npm install babel-preset-react"""



if sistema_operacional() == 'Linux':
    system('sudo ' + comand)
else:
    system(comand)