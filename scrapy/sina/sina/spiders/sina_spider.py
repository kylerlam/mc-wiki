import scrapy, re
from bs4 import BeautifulSoup


class SinaSpider(scrapy.Spider):
    name = "sina"
    start_urls = [
        "https://news.sina.com.cn/"
    ]
    def parse(self, response):
        # print(response.text)
        soup = BeautifulSoup(response.body, "html.parser")

        # 得到所有新闻标题
        tags = soup.find_all('a', href=re.compile("sina.*\d{4}-\d{2}-\d{2}"))
        for tag in tags:
            print(tag.text.strip())