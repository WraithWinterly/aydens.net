import { useState, useEffect } from "react";

export default function useWindowDimensions() {
  function getWindowDimensions() {
    return {
      width: (typeof window !== "undefined" && window.innerWidth) || 0,
      height: (typeof window !== "undefined" && window.innerHeight) || 0,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
