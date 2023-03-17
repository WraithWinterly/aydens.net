import useOnScreen from "@/hooks/useOnScreen";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function HighlightingText({
  text,
  twClass,
}: {
  text: string;
  twClass?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(ref, -100);

  return (
    <motion.span
      initial={{
        scale: 1,
        color: "#ffffff",
      }}
      whileHover={{
        scale: 1.02,

        color: "#6366f1",
      }}
      transition={{
        power: 9.5,
        bounce: 4.5,
        duration: 0.2,
      }}>
      <span className={twClass || ""}>
        <span
          ref={ref}
          className={`text-highlight ${onScreen && "text-highlight-active"}`}>
          {text}
        </span>{" "}
      </span>
    </motion.span>
  );
}
