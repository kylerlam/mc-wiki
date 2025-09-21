import { useNavigate } from "react-router-dom";
import useGoTo from "./useGoTo";

export default function Index() {
  const goTo = useGoTo()

  return (
    <>
    <h1>我是index page</h1><br />
    <button type="button" onClick={() => goTo('/login')}>go to Login</button><br />
    <button type="button" onClick={() => goTo('/home')}>go to Home</button><br />
    <button type="button" onClick={() => goTo('/register')}>go to register</button>
    </>
  );
}
