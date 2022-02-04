
from audioop import reverse
from os import walk,getcwd


class Arquivo:


    def __init__(self,dir:str,file:str) -> None:
      
        self.extension = file.split('.')[-1]

        with open( f'{dir}\{file}','r') as arq:
            content = arq.read()
    
    @staticmethod
    def get_type(extension:str)->str:
                

def retorna_arquivos(pasta:str)->list[Arquivo]:
    arquivos:list[Arquivo] = []

    for dir,root, files in walk(pasta):
        files.reverse()
        for file in files:
            arquivos.append(Arquivo(dir,file))
    arquivos.reverse()
    return arquivos



