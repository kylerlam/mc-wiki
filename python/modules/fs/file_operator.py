import os, json


class FileOperator():
    def __init__(self, file_directory: str = None):
        self.filedir = file_directory
        if self.filedir:
            os.makedirs(self.filedir, exist_ok=True)  # 确保目录存在

    def read_file(self, filedir):
        with open(filedir, 'r', encoding='utf-8') as f:
            filedir = f.read()
            return filedir

    def write_file(self):
        pass


