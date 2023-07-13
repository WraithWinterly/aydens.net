import { StaticImageData } from "next/image";

import everplast from "@assets/images/everplast2.jpeg";
import wraithfps from "@assets/images/wraithfps.png";
import calculator from "@assets/images/calculator.png";
import tasksultra from "@assets/images/tasksultra.png";
import blockhit from "@assets/images/blockhit.jpeg";
import pigeon from "@assets/images/pigeon.jpeg";
import mothora from "@assets/images/mothora.jpeg";
import proBarber from "@assets/images/probarber.jpeg";
import portfolio2022 from "@assets/images/2022portfolio.jpeg";
import openseal from "@assets/images/openseal.jpeg";
import church from "@assets/images/church.jpeg";
import {
  TechIconInterface,
  asepriteIcon,
  csharpIcon,
  flutterIcon,
  godotIcon,
  graphqlIcon,
  javascriptIcon,
  nextjsIcon,
  prismaIcon,
  reactIcon,
  reactNativeIcon,
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
  paid: boolean;
  image?: StaticImageData;
  coverTop?: boolean;
  sourceLink?: string;
  customLinks?: { name: string; link: string; type: "github" | "live" }[];
  liveLink?: string;
  techIcons: TechIconInterface[];
}

export const TopThreeProjects: [Project, Project, Project] = [
  {
    title: "Church Chats",
    type: "Frontend",
    description:
      "Winning Submission for the HackGPT 2023 Hackathon. Build for Armando Cervantes, director of churches in Orange County. A new, revolutionizing AI chat bot for churches.",
    descriptionFull: (
      <>
        <p className="text-base">
          My Responsibilities: Frontend Development, UI/UX Design
        </p>
        <br />
        <p className="text-base">
          This application was built for{" "}
          <a href="https://www.linkedin.com/in/armando-cervantes-9b88199/">
            Armando Cervantes
          </a>
          . I built the landing page for this application and helped design it.
          This led to us winning the hackathon.
        </p>
      </>
    ),
    paid: true,
    image: church,
    liveLink: "https://church.aydens.net",
    sourceLink: "https://github.com/WraithWinterly/church-chats",
    techIcons: [nextjsIcon, tailwindIcon],
  },
  {
    title: "Mothora",
    type: "Web3 • Frontend • Backend",
    description:
      "Sci-fi shooter with on-chain storage contracts integrated with Unreal Engine. Frontend for a web3 sci-fi shooter. On chain storage contracts integrated with Unreal Engine.",
    descriptionFull: (
      <>
        <p className="text-base">
          My Responsibilities: Frontend Development, Backend Development, Smart
          Contract Development, UI/UX Design
        </p>
        <br />
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
          The Unreal Engine demo displays NFTs inside the world by calling the
          smart contract. The frontend portion allows you to connect your wallet
          and view or mint your NFTs.
        </p>
      </>
    ),
    paid: true,
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
      "Pigeon DAO is revolutionizing the courier industry. The world's first decentralized courier powered by blockchain and smart contracts, enabling individual drivers and businesses to establish long-term contracts for hauling goods.",
    descriptionFull: (
      <>
        <p className="text-base">
          My Responsibilities: Frontend Development, Backend Development, Smart
          Contract Development
        </p>
        <br />
        <p className="text-base">
          I was the Core Contributor to Pigeon DAO. I built two MVP{"'"}s for
          the decentralized courier in a short amount of time to display the
          potential to investors.
        </p>
        <br />
        <p className="text-base">
          Pigeon was looking to solve global supply chain crises and logistical
          nightmares by simplifying the courier process and enabling couriers to
          drive from short distance to long distances - hauling individual
          packages to commercial and industrial material goods, establishing
          long term contracts between individual drivers and businesses.
        </p>
      </>
    ),
    paid: true,
    image: pigeon,
    liveLink: "https://pigeondao.org",
    techIcons: [solidityIcon, nextjsIcon, prismaIcon, tailwindIcon],
  },
];

export const AllProjects: Project[] = [
  ...TopThreeProjects,
  {
    title: "Twilio Excel Auto Dialer",
    type: "Frontend • Backend",
    description: "A Twilio Excel Auto Dialer",
    descriptionFull: (
      <>
        <p className="text-base">Auto dialer for real estate agents</p>
      </>
    ),
    paid: true,
    techIcons: [nextjsIcon, tailwindIcon],
    image: undefined,
    liveLink: undefined,
    sourceLink: "https://github.com/WraithWinterly/twilio-excel-autodialer",
  },
  {
    title: "Solana Whitelabel Generator",
    type: "Frontend • Android",
    description: "Solana while label generator",
    descriptionFull: (
      <>
        <p className="text-base"></p>
      </>
    ),
    paid: true,
    techIcons: [flutterIcon, nextjsIcon, tailwindIcon],
    image: undefined,
    customLinks: [
      {
        name: "Website",
        link: "https://whitelabel.aydens.net/",
        type: "live",
      },
    ],
  },
  {
    title: "Flutter Phantom Mobile Wallet Connect",
    type: "Frontend • Android",
    description: "Phantom wallet connect with Solana SDK",
    descriptionFull: (
      <>
        <p className="text-base"></p>
      </>
    ),
    paid: true,
    techIcons: [flutterIcon],
    image: undefined,
    liveLink: undefined,
    sourceLink:
      "https://github.com/WraithWinterly/solana_mobile_wallet_connect_flutter",
  },
  {
    title: "React Native Expo Phantom Mobile Wallet Connect",
    type: "Frontend • Android • iOS",
    description: "Phantom wallet connect with Deep links",
    descriptionFull: (
      <>
        <p className="text-base"></p>
      </>
    ),
    paid: true,
    techIcons: [reactNativeIcon],
    image: undefined,
    liveLink: undefined,
    sourceLink:
      "https://github.com/WraithWinterly/phantom-connect-react-native-expo",
  },
  {
    title: "Openseal",
    type: "Web3 • Frontend",
    description:
      "A fully on chain NFT marketplace with complete transparency. Say goodbye to fraud and manipulation and embrace the power of Openseal, the open-source NFT marketplace that puts security and transparency first!",
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
    paid: false,
    image: openseal,
    liveLink: "https://openseal.aydens.net",
    sourceLink: "https://github.com/WraithWinterly/opensea-clone",
    techIcons: [solidityIcon, nextjsIcon, tailwindIcon],
  },
  // Everplast
  {
    title: "Everplast",
    type: "Game • Steam",
    description:
      "Solo developed indie game based on Ruth, a platforming experience with game progression and a polished UI.",
    descriptionFull: (
      <>
        <span>
          Unleash your inner platformer pro with Everplast - the ultimate
          adrenaline-fueled adventure!
        </span>
        <br />
        <span>
          Everplast is a unique platforming experience mixed with player freedom
          to allow you to develop refreshing hand-eye-coordination and
          platforming skills. Choose how you develop your profile be it by
          obtaining many items and sprinting through levels at double the speed
          while spraying down enemies with weapons, or by increasing your stats
          to extremely high levels to be incredibly powerful. Take off with all
          of your decisions - and get used to failure and falling. Take out all
          of your built-up energy to knock out the enemies and levels.
        </span>
      </>
    ),
    paid: false,
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
      "Experience the thrill of Block Hit - a fast paced game of blocks, obstacles, and strategic health management!",
    descriptionFull: (
      <>
        <span>
          This game is made with Godot Engine and C# and is open source. Made in
          a few days.
        </span>
        <br />
        <span>
          Challenge your reflexes by scoring the highest possible while dodging
          objects and strategically managing your health status, play in 3
          levels for the highest score. This game is made with Godot Engine and
          C# and is open source. Made in a few days.
        </span>
      </>
    ),
    paid: false,
    image: blockhit,
    coverTop: false,
    liveLink: "https://wraithwinterly.itch.io/blockhit",
    sourceLink: "https://github.com/WraithWinterly/BlockHit",
    techIcons: [godotIcon, csharpIcon, asepriteIcon],
  },
  // Pro Barber College
  {
    title: "Pro Barber College",
    type: "Frontend",
    description:
      "Make your craft in the world of barbering with Pro Barber College. Creativity, skill, and professionalism come together! Start your barbering career today at this private institution.",
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
          the due time. Working on this professional website for a private
          college was very meaningful to me.
        </span>
      </>
    ),
    paid: true,
    image: proBarber,
    liveLink: "https://www.probarbercollege.com/",
    techIcons: [nextjsIcon, tailwindIcon],
  },
  // Wraith FPS
  {
    title: "WraithFPS",
    type: "Game",
    description:
      "An open-source documented Unity FPS/RTS feature-rich sample. Fully documented.",
    descriptionFull: (
      <>
        <Link
          href="/wraithfps-documentation.pdf"
          target="_blank"
          rel="noreferrer noopener"
          className="btn mx-0">
          View Documentation
        </Link>
        <span>
          The Unity game project has several main top features, featuring an
          accurate triple A recoil style, a expandable weapon system supporting
          two guns and a knife. It also includes an FPS player controller and an
          RTS manager. This game idea was originally inspired by RTS games. I
          wanted to try something different.
        </span>
        <br />
        <span>
          Having a grand strategy aspect would follow like this: <br />{" "}
          Conquering -&gt; Gaining Resources -&gt; Using those resources to
          empower the player.
          <br /> The core gameplay loop is not fully decided, but this can
          reflect well on the RTS aspect of it. Keeping the core gameplay loop
          interesting, maybe even a dramatic story. More Ideas would be having
          multiple playable characters, forming divisions - you can assign a NPC
          you select as a Commander for said division, and that would become a
          playable character. You can use these to lead your other soldiers. The
          player should not be limited to one army, so as not to limit the scope
          of the world. The game could render beautiful graphics as well to keep
          the experience immersive. Looking at games that have over promise, we
          can draw a conclusion that under promising can give a lot of benefits
          as a studio. If we over deliver more people could be likely to share
          the game. Under promising and over delivering could possibly be the
          best mindset to have from a psychological and marketing standpoint. It
          may lead to long term revenue as well.
        </span>
      </>
    ),
    paid: false,
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
    paid: false,
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
    paid: false,
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
    paid: false,
    image: portfolio2022,
    coverTop: true,
    liveLink: "https://wraithwinterly.github.io",
    sourceLink: "https://github.com/WraithWinterly/wraithwinterly.github.io",
    techIcons: [javascriptIcon, reactIcon],
  },
];
