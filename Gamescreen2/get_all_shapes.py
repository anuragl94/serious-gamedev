from os import listdir
from os.path import isfile, join

mypath = "shapes"
files = [f for f in listdir(mypath) if isfile(join(mypath, f))]
files.sort()
print(files)
