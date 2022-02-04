

from os import walk,getcwd,listdir



class Arquivo:

    def __init__(self,dir:str,file:str) -> None:
        self.path = f'{dir}\{file}'
        self.extensao = file.split('.')[-1]
        self.tipo = self.get_tipo(self.extensao)

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
    def get_tipo(extensao:str)->str:
        if extensao in ['css','scss','sass']:
            return 'style'
        if extensao in ['js','jsx','ts']:
            return 'script'


    def render(self) ->str:
        if self.extensao in ['css','js']:
            return self.content
    
        return ''



def retorna_arquivos_de_pasta(pasta:str)->list[Arquivo]:
    arquivos:list[Arquivo] = []

    for dir,root, files in walk(pasta):
        files.reverse()
        for file in files:
            arquivos.append(Arquivo(dir,file))
    arquivos.reverse()
    return arquivos



def retorna_arquivos_gerais() ->list[Arquivo]:
    PASTAS_GERAIS = ['bibliotecas','componentes','constantes','estilo']
    return  list(map(lambda pasta: retorna_arquivos_de_pasta(pasta),PASTAS_GERAIS))


def render_html(arquivos_gerais:list[Arquivo],arquivos_da_pagina:list[Arquivo]):
    total = arquivos_gerais + arquivos_da_pagina
    css = list(filter(lambda arq: arq.style == 'stype',total))
    script = list(filter(lambda arq: arq.style == 'stype',total))

    
def main():
    arquivos_geais = retorna_arquivos_gerais()
    paginas = listdir('paginas')
    for pagina in paginas:
        arquivos_da_pagina = retorna_arquivos_de_pasta(pagina)


main()

    