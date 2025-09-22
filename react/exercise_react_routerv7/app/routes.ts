import {
  type RouteConfig,
  index,
  route,
} from "@react-router/dev/routes";

export default [
    index("./routes/Index.jsx"),
    route("/home", "./routes/Home.jsx"),
    route("/login", "./routes/Login.jsx"),
    route("/register", "./routes/register.jsx"),
    route("/tdlist", "./routes/using_curly_bracket_in_jsx/show_name_tdolist.jsx"),
] satisfies RouteConfig;
