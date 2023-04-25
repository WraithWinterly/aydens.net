import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import Footer from "./footer";
import Header from "./header";
import useScrollPosition from "@/hooks/useScrollPosition";

interface LayoutProps {
  children: ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  const [windowWidth, setWindowWidth] = useState<number>();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
    }
  }, []);

  return (
    <div className="min-w-screen relative flex flex-col items-center">
      <div
        className={`relative flex h-full min-h-screen w-full max-w-[${windowWidth}px] flex-col items-center`}>
        {children}
      </div>
      <Header />
      <Footer />
    </div>
  );
}
