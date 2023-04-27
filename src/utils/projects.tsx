import { StaticImageData } from "next/image";

import everplast from "@assets/images/everplast.png";
import wraithfps from "@assets/images/wraithfps.png";
import calculator from "@assets/images/calculator.png";
import tasksultra from "@assets/images/tasksultra.png";
import blockhit from "@assets/images/blockhit.png";
import pigeon from "@assets/images/pigeon.jpeg";
import mothora from "@assets/images/mothora.png";
import proBarber from "@assets/images/probarber.png";
import portfolio2022 from "@assets/images/2022portfolio.png";

import {
  TechIconInterface,
  asepriteIcon,
  csharpIcon,
  godotIcon,
  graphqlIcon,
  javascriptIcon,
  nextjsIcon,
  prismaIcon,
  reactIcon,
  solidityIcon,
  steamIcon,
  tailwindIcon,
  unityIcon,
  unrealIcon,
} from "@/components/ui/techIcon";
import { ReactNode } from "react";
import Link from "next/link";

export interface Project {
  title: string;
  type: string;
  description: string;
  descriptionFull: ReactNode;
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
    descriptionFull: (
      <>
        <p className="text-base">
          <i>Simply simpler.</i> Completely on chain Opensea clone is more
          secure since and 100% transparent.
        </p>
        <br />
        <p className="text-base">
          There is no possibility of fraudulent activity, manipulation of data
          which is a benefit for buyers and sellers.
        </p>
        <br />
        <p className="text-base">
          There are no restrictions. Any creator can sell whichever NFT without
          any limits, making this a more inclusive platform for collectors.
        </p>
        <br />
        <p className="text-base">
          Because openseal is fully on chain, the infrastructure costs to manage
          the platform are extremely low.
        </p>
        <br />
        <p className="text-base">
          Overall, openseal is a more secure, transparent and cost-effective
          option for NFT sellers. It is fully open source and 100% transparent.
        </p>
      </>
    ),
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
    descriptionFull: (
      <>
        <p className="text-base">
          This project composes mainly of two parts. The <i>Frontend Website</i>{" "}
          and the <i>NFT Storage Contracts</i>.
        </p>
        <br />
        <p className="text-base">
          The website was made as the landing page for the game.
        </p>
        <br />
        <p className="text-base">
          The Unreal Engine demo achieves displaying all the NFTs inside the
          world. This is done by calling the smart contract, downloading the
          texture and creating a material with the downloaded texture and
          applying it. The frontend portion allows you to connect your wallet
          and view or mint your NFTs. It uses web3storage to manage the images
          on IPFS, which are handled completely by their cid.
        </p>
        <br />
        <p className="text-base">
          For the NFT Storage System in Unreal Engine, the first steps involved
          were to set up the smart contracts. I used Foundry for the solidity
          development environment, I set up the ERC721 standard, included the
          ERC721Enumerable and ERC721URIStorage extensions as well and complied
          with them. After, I was able to include the CID with the NFT once you
          mint. After building foundry tests and passing them, I uploaded them
          to the Arbitrum Goerli testnet and I made a frontend application to
          communicate with it. From there, I minted the NFTs. In Unreal Engine,
          I installed Hyperplay and the web3.unreal plugin and connected my
          wallet to be able to communicate with the network. The Unreal Engine
          demo achieves displaying all the NFTs inside the world. This is done
          by calling the smart contract, downloading the texture and creating a
          material with the downloaded texture and applying it. The frontend
          portion allows you to connect your wallet and view or mint your NFTs.
          It uses web3storage to manage the images on IPFS, which are handled
          completely by their cid.
        </p>
        <br />
        <p className="text-base">
          The experience building on IPFS and web3.storage was very seamless.
          Using Foundry for solidity development was tough at first and very
          hard to set up but in the end it was very quick and reliable. Building
          with Unreal Engine was very tough and challenging. Most foundry
          challenges that I approached were solved by reading their handbook and
          documentation. However in Unreal Engine, using hyperplay and
          web3.unreal, there was not a lot of documentation and almost no online
          resources to help. Trial and error was the main way of addressing
          those problems, which was difficult and time-consuming.
        </p>
      </>
    ),
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
    descriptionFull: (
      <>
        <span>
          I am the Core Contributor to Pigeon DAO. I am responsible for the
          Frontend, Backend and Solidity contracts. I built two MVP{"'"}s for
          the decentralized courier in a short amount of time to display the
          potential to investors.
        </span>
        <br />
        <span>
          Pigeon is looking to solve global supply chain crises and logistical
          nightmares by simplifying the courier process and enabling couriers to
          drive from short distance to long distances - hauling individual
          packages to commercial and industrial material goods, establishing
          long term contracts between individual drivers and businesses. Pigeon
          fully strives to intrigue and motivate our drivers to eventually lead
          off into their future knowing they have the proper experience and
          guidance for individualism and self success much further than any
          business could incorporate. Pigeon is going to dedicate a part of the
          application towards teaching our drivers how to deduct taxes properly,
          how to measure and calculate their earnings without excess spending on
          fuel.
        </span>
      </>
    ),
    image: pigeon,
    liveLink: "https://pigeondao.org",
    techIcons: [solidityIcon, nextjsIcon, prismaIcon, tailwindIcon],
  },
];

export const AllProjects: Project[] = [
  ...TopThreeProjects,
  // Everplast
  {
    title: "Everplast",
    type: "Game • Steam",
    description:
      "Solo developed indie game based on Ruth, a platforming experience with game progression and a polished UI.",
    descriptionFull: "",
    image: everplast,
    liveLink: "https://store.steampowered.com/app/1571000/Everplast/",
    sourceLink: "https://github.com/WraithWinterly/Everplast",
    techIcons: [steamIcon, godotIcon, asepriteIcon],
  },
  // Block Hit
  {
    title: "Block Hit",
    type: "Game",
    description:
      "Hit the blocks to get points, but be careful, the obstacles are coming.",
    descriptionFull:
      "This game is made with Godot Engine and C# and is open source. Made in a few days.",
    image: blockhit,
    coverTop: false,
    liveLink: "https://wraithwinterly.itch.io/blockhit",
    sourceLink: "https://github.com/WraithWinterly/BlockHit",
    techIcons: [godotIcon, csharpIcon, asepriteIcon],
  },
  // Pro Barber Shop
  {
    title: "Pro Barber Shop",
    type: "Frontend",
    description:
      "Start your barbering career today at this private institution.",
    descriptionFull: (
      <>
        <span>
          Pro Barber College is a private institution and approved to operate by
          the Bureau for Private Postsecondary Education and the Board of
          Barbering and Cosmetology.
        </span>
        <br />
        <span>
          I finished this project within a few days. I was given the design by
          another senior developer and completed it in several days, much before
          the due time. Working on this professional website for a college was
          very meaningful to me.
        </span>
      </>
    ),
    image: proBarber,
    liveLink: "https://next-probarbercollege.vercel.app",
    techIcons: [nextjsIcon, tailwindIcon],
  },
  // Wraith FPS
  {
    title: "WraithFPS",
    type: "Game",
    description: "An open-source documented Unity FPS/RTS feature-rich sample.",
    descriptionFull: (
      <>
        <Link
          href="/wraithfps-documentation.pdf"
          target="_blank"
          rel="noreferrer noopener"
          className="btn">
          View Documentation
        </Link>
      </>
    ),
    image: wraithfps,
    liveLink: "https://www.youtube.com/watch?v=fMNmn9NV5DE",
    sourceLink: "https://github.com/WraithWinterly/Unity-FPS-RTS-System",
    techIcons: [unityIcon, csharpIcon],
  },
  // Calculator
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
  // TasksUltra
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
  {
    title: "2022 Portfolio",
    type: "Frontend",
    description:
      "My 2022 Portfolio website. It was my second web development project.",
    descriptionFull: "",
    image: portfolio2022,
    coverTop: true,
    liveLink: "https://wraithwinterly.github.io",
    sourceLink: "https://github.com/WraithWinterly/wraithwinterly.github.io",
    techIcons: [javascriptIcon, reactIcon],
  },
];
