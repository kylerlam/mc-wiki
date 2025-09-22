// （父组件的代码被省略，因为它使用 state，我们暂时不会深入研究。）

export default function Clock({ color, time }) {
  return <h1 style={{ color: color }}>{time}</h1>;
}

// 画面没渲染出来, 缺少所谓的 state
