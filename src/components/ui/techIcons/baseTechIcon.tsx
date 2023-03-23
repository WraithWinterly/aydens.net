import { motion } from "framer-motion";
import { useState } from "react";
export default function BaseTechIcon({
  text,
  image,
}: {
  text: string;
  image: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{
        scale: 0.9,
      }}
      whileInView={{
        scale: 1,
      }}
      whileHover={{
        scale: 1.1,
      }}
      transition={{
        type: "spring",
        damping: 8,
      }}>
      <div
        className="relative w-fit"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        <img src={image} className="h-16 w-16" />
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: isHovered ? 1 : 0,
          }}>
          <h4 className="absolute w-fit">{text}</h4>
        </motion.div>
      </div>
    </motion.div>
  );
}
