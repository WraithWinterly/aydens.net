import { ReactNode } from "react";
import space1 from "@assets/space1.jpg";
import space2 from "@assets/space2.jpg";
import ellipseBlue from "@assets/ellipse-blue.png";
import ellipseBlue2 from "@assets/ellipse-blue2.png";

import ellipsePurple from "@assets/ellipse-purple.png";
import ellipsePurple2 from "@assets/ellipse-purple2.png";

import Image from "next/image";

export default function PageSection({
  children,
  center,
  color,
}: {
  children: ReactNode;
  center?: boolean;
  color: "blue" | "purple";
}) {
  return (
    <div
      className={`relative h-fit min-h-[calc(100vh+100px)] w-full overflow-hidden bg-cover bg-repeat-y`}>
      {/* <div
        className={`pointer-events-none absolute select-none ${
          color === "blue" ? "right-0 bottom-0" : "left-0 bottom-0"
        }`}>
        <Image
          src={color === "blue" ? ellipseBlue.src : ellipsePurple.src}
          alt="ellipse"
          width={800}
          height={800}
        />
      </div> */}
      {/* <div
        className={`pointer-events-none absolute select-none ${
          color === "blue" ? "-top-80 -left-20" : "right-0 bottom-0"
        }`}>
        <Image
          src={color === "blue" ? ellipseBlue2.src : ellipsePurple2.src}
          alt="ellipse"
          width={800}
          height={800}
        />
      </div> */}
      <div
        className={`min-h-[calc(100vh+100px)] w-full ${
          color === "blue" ? "bg-white" : "bg-white"
        } `}>
        <div
          className={`flex min-h-[calc(100vh+100px)] flex-col py-16 px-6 md:px-8 ${
            center ? "justify-center" : ""
          }`}>
          {children}
        </div>
      </div>
    </div>
  );
}
