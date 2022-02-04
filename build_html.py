from os import listdir
from build.extra import instalar_dependencias,render_html
from build.funcoes_de_arquivo import retorna_arquivos_gerais,retorna_arquivos_de_pasta





if __name__ == '__main__':
    instalar_dependencias()
    arquivos_gerais = retorna_arquivos_gerais()
    paginas = listdir('paginas')

    for pagina in paginas:
        arquivos_da_pagina = retorna_arquivos_de_pasta(f'paginas\{pagina}')
        html = render_html(arquivos_gerais,arquivos_da_pagina)
        with open(f'{pagina}.html','w') as arq:
            arq.write(html)



