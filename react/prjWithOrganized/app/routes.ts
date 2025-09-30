import { type RouteConfig, route, index, layout } from "@react-router/dev/routes";

export default [
// 根布局：为 / 和 /home 提供统一的 Header + Sidebar 框架
layout("routes/home.tsx", [
index("routes/home/index.tsx", { id: "home-index" }), // /
route("home", "routes/home/index.tsx", { id: "home-alt" }), // 没斜杆的方法可以在同级里不需要重复引用
]),
route("/login", "routes/auth/login.tsx"),
route("/register", "routes/auth/register.tsx"),
] satisfies RouteConfig;