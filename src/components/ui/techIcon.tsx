import Image, { StaticImageData } from "next/image";

import godotPng from "@assets/tech-icons/godot.png";
import javascriptPng from "@assets/tech-icons/javascript.png";
import bootstrapPng from "@assets/tech-icons/bootstrap.png";
import csharpPng from "@assets/tech-icons/csharp.png";
import graphqlPng from "@assets/tech-icons/graphql.png";
import nextjsPng from "@assets/tech-icons/nextjs.png";
import prismaPng from "@assets/tech-icons/prisma.png";
import reactPng from "@assets/tech-icons/react.png";
import tailwindPng from "@assets/tech-icons/tailwind.png";
import trpcPng from "@assets/tech-icons/trpc.png";
import unityPng from "@assets/tech-icons/unity.png";
import solidityPng from "@assets/tech-icons/solidity.png";
import unreal from "@assets/tech-icons/unreal.png";
import aseprite from "@assets/tech-icons/aseprite.png";

export interface TechIconInterface {
  name: string;
  icon: StaticImageData;
}

export const javascriptIcon: TechIconInterface = {
  name: "JavaScript",
  icon: javascriptPng,
};

export const godotIcon: TechIconInterface = {
  name: "Godot",
  icon: godotPng,
};

export const bootstrapIcon: TechIconInterface = {
  name: "Bootstrap",
  icon: bootstrapPng,
};

export const csharpIcon: TechIconInterface = {
  name: "C#",
  icon: csharpPng,
};

export const graphqlIcon: TechIconInterface = {
  name: "GraphQL",
  icon: graphqlPng,
};

export const nextjsIcon: TechIconInterface = {
  name: "Next.js",
  icon: nextjsPng,
};

export const prismaIcon: TechIconInterface = {
  name: "Prisma",
  icon: prismaPng,
};

export const reactIcon: TechIconInterface = {
  name: "React",
  icon: reactPng,
};
export const tailwindIcon: TechIconInterface = {
  name: "Tailwind",
  icon: tailwindPng,
};
export const trpcIcon: TechIconInterface = {
  name: "trpc",
  icon: trpcPng,
};
export const unityIcon: TechIconInterface = {
  name: "Unity",
  icon: unityPng,
};
export const solidityIcon: TechIconInterface = {
  name: "Solidity",
  icon: solidityPng,
};
export const unrealIcon: TechIconInterface = {
  name: "Unreal Engine",
  icon: unreal,
};
export const asepriteIcon: TechIconInterface = {
  name: "Aseprite",
  icon: aseprite,
};

export default function TechIconInterface({
  techIcon,
}: {
  techIcon: TechIconInterface;
}) {
  return (
    <div className="h-16 w-16">
      <Image
        src={techIcon.icon.src}
        alt="tech icon"
        className="h-full w-full object-contain"
      />
    </div>
  );
}
