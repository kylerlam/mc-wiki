import useGoTo from "./useGoTo"

export default function Home(){
    const goTo = useGoTo()

    return (
        <>
        <div>Hey, welcome to the Home page!</div><br />
        <button type="button" onClick={ () => goTo('/')}>back to index page</button>
        </>

    )

}