import scrapy, re
from bs4 import BeautifulSoup


class SinaSpider(scrapy.Spider):
    name = "sina"
    start_urls = [
        "https://news.sina.com.cn/"
    ]
    custom_settings = {
        'LOG_LEVEL': 'ERROR',
    }
    def parse(self, response):
        # print(response.text)
        soup = BeautifulSoup(response.body, "html.parser")

        tags = soup.find_all('a', href=re.compile("sina.*\d{4}-\d{2}-\d{2}"))
        for tag in tags:
            # 新闻标题
            # print(tag.text.strip())
            # 新闻链接
            # print(tag.get('href'))
            url = tag.get('href')
            yield scrapy.Request(url=url, callback=self.parse_details)

    def parse_details(self, response):
        soup = BeautifulSoup(response.body, "html.parser")
        # 得到标题
        try:
            title = self.extract_title(soup)
            if title is None:
                raise Exception('Title not found for ' + response.url)
        except Exception as e:
            self.logger.error(e)

    def extract_title(self, soup):
        selectors = ['h1.art_tit_h1', 'h1.main-title', 'div.article-header.clearfix > h1']
        for selector in selectors:
            if len(soup.select(selector)) != 0:
                title = soup.select(selector)[0].text
                return title
