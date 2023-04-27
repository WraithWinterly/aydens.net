import { ReactNode } from "react";
import { motion } from "framer-motion";
export default function AnimationTextColor({
  children,
  from,
  to,
}: {
  children: ReactNode;
  from: string;
  to: string;
}) {
  return (
    <motion.span
      initial={{
        color: from,
      }}
      whileInView={{
        color: to,
      }}
      transition={{
        duration: 0.5,
        delay: 0.2,
      }}>
      {children}
    </motion.span>
  );
}
