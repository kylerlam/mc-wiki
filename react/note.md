# 学习笔记

## 你的第一个组件

### `<></>` - Fragment 语法转换 (也称转化器 converter)

把HTML 片段转成JSX

`{JS代码}` - 可以在 JSX 文件中编写 JS 语法

---

### `Props` -  组件之间的通讯

父组件通过为子组件提供 props 的方式来传递信息; 可以传递任何 JavaScript 的值，包括对象、数组、函数、甚至是 JSX

---

### `export default` - 导出组件 (JavaScript 标准语法,非 React 的特性)

使用 `function Greeting() { }` 定义名为 `Greeting` 的 JavaScript 函数

```react
// Greeting.jsx
export default function Greeting() {
  return (
    <h1>Hello</h1>
  )
}
```

```react
// main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Greeting from "./desc_ui/your_first_component/Greeting";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Greeting></Greeting>
  </StrictMode>,
);
```

---

### `return` - 添加标签

两种写法: 

```react
// 第一种
return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;
// 第二种 (带括号)
return (
  <div>
    <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
  </div>
);
```

### 大小写区分

```react
// 大写 = React 组件
<Profile />
// 小写 = 指的是 HTML 标签
<section></section>
```

## 组件的导入与导出

- 一个文件中只导出一个组件，然后再从另一个文件中导入该组件
- 重用性
- 模块化 - 把组件拆分,抽离出根目录

- **组件内定义的组件仅在该文件内使用**

### 具名导出 vs 默认导出

一个文件里有且仅有一个 默认 导出，但是可以有任意多个 具名 导出

**具名导出** - 只导出组件

```react
// Profile.jsx (或 Profile.js)
export function Profile() {
  // ...
}
```

**具名导入** - 加`{}`

```react
// App.jsx (或 App.js)
import { Profile } from "./Profile"; // 通常省略文件扩展名，或保持与导出文件一致
```

**默认导出** - 导出整个文件

```react
// Profile.jsx (或 Profile.js)
export default function Profile(){
    return( ... )
}
```

**默认导入** - 可改变名字, 功能一样

```react
// App.jsx (或 App.js)
// 可以任意命名，如 import UserProfile from "./Profile"
import Profile from "./Profile"; 
```

**箭头函数**

// 普通函数 vs 箭头函数

```react
import { useNavigate } from "react-router";

export default function useGoTo() {
  const navigate = useNavigate();

  // 普通函数写法
  function goTo(path) {
    navigate(path);
  }

  return goTo;
}
```

```react
import { useNavigate } from "react-router";

export default function useGoTo() {
    const navigate = useNavigate();
    // 箭头函数
	return (path) => navigate(path);	
}
```





---

## JSX - markup language

**规则**

1. 只能返回一个根元素 

```react
// 必须用 <div></div> 或 <></> 包裹
<div>
  <h1>海蒂·拉玛的待办事项</h1>
  <img 
    src="https://i.imgur.com/yXOvdOSs.jpg" 
    alt="Hedy Lamarr" 
    class="photo"
  >
  <ul>
    ...
  </ul>
</div>
```

2. 标签必须闭合 例: `<img />`
3. 驼峰式命名法 Camel case = DOM 属性中的命名

```react
<img 
  src="https://i.imgur.com/yXOvdOSs.jpg" 
  alt="Hedy Lamarr" 
  className="photo"
/>
```

4. 转化器 - 将现有的 HTML 转化成 JSX
5. JSX 注释符号是 { /* ... */ }
6. JSX 内嵌到 JavaScript中 (传递变量, 函数和对象)

```react

export default function Avator(){
    return (
    	<img
            className="avatar"
            // src 和 alt 被作为字符串传递
            src="https://i.imgur.com/7vQD0fPs.jpg"
            alt="Gregorio Y. Zara"
    )
}
            
// 用 {} 动态显示数据:
            export default function Avator(){
    return (
    	<img
            className="avatar"
            // src 和 alt 被作为字符串传递
            // 动态去读取 JavaScript 中avatar这个变量的值
			src={avatar}
			alt={description}     
    )
}
```

另一个示例:

```react
// JSX 标签内的文本中使用 {}, 但是 <{tag}> 中是无效的
// 可传递数据类型有: 字符串, 数字其它JavaScript 表达式
export default function TodoList() {
  const name = 'Gregorio Y. Zara';
  return (
    <h1>{name}的待办事项列表</h1>
  );
}
// 传递对象
// 对象本身带{} + 传递需要加 {} = 双括号 {{}}
export default function TodoList() {
  return (
    <ul style={{
      backgroundColor: 'black',
      color: 'pink'
    }}>
      <li>Improve the videophone</li>
      <li>Prepare aeronautics lectures</li>
      <li>Work on the alcohol-fuelled engine</li>
    </ul>
  );
}
```

---

## 路由 - React Router

react-router v7 适合小项目; v7适合大项目

``````
// 安装 React Router v7 版本
npx create-react-router@latest my-react-router-app
``````

## Props - 属性 允许组件之间的通信

- 可传递对象、数组和函数
- 数据**双向绑定**

### 展开语法

```react
// 一些组件将它们所有的 props 转发给子组件
// 父组件
function Profile({ person, size, isSepia, thickBorder }) {
  return (
    <div className="card">
      // 子组件
      <Avatar
        person={person}
        size={size}
        isSepia={isSepia}
        thickBorder={thickBorder}
      />
    </div>
  );
}
```

### 懒人语法 - 最简洁

```react
// 这会将 Profile 的所有 props 转发到 Avatar，而不列出每个名字。
function Profile(props) {
  return (
    <div className="card">
      <Avatar {...props} />
    </div>
  );
}
```

数据流

```react
function Card({children, title}){
    ...
}

export default function Profile(){
    // title="..."是一个 普通的 prop
    <Card title="..."></Card>
    <Card>(会被自动收集到 props.children 里)</Card>
}
    // 每次调用 <Card>，React 会生成一个对象,传到子组件去
    // {children} 是个占位符
```



---

### 将 JSX 作为子组件传递

```react
// 嵌套浏览器内置标签是很常见的
<div>
  <img />
</div>
```

```react
// 嵌套自己的组件 
<Card>
  // children prop
  <Avatar />
</Card>
```

