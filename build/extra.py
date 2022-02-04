from os import system,walk
from platform import system as sistema_operacional 
from json import load
from build.arquivo import Arquivo

def instalar_dependencias():

    try:
        with open('package.json','r') as arq:
            chaves = load(arq)['dependencies'].keys()
            if 'babel-preset-react' in chaves:
                return 
    except FileNotFoundError:
        comand = """npm install -g  babel-cli && npm install babel-preset-react"""
        
        if sistema_operacional() == 'Linux':
            system('sudo apt install node')
            system('sudo ' + comand)
        else:
            system(comand)

def arquivos_da_pasta(pasta:str)->list[Arquivo]:
    arquivos:list[Arquivo] = []

    for dir,root, files in walk(pasta):
        files.reverse()
        for file in files:
            arquivos.append(Arquivo(dir,file))
    arquivos.reverse()
    return arquivos

