import { useEffect, useId, useState } from "react";
import { SiGithub, SiSteam } from "react-icons/si";
import Head from "next/head";
import { motion } from "framer-motion";
import ProjectCard, { Project } from "@/components/ui/projectCard";
import PageSection from "@/components/layout/page-section";
import ContactSection from "@/components/contact";

import everplast from "@assets/images/everplast.png";
import wraithfps from "@assets/images/wraithfps.png";
import calculator from "@assets/images/calculator.png";
import tasksultra from "@assets/images/tasksultra.png";
import blockhit from "@assets/images/blockhit.png";
import pigeon from "@assets/images/pigeon.jpeg";

import mothorax from "@assets/images/mothora.png";
import AnimationTextShowUp from "@/components/animations/animation-text-showup";
import AnimationBounceHover from "@/components/animations/animation-bounce-hover";
import AnimationTextColor from "@/components/animations/animation-text-color";
import AnimationFadeIn from "@/components/animations/animation-fadein";

export const TopThreeProjects: Project[] = [
  {
    title: "Openseal",
    type: "Web3 • Frontend",
    description: "A fully on chain NFT marketplace with complete transparency.",
    image: undefined,
    liveLink: "",
    techIcons: ["Solidity", "Next", "Tailwind"],
  },
  {
    title: "Mothora",
    type: "Web3 • Frontend • Backend",
    description:
      "Frontend for a web3 sci-fi shooter. On chain storage contracts integrated with Unreal Engine.",
    image: mothorax,
    liveLink: "",
    techIcons: [
      "Solidity",
      "Next",
      "Tailwind",
      "Prisma",
      "GraphQL",
      "UnrealEngine",
    ],
  },
  {
    title: "Pigeon Courier",
    type: "Web3 • Frontend • Backend",
    description:
      "The world's first decentralized courier powered by blockchain and smart contracts.",
    image: pigeon,
    liveLink: "https://store.steampowered.com/app/1571000/Everplast/",
    techIcons: ["Solidity", "Next", "Tailwind", "Prisma"],
  },
];

const AllProjects: Project[] = [
  ...TopThreeProjects,
  {
    title: "Everplast",
    type: "Game • Steam",
    description:
      "Solo developed indie game based on Ruth, a platforming experience with game progression and a polished UI.",
    image: everplast,
    liveLink: "https://store.steampowered.com/app/1571000/Everplast/",
    techIcons: ["Godot"],
  },
  {
    title: "Block Hit",
    type: "Game",
    description: "",
    image: blockhit,
    coverTop: true,
    liveLink: "",
    techIcons: ["Godot", "C#", "Aseprite"],
  },
  {
    title: "Pro Barber Shop",
    type: "Frontend",
    description: "",
    image: undefined,
    liveLink: "",
    techIcons: ["Next", "Tailwind"],
  },
  {
    title: "WraithFPS",
    type: "Game",
    description: "",
    image: wraithfps,
    liveLink: "",
    techIcons: ["Unity", "C#"],
  },
  {
    title: "Calculator",
    type: "Frontend",
    description: "",
    image: calculator,
    coverTop: true,
    liveLink: "",
    techIcons: ["Javascript", "Tailwind"],
  },
  {
    title: "TasksUltra",
    type: "Frontend",
    description: "",
    image: tasksultra,
    coverTop: true,
    liveLink: "",
    techIcons: ["Javascript"],
  },
];

export default function Projects() {
  const id = useId();
  return (
    <>
      <Head>
        <title>Games - Ayden&#39;s Site</title>
        <meta
          name="description"
          content="View games such as Everplast, Blockhit and WraithFPS."
        />
      </Head>
      <PageSection color="blue">
        <AnimationTextColor from="#ffff" to="#a855f7">
          <AnimationFadeIn>
            <h1 className="pt-24 text-center">All Projects</h1>
          </AnimationFadeIn>
        </AnimationTextColor>
        <AnimationTextShowUp>
          <div className="mx-auto grid w-full grid-cols-1 gap-8 py-8 pb-32 md:grid-cols-2 lg:grid-cols-3">
            {AllProjects.map((p, i) => (
              <ProjectCard project={p} key={`${id}-${i}`} />
            ))}
          </div>
        </AnimationTextShowUp>
      </PageSection>
      <ContactSection />
    </>
  );
}
