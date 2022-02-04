from distutils.dir_util import remove_tree
from os import listdir,mkdir
from build.extra import instalar_dependencias
from build.extra import arquivos_da_pasta
from build.copilacao import copila_html
from cli_args_system import Args

if __name__ == '__main__':

    instalar_dependencias()
    args = Args()
    dir = args.flags_content('dir','d')
    pasta_de_saida = None
    if dir.exist():
        if dir.filled():
           pasta_de_saida = dir.flags()[0]
        else:
            pasta_de_saida = 'saida'
    if pasta_de_saida:
        try:
            mkdir(pasta_de_saida)
        except FileExistsError:
            remove_tree(pasta_de_saida)
            mkdir(pasta_de_saida)
    
    arquivos_gerais = arquivos_da_pasta('globais')
    paginas = listdir('paginas')

    for pagina in paginas:
        arquivos_da_pagina = arquivos_da_pasta(f'paginas\{pagina}')
        html = copila_html(arquivos_gerais,arquivos_da_pagina,pasta_de_saida)
        caminho_html = f'{pagina}.html'
        if pasta_de_saida:
            caminho_html = f'{pasta_de_saida}/{caminho_html}'
        with open(caminho_html,'w') as arq:
                        arq.write(html)

