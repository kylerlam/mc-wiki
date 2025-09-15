# Scrapy settings for sina project
#
# For simplicity, this file contains only settings considered important or
# commonly used. You can find more settings consulting the documentation:
#
#     https://docs.scrapy.org/en/latest/topics/settings.html
#     https://docs.scrapy.org/en/latest/topics/downloader-middleware.html
#     https://docs.scrapy.org/en/latest/topics/spider-middleware.html

BOT_NAME = "sina"

SPIDER_MODULES = ["sina.spiders"]
NEWSPIDER_MODULE = "sina.spiders"

ADDONS = {}


# Crawl responsibly by identifying yourself (and your website) on the user-agent
#USER_AGENT = "sina (+http://www.yourdomain.com)"

# Obey robots.txt rules
ROBOTSTXT_OBEY = True

# 要链接数据库需要继续完成...
MONGO_HOST = "localhost"
MONGO_PORT = "27017"
FEED_EXPORT_ENCODING = "utf-8"
