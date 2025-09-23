import { useNavigate } from "react-router";
import useGoTo from "./useGoTo";

export default function Register() {
  const goTo = useGoTo();

  return (
    <>
      <h1>Wellcome to register page</h1>
      <input type="text" placeholder="enter password" />
      <input type="password" placeholder="enter password" />
      <input type="password" placeholder="enter password" />
      <br />
      <button type="button">Confirm</button>
      <br />
      <br />
      <button type="button" onClick={() => goTo("/login")}>
        Go to Login Page
      </button>
      <br />
      <button type="button" onClick={() => goTo("/")}>
        Go to Index Page
      </button>
      <br />
    </>
  );
}
