import { ReactNode } from "react";
import { motion } from "framer-motion";

export default function AnimationBounceHover({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      whileHover={{
        scale: 1.1,
        opacity: 1,
      }}
      transition={{
        type: "spring",
        damping: 6,
        bounce: 0.5,
        duration: 0.1,
      }}>
      {children}
    </motion.div>
  );
}
