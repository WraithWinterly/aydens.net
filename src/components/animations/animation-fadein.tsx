import { ReactNode } from "react";
import { motion } from "framer-motion";

export default function AnimationFadeIn({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{
        y: "20px",
        opacity: 0,
      }}
      whileInView={{
        y: "0px",
        opacity: 1,
      }}
      transition={{
        damping: 9,
        duration: 0.5,
      }}>
      {children}
    </motion.div>
  );
}
