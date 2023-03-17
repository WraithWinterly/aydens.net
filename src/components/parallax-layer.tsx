import React from "react";
import styles from "./parallax-layer.module.css";
import { motion } from "framer-motion";

interface ParallaxLayerProps {
  bgOnly?: boolean;
  offsetY: number;
  img: any;
  speed: number;
  addOffset?: number;
}

export default function ParallaxLayer({
  offsetY,
  img,
  speed = 1,
  addOffset = 0,
}: ParallaxLayerProps) {
  return (
    <div
      className={styles.parallaxLayer}
      style={{
        backgroundImage: `url(${img})`,
        transform: `translateY(${offsetY * -speed + addOffset}px)`,
      }}
    />
  );
}
