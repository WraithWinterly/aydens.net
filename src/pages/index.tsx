import Head from "next/head";

import HeroLayout from "@/components/layout/hero-layout";
import ContactSection from "@/components/contact";
import HighlightingText from "@/components/ui/highlightingText";

import PageSection from "@/components/layout/page-section";
import AnimationHeroTwist from "@/components/animations/animation-hero-twist";
import AnimationTextColor from "@/components/animations/animation-text-color";
import AnimationBounceHover from "@/components/animations/animation-bounce-hover";
import AnimationTextShowUp from "@/components/animations/animation-text-showup";
import AnimationFadeIn from "@/components/animations/animation-fadein";
import ProjectCard from "@/components/ui/projectCard";
import Link from "next/link";
import { useId } from "react";
import { motion } from "framer-motion";
import { TopThreeProjects } from "@/utils/projectsList";
import { AboutSection } from "./about";

import react from "@assets/tech-icons/react.png";
import nextjs from "@assets/tech-icons/nextjs.png";
import flutter from "@assets/tech-icons/flutter.png";
import solana from "@assets/tech-icons/solana.png";
import solidity from "@assets/tech-icons/solidity.png";
import tailwind from "@assets/tech-icons/tailwind.png";
import prisma from "@assets/tech-icons/prisma.png";
import tRPC from "@assets/tech-icons/trpc.png";
import typescript from "@assets/tech-icons/typescript.png";
import godot from "@assets/tech-icons/godot.png";
import unity from "@assets/tech-icons/unity.png";
import csharp from "@assets/tech-icons/csharp.png";
import unreal from "@assets/tech-icons/unreal.png";

import Image, { StaticImageData } from "next/image";

import { IoFileTrayFullOutline } from "react-icons/io5";
import { HiOutlineDocumentText } from "react-icons/hi";
import { AiOutlineAppstore, AiOutlineProject } from "react-icons/ai";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ayden&apos;s Site</title>
        <meta
          name="description"
          content="I am specialized in web development and web3 technologies. I released Everplast on Steam and participated in projects like Pigeon DAO, Mothora, and more. ©Ayden Springer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroSection />
      <TechnologiesSection />
      <QuotesSection />
      <PortfolioShowcase />
      <SecondaryTextSection />
      <AboutSection color="purple" />
      <ContactSection color="blue" />
    </>
  );
}

function HeroSection() {
  return (
    <>
      <HeroLayout>
        <div className="w-full flex-col pt-8">
          <div className="flex w-fit flex-col flex-wrap px-8 text-left fade-in duration-700 md:leading-relaxed md:animate-in md:slide-in-from-top-10">
            <AnimationHeroTwist>
              <p className="pl-1 text-2xl text-gray-400">I am Ayden,</p>
              <h1 className="w-full py-2 text-5xl md:max-w-2xl md:py-4 md:text-7xl lg:max-w-4xl">
                Need a{" "}
                <AnimationTextColor from="#ffffff" to="#6366f1">
                  <span>developer</span>
                </AnimationTextColor>
                <span> who does it </span>
                <AnimationTextColor from="#ffffff" to="#56E2D6">
                  <span>right?</span>
                </AnimationTextColor>
              </h1>

              <p className="pl-1 text-3xl text-gray-400 animate-in fade-in duration-1000">
                I get it done. That is what others say. <i>"Incredible."</i>
              </p>
              <div className="flex w-fit gap-8">
                <AnimationBounceHover>
                  <Link
                    href="/resume.pdf"
                    className="text-white"
                    target="_blank"
                    rel="noreferrer">
                    <button className="mt-8 flex items-center gap-1 rounded-full bg-gradient-to-br from-purple-400 to-purple-900 px-10 py-4 text-xl hover:from-purple-500 hover:to-purple-900">
                      <HiOutlineDocumentText className="" size={30} />
                      View Resume
                    </button>
                  </Link>
                </AnimationBounceHover>
                <AnimationBounceHover>
                  <Link href="#projects" className=" text-white">
                    <button className="mt-8 flex items-center gap-1 rounded-full bg-gradient-to-br from-blue-400 to-blue-900 px-10 py-4 text-xl hover:from-blue-500 hover:to-blue-900">
                      <AiOutlineAppstore className="" size={30} />
                      View Projects
                    </button>
                  </Link>
                </AnimationBounceHover>
              </div>
            </AnimationHeroTwist>
          </div>
        </div>
      </HeroLayout>
    </>
  );
}

const TechIcons: Array<{
  name: string;
  icon: StaticImageData;
}> = [
  {
    name: "React",
    icon: react,
  },
  {
    name: "React Native",
    icon: react,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "Next.js",
    icon: nextjs,
  },
  {
    name: "Prisma",
    icon: prisma,
  },
  {
    name: "tRPC",
    icon: tRPC,
  },
  {
    name: "Typescript",
    icon: typescript,
  },
  {
    name: "Tailwind",
    icon: tailwind,
  },
  {
    name: "Solana",
    icon: solana,
  },
  {
    name: "Solidity",
    icon: solidity,
  },
  {
    name: "Godot",
    icon: godot,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "Unity",
    icon: unity,
  },
  {
    name: "Unreal",
    icon: unreal,
  },
];

function TechnologiesSection() {
  const id = useId();

  return (
    <PageSection color="purple" center={true}>
      <AnimationFadeIn>
        <div className="flex flex-col items-center">
          <h2 className="mb-16 bg-gradient-to-r from-violet-900 via-violet-500 to-violet-200 bg-clip-text pb-3 text-center text-5xl text-transparent">
            Let's get right to it.
          </h2>

          <div className="mx-auto flex w-full max-w-xl flex-wrap justify-center gap-8">
            {TechIcons.map((tech, i) => (
              <motion.div
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                transition={{
                  delay: i * 0.1 + 0.05,
                }}
                key={`${id}-${i}`}>
                <div className="flex flex-col gap-1">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={88}
                    height={88}
                    className="rounded-md"
                  />
                  <p className="text-center text-sm text-gray-300">
                    {tech.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <Link href="/projects" className="mt-12">
            <motion.div
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              transition={{
                once: true,
                delay: TechIcons.length * 0.09,
              }}>
              <span className="btn flex justify-center gap-2 py-2">
                <AiOutlineProject size={28} />
                <span className="text-xl">The Proof Is In The Projects</span>
              </span>
            </motion.div>
          </Link>
        </div>
      </AnimationFadeIn>
    </PageSection>
  );
}

function QuotesSection() {
  return (
    <PageSection color="blue" center={true}>
      <AnimationFadeIn>
        <div className="w-full break-after-all text-4xl leading-relaxed ">
          {/* <p>Before you here what I see, here is what others say.</p> */}
          <div className="my-4 flex w-full flex-col gap-12">
            <div>
              <h2 className="bg-gradient-to-r from-violet-900 via-violet-500 to-violet-200 bg-clip-text text-center text-transparent">
                What Do Others Say About Me?
              </h2>
              <p className="pb-4 text-center text-base text-gray-400 ">
                Don't just believe my own words. What others say is more
                important.
              </p>
            </div>

            <i className="flex flex-col text-3xl">
              “That's what puts you in the top 10 percent. No one else I hired
              could do it." <br />
              <span className="text-2xl font-normal text-gray-200">
                - Dr. Robert Whetsel{" "}
              </span>
              <span className="text-sm text-gray-400">
                (FDA Associate Director for Data Architecture, Former Chief NSA Data
                Engineer, CEO of CryptoVersus)
              </span>
            </i>
            <i className="flex flex-col text-3xl">
              “If you need a Dev who talks with their keyboard instead of
              prolonging the Zoom call, Ayden will kick out your project faster
              than 90% of the over-confident "code crafters" out there. Ayden
              gets it DONE." <br />
              <span className="text-2xl font-normal text-gray-200">
                {" "}
                - Michael Jagdeo
              </span>
              <span className="text-sm text-gray-400">
                (Headhunter Launching Startups - Unicorn Launching - The
                Syndicate, HackGPT)
              </span>
            </i>
            <i className="flex flex-col text-3xl">
              “You are way better than most mid-level developers I know.”
              <span className="text-2xl font-normal text-gray-200">
                - Rocky Nguyen
              </span>
              <span className="text-sm text-gray-400">
                (Lead Developer of Turtle Beach and Roccat, Senior Developer,
                Product Manager)
              </span>
            </i>

            <i className="flex flex-col text-3xl">
              “Ayden is amazingly talented developer. His contribution to the
              project Avalanche from The New Dev Order, was crucial to
              completing the most difficult task that saw the team home. He is
              gonna be the best find for any Hiring Manager." <br />
              <span className="text-2xl font-normal text-gray-200">
                - Manish Andankar
              </span>
              <span className="text-sm text-gray-400">
                (Founder & CEO: Worthum, Bounty Map Designer)
              </span>
            </i>
          </div>
        </div>
      </AnimationFadeIn>
    </PageSection>
  );
}

function PortfolioShowcase() {
  const id = useId();
  return (
    <PageSection color="purple">
      <AnimationTextShowUp>
        <div className="scroll-mt-48 md:py-2" id="projects">
          <h1 className="w-full bg-gradient-to-r from-purple-400 to-pink-800 bg-clip-text text-center text-6xl font-extrabold text-transparent md:text-7xl lg:text-7xl">
            Portfolio Showcase
          </h1>
          <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 py-8 md:grid-cols-2 lg:grid-cols-3">
            {TopThreeProjects.map((p, i) => (
              <motion.div
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                transition={{
                  delay: i * 0.15 + 0.1,
                }}
                key={`${id}-${i}`}>
                <ProjectCard project={p} purple />
              </motion.div>
            ))}
            <div className="m-auto md:inline-block lg:hidden">
              <Link href="/projects">
                <div className="btn flex justify-center gap-3 rounded-full bg-gradient-to-br from-purple-400 to-purple-900 px-12 py-4 text-xl hover:from-purple-500 hover:to-purple-900">
                  <IoFileTrayFullOutline size={32} />
                  <span className="pt-[1px]">View More</span>
                </div>
              </Link>
            </div>
          </div>
          <div className="mt-6 hidden w-full justify-center lg:flex">
            <Link href="/projects">
              <div className="btn flex justify-center gap-3 rounded-full bg-gradient-to-br from-purple-400 to-purple-900 px-12 py-4 text-xl hover:from-purple-500 hover:to-purple-900">
                <IoFileTrayFullOutline size={32} className="" />
                <span className="pt-[1px]">View More</span>
              </div>
            </Link>
          </div>
        </div>
      </AnimationTextShowUp>
    </PageSection>
  );
}
function SecondaryTextSection() {
  return (
    <PageSection color="blue" center={true}>
      <AnimationFadeIn>
        <div className="text-4xl">
          <span>- I solve confusing problems </span>
          <HighlightingText
            text="daily."
            className="text-4xl leading-relaxed md:leading-relaxed"
          />
          <br />
          <br />
          <span className="">- I adapt to </span>
          <HighlightingText
            text="any"
            className="text-4xl md:leading-relaxed"
          />
          <span> technology for the </span>

          <HighlightingText
            text="correct"
            className="text-4xl md:leading-relaxed"
          />
          <span>solution.</span>

          <br />
          <br />
          <span className="break-after-all">
            - I think in terms of the product and business objectives{" "}
          </span>

          <HighlightingText
            text="first."
            className="text-4xl md:leading-relaxed"
          />
          <br />
          <br />
          <br />
          <AnimationFadeIn>
            <span className="max-w-5xl text-4xl leading-relaxed  md:leading-relaxed">
              <span>Do you need someone who </span>
              <br className="hidden md:block" />
              <HighlightingText
                text="doesn't"
                className="text-4xl md:leading-relaxed"
              />{" "}
              waste your time?
            </span>
            <br />
            <br />
            <span className="break-after-all">
              Frontend web development is my{" "}
            </span>
            <HighlightingText
              text="expertise."
              className="text-4xl md:leading-relaxed"
            />
          </AnimationFadeIn>
        </div>
      </AnimationFadeIn>
    </PageSection>
  );
}
