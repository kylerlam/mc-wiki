"use client";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const ref = useRef(null); // 创建一个引用，用来标记某个 DOM 元素
  const isInView = useInView(ref);
  return (
    <>
      <h1 className="text-xl">useInView</h1>
      <p ref={ref}>This is the paraghraph 1.</p>
      <p>This is the paraghraph 2.</p>
      <p>This is the paraghraph 3.</p>
      <p> Result: {isInView ? "Yesss" : "Noooo"}</p>
      <hr />
    </>
  );
}
// 💡 提示
// useRef：标记你想监控的元素。
// useInView(ref)：返回布尔值，表示该元素是否出现在屏幕上。
// 可以用这个 hook 做滚动触发动画、加载懒组件、统计曝光量等。
