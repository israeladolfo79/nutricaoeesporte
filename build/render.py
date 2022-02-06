from os import system,remove
from shutil import copyfile



def copila_com_comando(comando:str,codigo:str) ->str:
    HASH = '23423wea3sss'
    with open(HASH,'w') as arq:
        arq.write(codigo)
    system(comando.format(HASH,HASH))
    with open(HASH,'r') as arq:
        texto = arq.read()
    remove(HASH)
    return texto


def copila_jsx(codigo:str)->str:
    COMANDO = 'babel --presets react {} -o {}'
    return copila_com_comando(COMANDO,codigo)


def referenciar(extensao:str,path:str,file:str,pasta_de_saida:str or None):
    if extensao == 'js':
            comand =  '<script src="{}"></script>\n'
    if extensao == 'css':
            comand = '<link rel="stylesheet" type="text/css" href="{}" />\n'
 
    if pasta_de_saida:
        copyfile(path,f'{pasta_de_saida}\{file}')
      
        return comand.format(file)
    else:
        return comand.format(path)

def cria_tag_com_valor(tag:str,value:str):
    return f'\n<{tag}>\n{value}\n</{tag}>\n'




