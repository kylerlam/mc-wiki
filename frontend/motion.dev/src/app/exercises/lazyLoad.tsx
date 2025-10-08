"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function HomePage() {
  // 1️⃣ 创建一个 ref 用来监听滚动位置
  const ref = useRef(null);

  // 2️⃣ 当元素进入视口（viewport）时返回 true
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // 3️⃣ 仅当滚动进入视口后才触发动态导入（懒加载）
  const HeavyChart = isInView
    ? dynamic(() => import("./components/HeavyChart"), {
        ssr: false,
        loading: () => <p>Loading chart...</p>,
      })
    : null;

  return (
    <div className="p-10 space-y-20">
      <h1 className="text-2xl font-bold mb-4">
        Scroll down to lazy load component 👇
      </h1>

      {/* 模拟占位，让用户先滚动一段距离 */}
      <div className="h-[120vh] flex items-center justify-center bg-gray-100">
        <p className="text-lg text-gray-500">
          Keep scrolling... The chart will load when visible 👀
        </p>
      </div>

      {/* 当滚动到这里时才加载 HeavyChart */}
      <div
        ref={ref}
        className="h-[400px] flex items-center justify-center bg-white border rounded-lg shadow-inner"
      >
        {HeavyChart ? <HeavyChart /> : <p>Waiting to enter view…</p>}
      </div>

      {/* 后面再加点内容防止一滚就到底 */}
      <div className="h-[100vh]" />
    </div>
  );
}
