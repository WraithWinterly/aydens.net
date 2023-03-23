import w3l9 from "@assets/games/w3l9.png";
import { useEffect, useState } from "react";
import { SiGithub, SiSteam } from "react-icons/si";
import { FaGamepad } from "react-icons/fa";
import Image from "next/image";

import everplastLogo from "@assets/games/everplast-logo.png";
import blockhit from "@assets/games/blockhit.png";
import wraithfps from "@assets/games/wraithfps.png";
import Head from "next/head";

import { useId } from "react";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { IoWarningOutline } from "react-icons/io5";

import lifePlanner from "@assets/proj-icons/life-planner.png";
import unitconverter from "@assets/proj-icons/unit-converter.png";
import calculator from "@assets/proj-icons/calculator.png";
import tasksultra from "@assets/proj-icons/tasksultra.png";
import EverplastCard from "@/components/ui/everplastCard";
import { motion } from "framer-motion";

export default function Projects() {
  const [hoveringImage, setHoveringImage] = useState<boolean>(false);

  return (
    <>
      <Head>
        <title>Games - Ayden&#39;s Site</title>
        <meta
          name="description"
          content="View games such as Everplast, Blockhit and WraithFPS."
        />
      </Head>
      <div className="flex flex-col items-center gap-4 pt-14">
        <h1 className="text-center">All Projects</h1>

        <EverplastCard />
        <ProjectsList useTop2={true} />
        <div className="flex h-full w-full flex-col items-center justify-between gap-4 rounded-xl bg-gray-800/50 py-4 px-4 md:flex-row">
          {/* Blockhit */}
          <div
            className="h-[360px] w-[360px] rounded-lg bg-contain bg-center bg-no-repeat animate-in fade-in duration-500 md:slide-in-from-left lg:h-[450px] lg:w-[450px]"
            style={{
              backgroundImage: `url(${blockhit.src})`,
            }}>
            <div className="flex h-full flex-col items-center justify-between text-center">
              <p className="pt-24">
                Hit the blocks to get points, but be careful, the obstacles are
                coming.
              </p>
              <div className="mx-auto flex w-full flex-col items-center justify-center gap-2 pb-24 lg:flex-row">
                <a
                  href="https://wraithwinterly.itch.io/blockhit"
                  target="_blank"
                  rel="noreferrer">
                  <button className="btn flex w-44 gap-2">
                    <FaGamepad size={24} />
                    <span>View Game</span>
                  </button>
                </a>
                <a
                  href="https://github.com/WraithWinterly/BlockHit"
                  target="_blank"
                  rel="noreferrer">
                  <button className="btn btn-github flex w-44 gap-2">
                    <SiGithub size={24} />
                    <span>View Source</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* WraithFPS */}
          <div
            className="h-[360px] w-[360px] rounded-lg bg-contain bg-center bg-no-repeat animate-in fade-in duration-500 md:slide-in-from-right lg:h-[450px] lg:w-[450px]"
            style={{
              backgroundImage: `url(${wraithfps.src})`,
            }}>
            <div className="flex h-full flex-col items-center justify-between text-center">
              <div className="flex flex-col pt-10">
                <h3>WraithFPS</h3>
                <p className="font-bold">
                  An open-source documented Unity FPS/RTS feature-rich sample.
                </p>
              </div>

              <div className="mx-auto flex w-full flex-col items-center justify-center gap-2 pb-24 lg:flex-row">
                <a
                  href="https://www.youtube.com/watch?v=fMNmn9NV5DE"
                  target="_blank"
                  rel="noreferrer">
                  <button className="btn flex w-44 gap-2">
                    <FaGamepad size={24} />
                    <span>View Game</span>
                  </button>
                </a>

                <a
                  href="https://github.com/WraithWinterly/Unity-FPS-RTS-System"
                  target="_blank"
                  rel="noreferrer">
                  <button className="btn btn-github flex w-44 gap-2">
                    <SiGithub size={24} />
                    <span>View Source</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <ProjectsList useTop2={false} />
      </div>
    </>
  );
}

const projects: Project[] = [
  {
    title: "Life Planner",
    description:
      "Fullstack life planner with authentication that helps you keep track of your life for everyday.",
    image: lifePlanner.src,
    liveLink: "https://life-planner.aydens.net",
    githubLink: "https://github.com/WraithWinterly/next-life-planner",
    preview: true,
  },
  {
    title: "Unit Converter",
    description:
      "Converts units of measurement, such as length, mass, and temperature, and data speed.",
    image: unitconverter.src,
    liveLink: "https://wraithwinterly.github.io/unit-converter/",
    githubLink: "https://github.com/WraithWinterly/unit-converter",
  },
  {
    title: "Calculator",
    description:
      "Supporting advanced and simple arithmetic operations, this calculator is a must-have for every student.",
    image: calculator.src,
    liveLink: "https://wraithwinterly.github.io/calculator/",
    githubLink: "https://github.com/WraithWinterly/calculator",
  },
  {
    title: "Tasks Ultra",
    description:
      "The ultimate task management app, plan your day with this app and never miss a deadline.",
    image: tasksultra.src,
    liveLink: "https://tasksultra.netlify.app/",
    githubLink: "https://github.com/WraithWinterly/TasksUltra",
  },
];

interface Project {
  title: string;
  description: string;
  image?: string;
  liveLink?: string;
  githubLink: string;
  preview?: boolean;
}

export function ProjectsList({ useTop2 }: { useTop2: boolean }) {
  const id = useId();
  const [displayedProjects, setDisplayedProjects] = useState<Project[]>([]);
  useEffect(() => {
    if (useTop2) {
      setDisplayedProjects(projects.slice(0, 2));
    } else {
      setDisplayedProjects(projects.slice(2, projects.length));
    }
  }, []);

  return (
    <>
      <div className="w-full animate-in fade-in duration-500">
        <div className="flex w-full flex-col gap-4 px-1">
          {displayedProjects.map((project, i) => (
            <ProjectCard
              key={`${id}${i}`}
              project={project}
              isEven={i % 2 == 0}
            />
          ))}
        </div>
      </div>
    </>
  );
}

function ProjectCard({
  project,
  isEven,
}: {
  project: Project;
  isEven: boolean;
}) {
  return (
    <motion.div
      initial={{
        x: isEven ? -100 : 100,
      }}
      whileInView={{
        x: 0,
      }}
      transition={{
        type: "spring",
        duration: 0.5,
        damping: 14,
      }}>
      <div
        className={`flex w-full justify-center gap-4 rounded-2xl bg-purple-800/40 px-8 py-8 animate-in fade-in duration-500 ${
          isEven ? "md:slide-in-from-left-20" : "md:slide-in-from-right-20"
        }`}>
        <div className="flex w-fit flex-col gap-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 text-center md:text-start">
              <h2 className="text-start">{project.title}</h2>

              {!!project.preview && (
                <div className="rounded-full border border-gray-700 bg-gray-800 px-3 py-1 text-sm font-bold italic text-gray-400">
                  <div className="flex items-center gap-1">
                    <IoWarningOutline size={16} /> <span>Preview</span>
                  </div>
                </div>
              )}
            </div>
            <div className="block md:hidden">
              <ProjectImage project={project} />
            </div>
            <p className="max-w-[400px] pl-2">{project.description}</p>
          </div>
          <div className="flex flex-col items-center gap-4 md:flex-row">
            {!!project.liveLink && (
              <a href={project.liveLink} target="_blank" rel="noreferrer">
                <button className="btn flex h-14 w-56 items-center gap-2 md:w-44">
                  <HiOutlineSquares2X2 size={28} />
                  <span>View Project</span>
                </button>
              </a>
            )}

            <a href={project.githubLink}>
              <button className="btn btn-github flex h-14 w-56 items-center gap-3 md:w-44">
                <SiGithub size={24} />
                <span>View Source</span>
              </button>
            </a>
          </div>
        </div>
        <div className="hidden md:block">
          <ProjectImage project={project} />
        </div>
      </div>
    </motion.div>
  );
}

function ProjectImage({ project }: { project: Project }) {
  return !!project.image ? (
    <div className="flex shrink-0 flex-col gap-4">
      <img
        src={project.image}
        alt={project.title}
        className="mx-auto h-52 w-52 rounded-3xl object-cover md:h-64 md:w-64 lg:h-80 lg:w-80"
      />
    </div>
  ) : (
    <></>
  );
}
