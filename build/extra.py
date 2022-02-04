from os import system
from platform import system as sistema_operacional 
from json import load
from build.arquivo import Arquivo
from build.funcoes_de_arquivo import textos_dos_arquivos

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

def render_html(arquivos_gerais:list[Arquivo],arquivos_da_pagina:list[Arquivo]):
    arquivos_totais = arquivos_gerais + arquivos_da_pagina
    css:list[Arquivo] = list(filter(lambda arq: arq.tipo == 'style',arquivos_totais))
    script:list[Arquivo] = list(filter(lambda arq: arq.tipo == 'script',arquivos_totais))
    texto_css = textos_dos_arquivos(css)
    texto_script = textos_dos_arquivos(script)
    with open('build/template.html','r') as arq:
        template = arq.read()
        com_estilo = template.replace('/*estilo*/',texto_css)
        com_script = com_estilo.replace('/*script*/',texto_script)
        return com_script
