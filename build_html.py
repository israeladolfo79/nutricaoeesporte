from os import listdir
from build.extra import instalar_dependencias
from build.extra import arquivos_da_pasta,retorna_pasta_de_saida
from build.implementacao import copila_html


if __name__ == '__main__':

    instalar_dependencias()
    
    arquivos_gerais = arquivos_da_pasta('globais')
    pasta_de_saida = retorna_pasta_de_saida()
    paginas = listdir('paginas')
    for pagina in paginas:
        pass 
