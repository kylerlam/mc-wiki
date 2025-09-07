# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
from itemadapter import ItemAdapter
from pymongo import MongoClient

# 处理数据：存储、写入文件、打印
class SinaPipeline:

    database = 'sina_db'

    def __init__(self, mongo_host, mongo_port):
        self.mongo_host = mongo_host
        self.mongo_port = mongo_port

    @classmethod
    def from_crawler(cls, crawler):
        return cls(
            crawler.settings.get('MONGO_HOST'),
            crawler.settings.get('MONGO_PORT')
        )
    # 开始的时候要用什么配置
    def open_spider(self, spider):
        self.client = MongoClient(host=self.mongo_host, port=self.mongo_port)
        self.database = self.client[self.database_name]
        self.collection = self.database['items']

    # 结束的时候要用什么配置
    def close_spider(self, spider):
        pass

    def process_item(self, item, spider):
        return item
