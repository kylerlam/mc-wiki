import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    let role: string | null = null;
    try {
      role = typeof window !== "undefined" ? window.localStorage.getItem("role") : null;
    } catch {}

    const target = role === "admin" ? "/home/admin" : "/home/user";
    navigate(target, { replace: true });
  }, [navigate]);

  return null; // 重定向后不渲染内容
}
