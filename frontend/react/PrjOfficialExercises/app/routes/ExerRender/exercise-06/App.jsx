// 第 3 个挑战 共 4 个挑战: 把列表项提取成一个组件

import { recipes } from "./data.js";

// 定义一个名为 Recipe 的组件，负责显示单个菜谱的内容
// 参数是 props，通过解构直接获取 id, name, ingredients
function Recipe({ id, name, ingredients }) {
  return (
    <div>
      {/* 显示菜谱的名称 */}
      <h2>{name}</h2>

      {/* 用 <ul> 显示食材列表 */}
      <ul>
        {/* 遍历 ingredients（食材数组），为每一项创建一个 <li> 元素 */}
        {ingredients.map((ingredient) => (
          // 每个 <li> 需要加一个唯一的 key，建议用 ingredient 本身（假设不重复）
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}

// 默认导出主组件 RecipeList，用来显示所有菜谱
export default function RecipeList() {
  return (
    <div>
      {/* 页面主标题 */}
      <h1>菜谱</h1>

      {/* 遍历 recipes 数组，为每个菜谱渲染一个 Recipe 子组件 */}
      {recipes.map((recipe) => (
        // 使用解构传递所有属性（id, name, ingredients）给 Recipe 组件
        // 同时指定 key 是 recipe.id，以便 React 优化渲染
        <Recipe {...recipe} key={recipe.id} />
      ))}
    </div>
  );
}
