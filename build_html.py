from os import listdir
from build.extra import instalar_dependencias
from build.extra import arquivos_da_pasta,retorna_pasta_de_saida


if __name__ == '__main__':

    instalar_dependencias()
    
    arquivos_gerais = arquivos_da_pasta('globais')
    paginas = listdir('paginas')

    for pagina in paginas:
        arquivos_totais = arquivos_gerais + arquivos_da_pasta(pagina)
    