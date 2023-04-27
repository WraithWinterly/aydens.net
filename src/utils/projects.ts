import { StaticImageData } from "next/image";

import everplast from "@assets/images/everplast.png";
import wraithfps from "@assets/images/wraithfps.png";
import calculator from "@assets/images/calculator.png";
import tasksultra from "@assets/images/tasksultra.png";
import blockhit from "@assets/images/blockhit.png";
import pigeon from "@assets/images/pigeon.jpeg";
import mothora from "@assets/images/mothora.png";

import {
  TechIconInterface,
  asepriteIcon,
  csharpIcon,
  godotIcon,
  graphqlIcon,
  javascriptIcon,
  nextjsIcon,
  prismaIcon,
  solidityIcon,
  tailwindIcon,
  unityIcon,
  unrealIcon,
} from "@/components/ui/techIcon";

export interface Project {
  title: string;
  type: string;
  description: string;
  descriptionFull: string;
  image?: StaticImageData;
  coverTop?: boolean;
  sourceLink?: string;
  customLinks?: { name: string; link: string; type: "github" | "live" }[];
  liveLink?: string;
  techIcons: TechIconInterface[];
}

export const TopThreeProjects: Project[] = [
  {
    title: "Openseal",
    type: "Web3 • Frontend",
    description: "A fully on chain NFT marketplace with complete transparency.",
    descriptionFull: "",
    image: undefined,
    liveLink: "",
    sourceLink: "https://github.com/WraithWinterly/opensea-clone",
    techIcons: [solidityIcon, nextjsIcon, tailwindIcon],
  },
  {
    title: "Mothora",
    type: "Web3 • Frontend • Backend",
    description:
      "Frontend for a web3 sci-fi shooter. On chain storage contracts integrated with Unreal Engine.",
    descriptionFull:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima enim nostrum corporis quasi, iusto atque sed id nesciunt accusamus magnam ut at aliquam facere dolorum incidunt. Fuga velit commodi odio vel laboriosam aut assumenda aspernatur quis sit ipsam! Harum, vel?",
    image: mothora,
    customLinks: [
      {
        name: "Website",
        link: "https://mothora.xyz",
        type: "live",
      },
      {
        name: "NFT Storage Showcase",
        link: "https://www.youtube.com/watch?v=_2QPFJM7WhQ",
        type: "live",
      },
      {
        name: "Website Source",
        link: "https://github.com/Mothora/mothora-landing",
        type: "github",
      },
      {
        name: "NFT Storage Frontend",
        link: "https://github.com/Mothora/nft-showcase-frontend",
        type: "github",
      },
      {
        name: "NFT Storage Contracts",
        link: "https://github.com/Mothora/nft-storage-contracts",
        type: "github",
      },
      {
        name: "NFT Unreal Engine",
        link: "https://github.com/Mothora/unreal-nft-showcase",
        type: "github",
      },
    ],
    techIcons: [
      solidityIcon,
      nextjsIcon,
      tailwindIcon,
      prismaIcon,
      graphqlIcon,
      unrealIcon,
    ],
  },
  {
    title: "Pigeon Courier",
    type: "Web3 • Frontend • Backend",
    description:
      "The world's first decentralized courier powered by blockchain and smart contracts.",
    descriptionFull: "",
    image: pigeon,
    liveLink: "https://pigeondao.org",
    techIcons: [solidityIcon, nextjsIcon, tailwindIcon, prismaIcon],
  },
];

export const AllProjects: Project[] = [
  ...TopThreeProjects,
  {
    title: "Everplast",
    type: "Game • Steam",
    description:
      "Solo developed indie game based on Ruth, a platforming experience with game progression and a polished UI.",
    descriptionFull: "",
    image: everplast,
    liveLink: "https://store.steampowered.com/app/1571000/Everplast/",
    sourceLink: "https://github.com/WraithWinterly/Everplast",
    techIcons: [godotIcon, asepriteIcon],
  },
  {
    title: "Block Hit",
    type: "Game",
    description:
      "Hit the blocks to get points, but be careful, the obstacles are coming.",
    descriptionFull: "",
    image: blockhit,
    coverTop: true,
    liveLink: "https://wraithwinterly.itch.io/blockhit",
    sourceLink: "https://github.com/WraithWinterly/BlockHit",
    techIcons: [godotIcon, csharpIcon, asepriteIcon],
  },
  {
    title: "Pro Barber Shop",
    type: "Frontend",
    description: "Start your barbering career today.",
    descriptionFull:
      "Pro Barber College is a private institution and approved to operate by the Bureau for Private Postsecondary Education and the Board of Barbering and Cosmetology.",
    image: undefined,
    liveLink: "https://next-probarbercollege.vercel.app",
    techIcons: [nextjsIcon, tailwindIcon],
  },
  {
    title: "WraithFPS",
    type: "Game",
    description: "An open-source documented Unity FPS/RTS feature-rich sample.",
    descriptionFull: "",
    image: wraithfps,
    liveLink: "https://www.youtube.com/watch?v=fMNmn9NV5DE",
    sourceLink: "https://github.com/WraithWinterly/Unity-FPS-RTS-System",
    techIcons: [unityIcon, csharpIcon],
  },
  {
    title: "Calculator",
    type: "Frontend",
    description:
      "Supporting advanced and simple arithmetic operations, this calculator is a must-have for every student.",
    descriptionFull: "",
    image: calculator,
    coverTop: true,
    liveLink: "https://wraithwinterly.github.io/calculator/",
    sourceLink: "https://github.com/WraithWinterly/calculator",
    techIcons: [javascriptIcon, tailwindIcon],
  },
  {
    title: "TasksUltra",
    type: "Frontend",
    description:
      "The ultimate task management app, plan your day with this app and never miss a deadline.",
    descriptionFull: "",
    image: tasksultra,
    coverTop: true,
    liveLink: "https://tasksultra.netlify.app/",
    sourceLink: "https://github.com/WraithWinterly/TasksUltra",
    techIcons: [javascriptIcon],
  },
];
