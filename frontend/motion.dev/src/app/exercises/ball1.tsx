"use client";
import { motion } from "framer-motion";

export default function EnterAnimation() {
  // 定义动画状态
  const variants = {
    hidden: { opacity: 0, scale: 0, y: 100 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };

  return (
    <div className="h-[250vh] p-12 bg-gray-50">
      <h2 className="text-center text-xl font-semibold">Scroll down 👇</h2>

      {/* 第一段空白区 */}
      <div className="h-[100vh] flex items-center justify-center bg-gray-100">
        <p className="text-gray-500 text-lg">上面的内容区...</p>
      </div>

      {/* 🎯 目标区域：当滚动到这里时黄色球出现 */}
      <div className="h-[50vh] flex items-center justify-center bg-gray-200">
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.6 }}
          className="w-20 h-20 rounded-full bg-yellow-400"
        />
      </div>

      {/* 下面还有内容 */}
      <div className="h-[100vh] flex items-center justify-center bg-gray-300">
        <p className="text-gray-600 text-lg">继续往下滚动...</p>
      </div>
    </div>
  );
}
