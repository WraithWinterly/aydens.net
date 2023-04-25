import { ReactNode } from "react";

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
      className={`h-fit min-h-[calc(100vh+100px)] w-full px-2 md:px-8 ${
        color === "blue" ? "bg-bgBlue" : "bg-bgPurple"
      } flex flex-col ${center ? "justify-center" : ""}`}>
      {children}
    </div>
  );
}
