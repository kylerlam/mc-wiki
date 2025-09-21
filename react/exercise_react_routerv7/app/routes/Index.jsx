import { useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();

  const goToLoginPage = () =>{
    navigate('/login')
  }

  const goToHomePage = () =>{
    navigate('/home')
  }

  const goToRegisterPage = () =>{
    navigate('/register')
  }
  
  return (
    <>
    <h1>我是index page</h1><br />
    <button type="button" onClick={goToLoginPage}>go to Login</button><br />
    <button type="button" onClick={goToHomePage}>go to Home</button><br />
    <button type="button" onClick={goToRegisterPage}>go to register</button>
    </>
  );
}
