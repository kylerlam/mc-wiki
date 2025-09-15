from modules.fs import file_locator as fl
from modules.fs import file_operator as fo


if __name__ == '__main__':
    # run file_locator.py
    currentdir = fl.FileDirectory().get_currentdir()
    # print(currentdir)
    rootdir = fl.FileDirectory().get_rootdir()
    # print(rootdir)
    filedir = fl.FileDirectory().get_filedir('result.json')
    # print(filedir)

    # run file_operator.py
    file_str = fo.FileOperator().read_file(filedir)
    print(file_str)

