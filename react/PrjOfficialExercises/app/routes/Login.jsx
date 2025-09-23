import useGoTo from "./useGoTo";

export default function Login() {
  const goTo = useGoTo();
  return (
    <>
      <h1>Please Log In</h1>
      <input type="text" placeholder="username" required />
      <br />
      <input type="password" placeholder="password" required />
      <br />
      <button type="button">Confirm</button>
      <br />
      <br />
      <button type="button" onClick={() => goTo("/register")}>
        go to sign up!!!
      </button>
      <br />
      <button type="button" onClick={() => goTo("/")}>
        back to index
      </button>
    </>
  );
}
