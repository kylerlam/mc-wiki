import { useNavigate } from "react-router"

export default function toIndexPage(){
    const navigate = useNavigate()
    function toIndex(){
        navigate('/')
    }
    return toIndex
}