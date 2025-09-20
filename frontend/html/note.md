# HTML - HyperText Markup Language

## 知识点

### 术语


### 基本结构
```
<!DOCTYPE html>  <!-- 声明文档类型为HTML5 -->
<html lang="zh-CN">  <!-- 根元素，lang指定语言 -->
<head>
  <!-- 头部：元数据、样式、脚本等 -->
  <meta charset="UTF-8">  <!-- 字符编码（必写，避免乱码） -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">  <!-- 响应式配置 -->
  <title>页面标题</title>  <!-- 浏览器标签页标题 -->
  <link rel="stylesheet" href="style.css">  <!-- 引入外部CSS -->
  <script src="script.js"></script>  <!-- 引入外部JS -->
</head>
<body>
  <!-- 主体：网页可见内容 -->
  <h1>页面内容</h1>
</body>
</html>
```

### Tag - 标签

**语义化标签**
```
<header></header>：页面头部（如标题、导航）
<footer></footer>：页面底部（如版权信息）
<main></main>：主要内容区域（一个页面只应有一个）
<section></section>：独立区块（如章节、模块）
<article></article>：独立文章（如博客、新闻）
```

**容器与布局标签**
```
<div></div> - 通用块级容器（无语义，用于布局）
<span></span> - 通用行内容器（用于局部样式调整）
```

**链接与媒体标签**
```
链接：
<a href="url" target="_blank">文本</a>
href：目标地址（可以是 URL、锚点#id）
target="_blank"：新窗口打开

图片：
<img src="路径" alt="替代文本">
src：图片路径（必填）
alt：图片加载失败时显示的文本（必填，利于无障碍）
```

**列表标签**
```
无序列表：
<ul> + <li>（默认带圆点）
有序列表：
<ol> + <li>（默认带数字）
```

**表单标签（用户交互核心）**
```
表单容器：
<form action="提交地址" method="get/post">

输入框：
<input type="text" name="username" placeholder="提示文本">
type：可取值text/password/email/checkbox等

按钮：
<button type="button">点击</button>
```

### Attribute - 属性
**id**：唯一标识（页面内不可重复，用于 JS 获取元素）
```
<button id="clickMeButton">点击我</button>
```

**class**
```
<div class="exercise-nav">导航容器</div>
```

**style**
```
<div style="display: none;">隐藏内容</div>
```

**自定义属性**：以data-开头，用于存储额外数据
```
<div data-id="1" data-category="fruit">苹果</div>
```