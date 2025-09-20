# HTML 基础知识

## 知识点

### 术语


### 基本结构
```html
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
```html
<header></header>：页面头部（如标题、导航）
<footer></footer>：页面底部（如版权信息）
<main></main>：主要内容区域（一个页面只应有一个）
<section></section>：独立区块（如章节、模块）
<article></article>：独立文章（如博客、新闻）
```

**容器与布局标签**
```html
<div></div> - 通用块级容器（无语义，用于布局）
<span></span> - 通用行内容器（用于局部样式调整）
```

**链接与媒体标签**
```html
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
```html
无序列表：
<ul> + <li>（默认带圆点）
有序列表：
<ol> + <li>（默认带数字）
```

**表单标签（用户交互核心）**
```html
表单容器：
<form action="提交地址" method="get/post">

输入框：
<input type="text" name="username" placeholder="提示文本">
type：可取值text/password/email/checkbox等

按钮：
<button type="button">点击</button>
```

**自闭合标签** - empty element

`<br>`：插入换行符（换行）

例：`<p>这是第一行<br>这是第二行</p>`


`<hr>`：插入水平线（分隔内容区块）
```html
<h2>章节1</h2>
<p>章节1内容...</p>
<hr>
<h2>章节2</h2>
```

`<input>`：创建表单输入控件（如文本框、按钮、复选框等）
```html
<input type="text" name="username" placeholder="请输入文本" required>
<input type="password" name="password" placeholder="请输入密码" required>
<input type="email" name="agree"> 同意协议
<input type="checkbox" name="agree" value="yes" required>同意服务协议
```
`link`：链接外部资源（如 CSS 样式表、图标等）
```html
<link rel="stylesheet" href="style.css"> <!-- 引入CSS文件 -->
```

`<meta>`：定义页面元数据（如字符集、视口设置、页面描述等）
```html
<meta charset="UTF-8"> <!-- 定义字符编码 -->
<meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- 响应式视口设置 -->
```

`<base>`：用途：指定页面中所有相对 URL 的基准 URL
```html
<base href="https://example.com/images/"> <!-- 后续相对路径基于此URL -->
<img src="logo.png"> <!-- 实际加载 https://example.com/images/logo.png -->
```

`<embed>`：嵌入外部资源（如插件、音频、视频等）
```html
<embed src="video.swf" type="application/x-shockwave-flash">
```

`<source>`：为媒体元素（`<video>`、`<audio>`）指定多个资源（适配不同格式）
```html
<video controls>
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
</video>
```

`<wbr>`：指定文本中可能的换行点（浏览器可根据宽度自动换行）
```html
<p>这是一个很长的单词：pneumonoultramicroscopicsilicovolcanoconiosis<wbr>example</p>
```

### Attribute - 属性
**id**：唯一标识（页面内不可重复，用于 JS 获取元素）
```html
<button id="clickMeButton">点击我</button>
```

**class**
```html
<div class="exercise-nav">导航容器</div>
```

**style**
```html
<div style="display: none;">隐藏内容</div>
```

**自定义属性**：以data-开头，用于存储额外数据
```html
<div data-id="1" data-category="fruit">苹果</div>
```