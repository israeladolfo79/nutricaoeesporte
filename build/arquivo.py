

class Arquivo:

    def __init__(self,dir:str,file:str) -> None:
        self.path = f'{dir}\{file}'
        self.extensao = file.split('.')[-1]
        self.file = file 
        self.tipo = self.get_tipo(self.extensao)
        self.implementacao = self.get_implementacao(file)

        if self.implementacao == 'copiar':
            with open(self.path,'r') as arq:
                self.content = arq.read()
            
    def __repr__(self) -> str:
        if self.tipo:
            return '-----------------------------\n'\
                   f'caminho: {self.path}\n' \
                   f'extensao: {self.extensao}\n' \
                   f'tipo:  {self.tipo}'
        return ''   
    
    @staticmethod
    def get_implementacao(file:str)->str:
        if '$' in file:
            return 'referenciar'
        if '#' in file:
            return 'ignorar'
        else:
            return 'copiar'
    
    @staticmethod
    def get_tipo(extensao:str)->str:
        if extensao in ['css','scss','sass']:
            return 'style'
        if extensao in ['js','jsx','ts']:
            return 'script'


