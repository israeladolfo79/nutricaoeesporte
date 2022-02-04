from ctypes import Union
from os import system,walk,mkdir
from platform import system as sistema_operacional 
from json import load
from distutils.dir_util import remove_tree
from build.arquivo import Arquivo
from cli_args_system import Args
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


def retorna_pasta_de_saida() ->str or None:
    args = Args()
    dir = args.flags_content('dir','d')
    pasta_de_saida = None
    if dir.exist():
        if dir.filled():
           pasta_de_saida = dir.flags()[0]
        else:
            pasta_de_saida = 'saida'
    if pasta_de_saida:
        try:
            mkdir(pasta_de_saida)
        except FileExistsError:
            remove_tree(pasta_de_saida)
            mkdir(pasta_de_saida)
    return pasta_de_saida