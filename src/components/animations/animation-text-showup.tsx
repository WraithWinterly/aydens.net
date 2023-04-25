import { ReactNode } from "react";
import { motion } from "framer-motion";
import NoSSR from "react-no-ssr";

export default function AnimationTextShowUp({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <NoSSR>
      <motion.div
        initial={{
          opacity: 0.5,
          scale: 0.8,
          y: "100px",
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
          y: "0px",
        }}
        transition={{
          duration: 0.4,
        }}>
        <div className="h-full w-full">{children}</div>
      </motion.div>
    </NoSSR>
  );
}
