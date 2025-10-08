// 第 3 个挑战 共 3 个挑战: 用 if 和变量重构多余的 ? :

const drinks = {
  tea: {
    part: "leaf",
    caffeine: "15–70 mg/cup",
    age: "4,000+ years",
  },
  coffee: {
    part: "bean",
    caffeine: "80–185 mg/cup",
    age: "1,000+ years",
  },
};

function Drink({ name }) {
  const info = drinks[name];
  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{info.part}</dd>

        <dt>Caffeine content</dt>
        <dd>{info.caffeine}</dd>

        <dt>Age</dt>
        <dd>{info.age}</dd>
      </dl>
    </section>
  );
}

export default function DrinkList() {
  return (
    <div>
      <Drink name="tea" />
      <hr />
      <Drink name="coffee" />
      <hr />
      <Drink name="coffee" />
      <hr />
      <Drink name="coffee" />
    </div>
  );
}
