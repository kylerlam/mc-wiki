// 第 1 个挑战 共 3 个挑战: 用 ? : 给未完成的物品加上图标
// 当 isPacked 不为 true 时，使用条件运算符 （cond ? a : b） 来渲染 ❌

function Item({ name, isPacked }) {
  return <li className="item">{!isPacked ? "❌" + name : "✅" + name}</li>;
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride 的行李清单</h1>
      <ul>
        <Item isPacked={true} name="宇航服" />
        <Item isPacked={true} name="带金箔的头盔" />
        <Item isPacked={false} name="Tam 的照片" />
      </ul>
    </section>
  );
}
