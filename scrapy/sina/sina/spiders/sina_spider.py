import scrapy, re
from bs4 import BeautifulSoup

from sina.items import SinaItem


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

    # *如果要一直爬而不局限于主页，需要改parse_details部分的代码, 先改名为parse_details_and_continue_crawling()
    def parse_details(self, response):
        # 第一步 Parse Details:把每个连接的detail都弄出去
        soup = BeautifulSoup(response.body, "html.parser")
        # 得到标题
        try:
            # 此处的title为一个element，所有element在items.py中包装完旧编程一个item
            title = self.extract_title(soup)
            if title is None:
                raise Exception('Title not found for ' + response.url)

            print('{}已经爬取成功！{}'.format(title, response.url))
            # item.py 要用; 有多项需要再title后继续加
            item = SinaItem(_id=response.url, title=title)
            # 把 item 抛出去, 然后它就会进入item pipline
            yield item
        except Exception as e:
            self.logger.error(e)
        # 第二步 Continue crawling 继续爬

    # 抓取标题
    def extract_title(self, soup):
        selectors = ['h1.art_tit_h1', 'h1.main-title', 'div.article-header.clearfix > h1']
        for selector in selectors:
            if len(soup.select(selector)) != 0:
                title = soup.select(selector)[0].text
                return title
    # 抓取日期时间
    def extract_pub_date(self, soup):
        # ...
        pass