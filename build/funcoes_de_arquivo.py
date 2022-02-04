from os import walk
from build.arquivo import Arquivo


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
