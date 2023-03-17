import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import Footer from "./footer";
import Header from "./header";
import SpaceParallax from "./parallax-bg";

interface LayoutProps {
  children: ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  const router = useRouter();
  const [offsetY, setOffsetY] = useState<number>(0);

  const [useEmptyBg, setUseEmptyBg] = useState<boolean>(false);
  const [useSpaceBg, setUseSpaceBg] = useState<boolean>(false);
  const handleScroll = () => setOffsetY(window.scrollY);

  // Scroll tracker
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Background checker
  useEffect(() => {
    if (router.pathname === "/") {
      setUseEmptyBg(true);
      setUseSpaceBg(false);
      return;
    }
    if (router.pathname.includes("/projects")) {
      setUseSpaceBg(true);
      setUseEmptyBg(true);
      return;
    }
    setUseEmptyBg(false);
    setUseSpaceBg(false);
  }, [router.pathname]);

  const [windowWidth, setWindowWidth] = useState<number>();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
    }
  }, []);

  return (
    <div
      className={`min-w-screen relative flex flex-col items-center ${
        useEmptyBg ? "" : "bg-gradient-to-br from-blue-900 to-pink-900"
      }`}>
      {useSpaceBg && <SpaceParallax offsetY={offsetY} />}

      <div
        className={`relative flex h-full min-h-screen w-full max-w-[${windowWidth}px] flex-col items-center`}>
        {children}
      </div>
      <Header />
      <Footer />
    </div>
  );
}
