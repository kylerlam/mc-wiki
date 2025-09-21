import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const goToIndexPage = () => {
    navigate('/')
    }
  return <>
        <h1>Please Log In</h1>
        <input type="text" placeholder="username" required/><br />
        <input type="password" placeholder="password" required/><br />
        <button type="button" >Confirm</button><br /><br />
        <button type="button" onClick={goToIndexPage}>back to index</button>
        </>
}
