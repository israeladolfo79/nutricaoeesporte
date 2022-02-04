
from audioop import reverse
from os import walk,getcwd



def get_extension(file:str)->str:
    elemns = file.split('.')


for root, dirs, files in walk(getcwd()):
    print(files)
