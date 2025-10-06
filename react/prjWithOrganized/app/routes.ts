import {
  type RouteConfig,
  route,
  index,
  layout,
} from "@react-router/dev/routes";

export default [
  // 根布局：为 / 与 /home 提供统一 Header + Sidebar 框架
  layout("routes/home.tsx", [
    index("routes/home/index.tsx", { id: "home-index" }),
    route("home", "routes/home/index.tsx", { id: "home-alt" }),
    route("home/admin", "routes/home/admin.tsx", { id: "home-admin" }),
    route("home/user", "routes/home/user.tsx", { id: "home-user" }),
    route("forgot", "routes/auth/forgot.tsx", { id: "auth-forgot" }),
  ]),
  route("/login", "routes/auth/login.tsx"),
  route("/register", "routes/auth/register.tsx"),
  route("/welcome", "routes/welcome.tsx"),
] satisfies RouteConfig;

