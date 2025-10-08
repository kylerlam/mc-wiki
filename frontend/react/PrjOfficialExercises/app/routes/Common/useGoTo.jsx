import { useNavigate } from "react-router";

export default function useGoTo() {
  const navigate = useNavigate();

  function goTo(path) {
    navigate(path);
  }
  return goTo;

  // 箭头函数写法:
  // return (path) => {navigate(path)}
}
