import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("./routes/Index.jsx"),
  route("/home", "./routes/Home.jsx"),
  route("/login", "./routes/Login.jsx"),
  route("/register", "./routes/register.jsx"),
  route(
    "/name_tdlist",
    "./routes/using_curly_bracket_in_jsx/show_name_tdolist.jsx",
  ),
  route(
    "/date_tdlist",
    "./routes/using_curly_bracket_in_jsx/show_date_tdolist.jsx",
  ),
  route(
    "/object_deliver",
    "./routes/using_curly_bracket_in_jsx/deliver_object.jsx",
  ),
  route(
    "/all_in_one_obj",
    "./routes/using_curly_bracket_in_jsx/all_in_one_object.jsx",
  ),
] satisfies RouteConfig;
