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

  const [useAltBg, setUseAltBg] = useState<boolean>(false);

  const handleScroll = () => setOffsetY(window.scrollY);

  // Scroll tracker
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Background checker
  useEffect(() => {
    if (router.pathname === "/games") {
      setUseAltBg(true);
    } else {
      setUseAltBg(false);
    }
  }, [router.pathname]);

  const [windowWidth, setWindowWidth] = useState<number>();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
    }
  }, []);

  return (
    <div
      className={`relative flex flex-col items-center ${
        useAltBg ? "bg-black" : "bg-gradient-to-br from-blue-900 to-pink-900"
      }`}>
      {useAltBg && <SpaceParallax offsetY={offsetY} />}

      <Header />
      <div
        className={`relative flex h-full min-h-screen w-full max-w-[${windowWidth}px] flex-col items-center px-4 pb-12`}>
        {children}
      </div>
      <Footer />
    </div>
  );
}
