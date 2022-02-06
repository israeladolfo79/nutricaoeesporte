

from unittest.util import strclass
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
    

    def copila(self,pasta_de_saida:str or None):    
        if self.implementacao == 'ignorar':
            return ''

        elif self.implementacao == 'referenciar':
           self.value =  referenciar(self.extensao,self.path,self.file,pasta_de_saida)

        elif self.implementacao ==  'de acordo com o tipo':
            
            if self.extensao  in ['css','js']:
                self.value = self.content
               
            if self.extensao  == 'jsx':
                self.value = copila_jsx(self.content)

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

    