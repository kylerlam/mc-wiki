// function Item({ name, isPacked }) {
//   if (isPacked) {
//     return <li className="item">✅{name}</li>;
//   } else {
//     return <li className="item">❌{name}</li>;
//   }
// }

// // 只显示未完成打包的
// function Item({ name, isPacked }) {
//   if (isPacked) {
//     return null;
//   }
//   return <li className="item">{name}</li>;
// }

// // 三元运算表达
// function Item({ isPacked, name }) {
//   return (
//     <li className="item">
//       {isPacked ? "✅" : "❌"} {name}
//     </li>
//   );
// }

// // 添加删除线 del
// function Item({ isPacked, name }) {
//   return (
//     <li className="item">
//       {isPacked ? (
//         <span>
//           ✅<del>{name}</del>
//         </span>
//       ) : (
//         "❌" + name
//       )}
//     </li>
//   );
// }

// // 用 && AND 运算符
// function Item({ isPacked, name }) {
//   return (
//     <li className="item">
//       {isPacked && "✅"}
//       {name}
//     </li>
//   );
// }

// // 在 JSX 中通过大括号使用 JavaScript
// function Item({ isPacked, name }) {
//   let itemContent = "❌" + name;
//   if (isPacked) {
//     itemContent = "✅" + name;
//   }

//   return <li className="item">{itemContent}</li>;
// }

function Item({ name, isPacked }) {
  let itemContent = "❌" + name;
  if (isPacked) {
    itemContent = <del>{" ✅" + name}</del>;
  }
  return <li className="item">{itemContent}</li>;
}

export default function PackingList() {
  return (
    <section>
      <h1>Sall Ride 行李清单:</h1>
      <ul>
        <Item isPacked={true} name="宇航服" />
        <Item isPacked={true} name="带金箔的头盔" />
        <Item isPacked={false} name="Tony 的内裤" />
      </ul>
    </section>
  );
}
