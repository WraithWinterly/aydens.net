import { ReactNode } from "react";
import space1 from "@assets/space1.jpg";
import space2 from "@assets/space2.jpg";
import ellipseBlue from "@assets/ellipse-blue.png";
import ellipsePurple from "@assets/ellipse-purple.png";
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
      className={`relative h-fit min-h-[calc(100vh+100px)] w-full bg-cover bg-repeat-y`}
      style={{
        backgroundImage: `url(${color === "blue" ? space2.src : space1.src})`,
      }}>
      <div
        className={`absolute ${
          color === "blue" ? "right-0 bottom-0" : "left-0 bottom-0"
        }`}>
        <Image
          src={color === "blue" ? ellipseBlue.src : ellipsePurple.src}
          alt="ellipse"
          width={800}
          height={800}
        />
      </div>
      <div
        className={`min-h-[calc(100vh+100px)] w-full ${
          color === "blue" ? "bg-bgBlue/[87%]" : "bg-bgPurple/80"
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
