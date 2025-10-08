// 第 1 个挑战 共 4 个挑战: 把列表一分为二
// 请试着把它分成一前一后的两个列表：分别是 化学家们 和 其余的人。
// 像之前一样，你可以通过 person.profession === '化学家' 这个条件来判断一个人是不是化学家。
import { people } from "./data.js";
import { getImageUrl } from "./utils.js";

export default function List() {
  const chemists = people.filter((person) => person.profession === "化学家");
  const others = people.filter((person) => person.profession != "化学家");

  return (
    <article>
      {/* 使用两次 filter() 方法来获得两个单独的数组，然后用 map 方法分别遍历它们来得到结果。 */}
      <h1>科学家</h1>
      <h2>化学家</h2>
      <ul>
        {chemists.map((person) => (
          <li key={person.id}>
            <img src={getImageUrl(person)} alt={person.name} />

            <p>
              <b>{person.name}:</b>
              {" " + person.profession + " "}因{person.accomplishment}而闻名世界
            </p>
          </li>
        ))}
      </ul>
      <hr />
      <h2>其它家</h2>
      <ul>
        {others.map((person) => (
          <li key={person.id}>
            <img src={getImageUrl(person)} alt={person.name} />

            <p>
              <b>{person.name}:</b>
              {" " + person.profession + " "}因{person.accomplishment}而闻名世界
            </p>
          </li>
        ))}
      </ul>
    </article>
  );
}
