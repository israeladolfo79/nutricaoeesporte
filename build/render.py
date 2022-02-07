from os import system,remove
from shutil import copyfile


HASH = '23423wea3sss'
def copila_com_comando(comando:str,caminho:str) ->str:
  
    system(comando.format(caminho,HASH))
   
    try:
        with open(HASH,'r') as arq:
            texto = arq.read()
            return texto
    except:
        print('erro ocorrido em :',caminho)
        return ''

def copila_jsx(caminho:str)->str:
    COMANDO = 'babel --presets react {} -o {}'
    return copila_com_comando(COMANDO,caminho)


def copila_sass(caminho:str)->str:
    COMANDO = 'sass {} {}'
    saida =  copila_com_comando(COMANDO,caminho)
    return saida 

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




