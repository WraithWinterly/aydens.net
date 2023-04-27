import { ReactNode, useEffect, useState } from "react";

import ParticlesBG from "../particles-bg";
import { IoIosArrowDown } from "react-icons/io";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import useScrollPosition from "@/hooks/useScrollPosition";

export default function HeroLayout({ children }: { children: ReactNode }) {
  const [fade, setFade] = useState<number>(0);
  const h = useWindowDimensions().height;

  const scrollY = useScrollPosition();

  useEffect(() => {
    if (scrollY > h) {
      setFade(0);
    } else {
      setFade(100 - (window.scrollY / h) * 100);
    }
  }, [scrollY, h]);

  return (
    <>
      <div className="relative mb-12 flex h-[600px] min-h-screen w-full flex-col items-start justify-center px-1 md:mb-0 md:px-4">
        {children}
        <div
          className={`absolute -bottom-10 left-1/2 flex -translate-x-1/2 transform flex-col items-center gap-2 md:bottom-5`}
          style={{
            opacity: `${fade - 10}%`,
          }}>
          <span>There&apos;s more to see</span>
          <IoIosArrowDown className="inline-block animate-bounce" />
        </div>
      </div>

      {/* Absolute positioning fixes scroll bug */}
      <div className="absolute">{scrollY < h + 400 && <ParticlesBG />}</div>
    </>
  );
}
