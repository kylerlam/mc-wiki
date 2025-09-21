import { useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();

  const goToLoginPage = () =>{
    navigate('/login')
  }

  const goToHomePage = () =>{
    navigate('/home')
  }
  
  return (
    <>
    <button type="button" onClick={goToLoginPage}>Login</button><br />
    <button type="button" onClick={goToHomePage}>Home</button>
    </>
  );
}
