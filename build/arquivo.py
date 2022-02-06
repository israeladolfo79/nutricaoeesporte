
from typing import Any
from build.render import copila_jsx, referenciar

class Arquivo:

    def __init__(self,dir:str,file:str) -> None:
        self.path = f'{dir}\{file}'
        self.file = file
        self.extensao = file.split('.')[-1]
        self.tipo = self.get_tipo(self.extensao)
        self.implementacao = self.get_implementacao(file)
        self.value = ''
        if self.implementacao == 'de acordo com o tipo':
            with open(self.path,'r') as arq:
                self.content = arq.read()
    
    
    def __repr__(self) -> str:
        return '-----------------------------\n'\
                f'caminho: {self.path}\n' \
                f'extensao: {self.extensao}\n' \
                f'implementacao: {self.implementacao}'
    
    def arquivo_igual(self,arquivos_anteriores:list)->str:
        if not arquivos_anteriores:
            return 
        for arq in arquivos_anteriores:
            if arq.file != self.file:
                if arq.content == self.content:
                    return arq.value 
                
    def copila(self,pasta_de_saida:str or None,arquivos_anteriores:list=None):   
        
        codigo = self.arquivo_igual(arquivos_anteriores) 
        if codigo:
            self.value = codigo 

        elif self.implementacao == 'ignorar':
            return ''
            
        elif self.implementacao == 'referenciar':
           self.value =  referenciar(self.extensao,self.path,self.file,pasta_de_saida)

        elif self.implementacao ==  'de acordo com o tipo':
            
            if self.extensao  in ['css','js']:
                self.value = self.content + '\n'
            if self.extensao == 'jsx':
                self.value = copila_jsx(self.content) + '\n'


    @staticmethod
    def get_tipo(estensao:str)->str:
        if estensao in ['css','sass']:
            return 'style'
        if estensao in ['js','jsx','ts']:
            return 'script'

    @staticmethod
    def get_implementacao(file:str)->str:
        if '$' in file:
            return 'referenciar'
        if '#' in file:
            return 'ignorar'
        return 'de acordo com o tipo'

    