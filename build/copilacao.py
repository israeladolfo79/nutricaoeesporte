from os import system,remove
from shutil import copy
from build.arquivo import Arquivo

def copila_com_comando(comando:str,arquivo:str) ->str:
    HASH = '23423wea3sss'
    system(comando.format(arquivo,HASH))
    with open(HASH,'r') as arq:
        out = arq.read()
    remove(HASH)
    return out 


def copila_jsx(arquivo:str)->str:
    COMANDO = 'babel --presets react {} -o {}'
    return copila_com_comando(COMANDO,arquivo)


def cria_referencia(arq:Arquivo,pasta_de_saida:str,codigo:str):

    if pasta_de_saida:
        caminho = f'{pasta_de_saida}/{arq.file}'
        copy(arq.path,caminho)
        return codigo.format(arq.file)

    return codigo.format(arq.path)        
        

def cria_referencia_javascript(arq:Arquivo,pasta_de_saida:str=None):
    codigo = '<script src="{}"> </script>\n'
    return cria_referencia(arq,pasta_de_saida,codigo)
    

def cria_referencia_css(arq:Arquivo,pasta_de_saida:str):
    codigo = '<link rel="styleshet" type="css" href="{}"/> \n'
    return cria_referencia(arq,pasta_de_saida,codigo)

   
def copila_html(
    arquivos_gerais:list[Arquivo],
    arquivos_da_pagina:list[Arquivo],
    pasta_de_saida:None) ->str:
    arquivos_totais = arquivos_gerais + arquivos_da_pagina
    
    script_interno= ''
    script_externo = ''
    css_interno =''
    css_externo = ''
    for arq in arquivos_totais:
        implementacao = arq.implementacao
        extensao = arq.extensao
        tipo = arq.tipo

        if implementacao == 'referenciar':
                if  tipo == 'style':
                    css_externo+= cria_referencia_css(arq,pasta_de_saida)    
                if tipo == 'script':
                     script_externo+=cria_referencia_javascript(arq,pasta_de_saida)
        if implementacao == 'copiar':
            if extensao == 'js':
                script_interno+='\n'+arq.content+';\n'
            if extensao == 'css':
                css_interno+='\n'+arq.content+';\n'
            if extensao == 'jsx':
                script_interno+= '\n' + copila_jsx(arq.path) + '\n'

    with open('build/template.html','r') as arq:
        template = arq.read()
        com_estilo_externo = template.replace('#css',css_externo)
        com_script_externo = com_estilo_externo.replace('#script',script_externo)
        com_estilo = com_script_externo.replace('/*estilo*/',css_interno)
        com_script = com_estilo.replace('/*script*/',script_interno)
        return com_script
        