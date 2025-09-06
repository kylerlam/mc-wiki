# bilibili Scrapy 观看笔记
## 优点
1. 异步请求 - 发送完请求后无需等待完成，可以先做别的事eg.抓取某数据项/存储数据库......
2. 自带架构 - 分成不同小模块，每个模块完成不同功能
## 工作流
![](image/data flow.png)
1. spiders负责爬数据 - engine大哥，我好闲，我请求去爬网站！
2. engine(大哥大) - 带着spiders的请求来问scheduler（任务分配员）
3. scheduler - 告诉engine它能爬的具体网站
4. engine大哥 - 收到scheduler的建议，把网站爬取的请求发给downloader（html请求者）
5. downloader - 向网站发出请求获得html并把它交给engine大哥
6. engine大哥 - 拿到html并对其进行解析，筛选出有用的资料，变成item，最后把item送到pipelines
7. item piplines(数据处理者) - 把数据存入数据库/打印出来/写到文件中

有两个中间件
- process_response()
- process_spider_input()

## 命令
```commandline
# 1. 创建一个新项目
scrapy startproject <project_name>
# 2. (从Spider开始) 创建一个spider.py，然后在内写code
# 3. 启动爬虫项目，名字是spider.py里定义的name
scrapy crawl <name>
```
## Reference
bilibili视频
https://www.bilibili.com/video/BV1KHNizkEED/?spm_id_from=333.337.search-card.all.click&vd_source=2df212e4a9a7b64e26dfa0b5619b848c