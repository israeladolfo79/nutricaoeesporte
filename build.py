

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
    arquivos:list[Arquivo] = []
    for pasta in PASTAS_GERAIS:
        arquivos+=retorna_arquivos_de_pasta(pasta)
    return arquivos


def textos_dos_arquivos(arquivos:list[Arquivo])->str:
    texto_total = ''
    for arq in arquivos:
        texto = arq.render()
        if texto != '':
            texto_total+=texto+'\n'
    return texto_total


def render_html(arquivos_gerais:list[Arquivo],arquivos_da_pagina:list[Arquivo]):
    arquivos_totais = arquivos_gerais + arquivos_da_pagina
    css:list[Arquivo] = list(filter(lambda arq: arq.tipo == 'style',arquivos_totais))
    script:list[Arquivo] = list(filter(lambda arq: arq.tipo == 'script',arquivos_totais))
    texto_css = textos_dos_arquivos(css)
    texto_script = textos_dos_arquivos(script)
    with open('src/template.html','r') as arq:
        template = arq.read()
        com_estilo = template.replace('/*estilo*/',texto_css)
        com_script = com_estilo.replace('/*script*/',texto_script)
        return com_script

def main():
    arquivos_gerais = retorna_arquivos_gerais()
    paginas = listdir('paginas')

    for pagina in paginas:
        arquivos_da_pagina = retorna_arquivos_de_pasta(f'paginas\{pagina}')
        html = render_html(arquivos_gerais,arquivos_da_pagina)
        with open(f'{pagina}.html','w') as arq:
            arq.write(html)
main()

    