# 学习笔记

## 你的第一个组件

### 组件的导入与导出

一个文件中只导出一个组件，然后再从另一个文件中导入该组件

---

### `<></>` - 语法转换 converter

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



