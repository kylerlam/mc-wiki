import useGoTo from "./useGoTo";

export default function Index() {
  const goTo = useGoTo();

  return (
    <>
      <h1>我是index page</h1>
      <br />
      <hr />
      <button type="button" onClick={() => goTo("/login")}>
        go to Login
      </button>
      <br />
      <button type="button" onClick={() => goTo("/home")}>
        go to Home
      </button>
      <br />
      <button type="button" onClick={() => goTo("/register")}>
        go to register
      </button>
      <br />
      <hr />
      <button type="button" onClick={() => goTo("/name_tdlist")}>
        go to Name To Do List Page
      </button>
      <br />
      <button type="button" onClick={() => goTo("/date_tdlist")}>
        go to Date To Do List Page
      </button>
      <br />
      <button type="button" onClick={() => goTo("/object_deliver")}>
        go to object_deliver Page
      </button>
      <br />
      <button type="button" onClick={() => goTo("/all_in_one_obj")}>
        go to All-In-One Object Page
      </button>
      <br />
      <hr />
      <button type="button" onClick={() => goTo("/access_avatar")}>
        go to Avatar Page
      </button>
      <br />
    </>
  );
}
