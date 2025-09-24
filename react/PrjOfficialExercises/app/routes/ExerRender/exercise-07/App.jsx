// 第 4 个挑战 共 4 个挑战: 带有分隔符的列表
// 下面这个示例展示了立花北枝一首著名的俳句，它的每一行都由 <p> 标签包裹。
// 你需要在段落之间插入分隔符 <hr />，最终的结果大概像这样：
{
  /* 最终效果
  <article>
    <p>I write, erase, rewrite</p>
    <hr />
    <p>Erase again, and then</p>
    <hr />
    <p>A poppy blooms.</p>
  </article> 
*/
}
const poem = {
  lines: [
    "I write, erase, rewrite",
    "Erase again, and then",
    "A poppy blooms.",
  ],
};

export default function Poem() {
  // 1) 先准备一个“中间数组”来承载要渲染的 JSX 元素
  //   为什么不用直接 return map？
  //   —— 因为这里想在每两段 <p> 之间插入 <hr />，并且第一个前面不加，所以用可变数组更直观
  let output = [];

  // 2) 遍历每一行文本
  //    forEach 逐个把 “分隔线 + 正文” 压入输出数组
  poem.lines.forEach((line, i) => {
    // 2.1) 先推入分隔线 <hr />
    //      注意：列表渲染时必须提供 key，保证 React 能稳定识别元素
    //      这里用 i + "-separator" 组成“稳定的、可读的、唯一的” key
    output.push(<hr key={i + "-separator"} />);

    // 2.2) 再推入正文 <p>，同样提供唯一 key
    output.push(<p key={i + "-text"}>{line}</p>);
  });

  // 3) 去掉数组开头的第一个 <hr />，避免在第一段前出现分隔线
  //    —— 这样就实现了 “段落之间才有 <hr />” 的视觉效果
  output.shift();

  // 4) 渲染：把准备好的元素数组直接塞进 <article> 中
  //    React 能直接渲染数组里的多个元素（每个都有 key）
  return <article>{output}</article>;
}
