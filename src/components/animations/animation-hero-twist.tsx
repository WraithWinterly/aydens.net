import { ReactNode } from "react";
import { motion } from "framer-motion";

export default function AnimationHeroTwist({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ rotate: -10, scale: 0 }}
      animate={{ rotate: 0, scale: 1 }}
      // whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 1.05 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 22,
        duration: 2,
      }}>
      {children}
    </motion.div>
  );
}
