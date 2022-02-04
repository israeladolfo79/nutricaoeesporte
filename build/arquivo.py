

class Arquivo:

    def __init__(self,dir:str,file:str) -> None:
        self.path = f'{dir}\{file}'
        self.extensao = file.split('.')[-1]
        self.file = file 
        self.implementacao = self.get_implementacao(file)

        if self.implementacao == 'copiar':
            with open(self.path,'r') as arq:
                self.content = arq.read()
            
    def __repr__(self) -> str:
        return '-----------------------------\n'\
                f'caminho: {self.path}\n' \
                f'extensao: {self.extensao}\n' \
                f'implementacao: {self.implementacao}'
    
    @staticmethod
    def get_implementacao(file:str)->str:
        if '$' in file:
            return 'referenciar'
        if '#' in file:
            return 'ignorar'
        return 'de acordo com o tipo'

