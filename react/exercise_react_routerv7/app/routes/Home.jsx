import { useNavigate } from "react-router"

export default function Home(){
    const navigate = useNavigate()
    const goToIndexPage = () => {
        navigate('/')
    }

    return (
        <>
        <div>Hey, welcome to the Home page!</div><br />
        <button type="button" onClick={goToIndexPage}>back to index page</button>
        </>

    )

}