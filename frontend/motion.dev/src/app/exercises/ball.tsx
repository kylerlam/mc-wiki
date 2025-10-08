"use client";
import { motion } from "framer-motion";

export default function EnterAnimation() {
  const ball = {
    width: 100,
    height: 100,
    borderRadius: "50%",
    backgroundColor: "skyblue",
    margin: "100px auto",
  };
  return (
    <motion.div
      // 元素一开始是透明而且缩小的，动画播放后变成完全可见并恢复原始大小
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        scale: { type: "spring", visualDuration: 0.5, bounce: 0.4 },
      }}
      style={ball}
    />
  );
}
// bounce 弹跳
// visualDuration 可视时间
