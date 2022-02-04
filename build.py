
from os import walk,getcwd


for d,r,file in next(walk(getcwd())):
     print(file)