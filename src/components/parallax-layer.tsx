import React from "react";

import styles from "./parallax-layer.module.css";

interface ParallaxLayerProps {
  bgOnly?: boolean;
  offsetY: number;
  img: any;
  speed: number;
  addOffset?: number;
}

export default function ParallaxLayer({
  bgOnly,
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
