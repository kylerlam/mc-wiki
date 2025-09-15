import os


a = os.path.dirname('__file__')
if os.path.exists('asd'):
    print('file exists')
else :
    print('file does not exists')
print(a)