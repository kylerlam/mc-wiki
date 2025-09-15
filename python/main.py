from modules.fs import file_system as fs


if __name__ == '__main__':
    currentdir = fs.FileDirectory().get_currentdir()
    # print(currentdir)
    rootdir = fs.FileDirectory().get_rootdir()
    # print(rootdir)
    # filedir = fs.FileDirectory().search_file('main.py')
    filedir = fs.FileDirectory().get_filedir('result.json')
    # print(filedir)

