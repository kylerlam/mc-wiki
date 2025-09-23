import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("./routes/Index.jsx"),
  route("/home", "./routes/ExerRouter/Home.jsx"),
  route("/login", "./routes/ExerRouter/Login.jsx"),
  route("/register", "./routes/ExerRouter/register.jsx"),
  route("/name-tdlist", "./routes/ExerJSX/show-name-tdolist.jsx"),
  route("/date-tdlist", "./routes/ExerJSX/show-date-tdolist.jsx"),
  route("/object-deliver", "./routes/ExerJSX/deliver-object.jsx"),
  route("/all-in-one-obj", "./routes/ExerJSX/all-in-one-object.jsx"),
  route("/access-avatar", "./routes/ExerProps/exercise-00/Avatar.jsx"),
  route("/clock", "./routes/ExerProps/exercise-00/Clock.jsx"),
  route("/exer-01-app", "./routes/ExerProps/exercise-01/App.jsx"),
  route("/exer-01-attempt", "./routes/ExerProps/exercise-01/Attempt.jsx"),
  route("/exer-02-app", "./routes/ExerProps/exercise-02/App.jsx"),
  route("/exer-02-attempt", "./routes/ExerProps/exercise-02/Attempt.jsx"),
  route("/exer-03-app", "./routes/ExerProps/exercise-03/App.jsx"),
  route("/exer-03-attempt", "./routes/ExerProps/exercise-03/Attempt.jsx"),
  route("/wks-compound-interest", "./routes/WksCompoundInterest/App.jsx"),
] satisfies RouteConfig;
