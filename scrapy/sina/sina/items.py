# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy

# 专门处理数据项
class SinaItem(scrapy.Item):

    # url of news page 对新闻进行标识
    _id = scrapy.Field()

    title = scrapy.Field()
    # 还有其它选项继续加，例如    pub_date = scrapy.Field()

