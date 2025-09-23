import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("./routes/Index.jsx"),
  route("/home", "./routes/Home.jsx"),
  route("/login", "./routes/Login.jsx"),
  route("/register", "./routes/register.jsx"),
  route(
    "/name_tdlist",
    "./routes/ExerJsx/show_name_tdolist.jsx",
  ),
  route(
    "/date_tdlist",
    "./routes/ExerJsx/show_date_tdolist.jsx",
  ),
  route(
    "/object_deliver",
    "./routes/ExerJsx/deliver_object.jsx",
  ),
  route(
    "/all_in_one_obj",
    "./routes/ExerJsx/all_in_one_object.jsx",
  ),
  route(
    "/access_avatar",
    "./routes/ExerProps/Props_Avatar.jsx",
  ),
  route(
    "/clock",
    "./routes/ExerProps/Props_Clock.jsx",
  ),
  route(
    "/props_challenge_1",
    "./routes/ExerProps/exercise_01/App.jsx",
  ),
  route(
    "/props_my_version_1",
    "./routes/ExerProps/exercise_01/Attempt.jsx",
  ),
  route(
    "/props_challenge_2",
    "./routes/ExerProps/exercise_02/App.jsx",
  ),
  route(
    "/props_my_version_2",
    "./routes/ExerProps/exercise_02/Attempt.jsx",
  ),
] satisfies RouteConfig;
