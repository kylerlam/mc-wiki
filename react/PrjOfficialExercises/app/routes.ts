import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("./routes/Index.jsx"),
  route("/home", "./routes/Home.jsx"),
  route("/login", "./routes/Login.jsx"),
  route("/register", "./routes/register.jsx"),
  route("/name_tdlist", "./routes/ExerJSX/show_name_tdolist.jsx"),
  route("/date_tdlist", "./routes/ExerJSX/show_date_tdolist.jsx"),
  route("/object_deliver", "./routes/ExerJSX/deliver_object.jsx"),
  route("/all_in_one_obj", "./routes/ExerJSX/all_in_one_object.jsx"),
  route("/access_avatar", "./routes/ExerProps/Props_Avatar.jsx"),
  route("/clock", "./routes/ExerProps/Props_Clock.jsx"),
  route("/exer01-app", "./routes/ExerProps/exercise_01/App.jsx"),
  route("/exer01-attempt", "./routes/ExerProps/exercise_01/Attempt.jsx"),
  route("/exer02-app", "./routes/ExerProps/exercise_02/App.jsx"),
  route("/exer02-Attempt", "./routes/ExerProps/exercise_02/Attempt.jsx"),
  route("/exer03-app", "./routes/ExerProps/exercise_03/App.jsx"),
  route("/exer03-Attempt", "./routes/ExerProps/exercise_03/Attempt.jsx"),
] satisfies RouteConfig;
