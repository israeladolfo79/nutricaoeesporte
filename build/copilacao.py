from os import system,remove
def copila_com_comando(comando:str,arquivo:str) ->str:
    HASH = '23423wea3sss'
    system(comando.format(arquivo,HASH))
    with open(HASH,'r') as arq:
        out = arq.read()
        remove(HASH)
        return out 


def copila_jsx(arquivo:str)->str:
    COMANDO = 'babel --presets react {} -o {}'
    return copila_com_comando(arquivo)
