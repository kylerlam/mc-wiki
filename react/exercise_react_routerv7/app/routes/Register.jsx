import { useNavigate } from "react-router"


export default function Register(){
    const navigate = useNavigate()
    function goToIndexPage(){
        navigate("/")
    }
    return(
        <>
        <h1>Wellcome to register page</h1>
        <input type="text" placeholder="enter password"/>
        <input type="password" placeholder="enter password"/>
        <input type="password" placeholder="enter password"/><br />
        <button type="button">Confirm</button><br />
        <button type="button" onClick={goToIndexPage}>Go to Index Page</button><br />
        </>
    )
}