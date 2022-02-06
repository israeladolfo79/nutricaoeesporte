from os import listdir
from build.arquivo import Arquivo
from build.extra import instalar_dependencias
from build.extra import arquivos_da_pasta,retorna_pasta_de_saida


def format_values(arquivos:list[Arquivo]) ->list[str]:
    implementacao_anterior = ''
    codigos:list[str] = []
  
    for arq in arquivos:
        
        implementacao_atual = arq.implementacao
        print(implementacao_atual)
        if implementacao_atual == 'de acordo com o tipo'\
        and implementacao_anterior == 'de acordo com o tipo':
            codigos[-1]+=arq.value
        else:
            codigos.append(arq.value)
        implementacao_anterior = implementacao_atual 
    return codigos


def render_html(pagina:str,arquivos:list[Arquivo],pasta_de_saida:str or None):
    css:list[Arquivo] = list(filter(lambda arq:arq.tipo == 'style',arquivos))
    script:list[Arquivo] = list(filter(lambda arq:arq.tipo == 'script',arquivos))
    
if __name__ == '__main__':

    instalar_dependencias()
    
    arquivos_gerais = arquivos_da_pasta('globais')
    paginas = listdir('paginas')
    pasta_de_saida = retorna_pasta_de_saida()
    for pagina in paginas:
        pg = f'paginas/{pagina}'
        arquivos_totais = arquivos_gerais + arquivos_da_pasta(pg)
        
        for x in range(0,15):
            y = arquivos_totais[x]
            y.copila(pasta_de_saida)
            
        #render_html(pagina,arquivos_totais,pasta_de_saida)