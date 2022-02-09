from os import listdir
from build.arquivo import Arquivo
from build.extra import instalar_dependencias
from build.extra import arquivos_da_pasta,retorna_pasta_de_saida
from build.render import cria_tag_com_valor



def get_texto_do_arquivo(arquivos:list[Arquivo],tipo:str)->str:
    filtrado = list(filter(lambda arq:arq.tipo == tipo,arquivos))
    referenciados:list[str] = []
    nao_referenciados:list[str] = []
    for arq in filtrado:
        if arq.implementacao == 'referenciar':
            referenciados.append(arq.value)
        else:
            nao_referenciados.append(arq.value)
    texto_referenciados = str().join(referenciados)
    texto_nao_referenciados = cria_tag_com_valor(tipo,str().join(nao_referenciados))
    return texto_referenciados+texto_nao_referenciados


def render_html(pagina:str,arquivos:list[Arquivo],pasta_de_saida:str or None):

    texto_css = get_texto_do_arquivo(arquivos,'style')
    texto_script = get_texto_do_arquivo(arquivos,'script')
    texto_gerado = texto_css + texto_script
    with open('build/template.html','r') as arq:
        modelo = arq.read()
        texto_final = modelo.replace('#entrada',texto_gerado)
        caminho = f'{pagina}.html'
        if pasta_de_saida:
            caminho = pasta_de_saida + caminho
        with open(caminho, 'w') as saida:
                print('renderizou o html')
                saida.write(texto_final)

if __name__ == '__main__':

    instalar_dependencias()
    
    arquivos_das_paginas_anteriores:dict[str,Arquivo] = {} 
    while True:
        arquivos_gerais = arquivos_da_pasta('globais')
        paginas = listdir('paginas')
        pasta_de_saida = retorna_pasta_de_saida()

        for pagina in paginas:
            pg = f'paginas/{pagina}'
            arquivos_totais = arquivos_gerais + arquivos_da_pasta(pg)
            try:
                pagina_anterior = arquivos_das_paginas_anteriores[pagina]
                list(map(lambda arq :arq.copila(pasta_de_saida,pagina_anterior),arquivos_totais))
            except KeyError:
                list(map(lambda arq :arq.copila(pasta_de_saida),arquivos_totais))

            render_html(pagina,arquivos_totais,pasta_de_saida)
            arquivos_das_paginas_anteriores[pagina] = arquivos_totais

