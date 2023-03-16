import w3l9 from "@assets/games/w3l9.png";
import { useState } from "react";
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
import rapidWraith from "@assets/proj-icons/rapid-wraith.png";

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
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-center">All Projects</h1>
        {/* Everplast */}
        <div
          className="h-[450px] w-[320px] rounded-lg bg-center bg-no-repeat transition-all animate-in fade-in zoom-in-50 duration-500 md:w-[680px] lg:w-[950px]"
          style={{
            backgroundImage: `url('${w3l9.src}')`,
            backgroundSize: hoveringImage ? "980px" : "1080px",
            filter: hoveringImage ? "brightness(0.8)" : "brightness(1)",
            boxShadow: hoveringImage ? "inset 0 0 4px black" : "",
          }}
          onMouseEnter={() => setHoveringImage(true)}
          onMouseLeave={() => setHoveringImage(false)}>
          <div className="mx-auto flex h-full w-fit flex-col justify-between px-4 py-4">
            <Image
              width={everplastLogo.width}
              height={everplastLogo.height}
              alt="everplast logo"
              src={everplastLogo.src}
              className="rounded-2xl bg-black/70 px-4 pb-4 pt-2 backdrop-blur-md animate-in fade-in duration-500"></Image>
            <div className="flex flex-col items-center gap-0">
              <a
                href="https://github.com/WraithWinterly/Everplast"
                target="_blank"
                rel="noreferrer">
                <button className="btn btn-github flex h-12 items-center gap-4 md:w-72">
                  <SiGithub size={24} />
                  <span>View on Github</span>
                </button>
              </a>
              <a
                href="https://store.steampowered.com/app/1896630/Everplast/"
                target="_blank"
                rel="noreferrer">
                <button className="btn flex h-12 items-center gap-4 bg-[#1b2838] hover:bg-[#25374d]  md:w-72">
                  <SiSteam size={24} /> <span>View on Steam</span>
                </button>
              </a>
            </div>
          </div>
        </div>
        <ProjectsList />
        <div className="flex h-full w-full flex-col justify-between gap-4 md:flex-row">
          {/* Blockhit */}
          <div
            className="h-[320px] w-[320px] rounded-lg bg-contain bg-center bg-no-repeat animate-in fade-in duration-500 md:slide-in-from-left lg:h-[450px] lg:w-[450px]"
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
            className="h-[320px] w-[320px] rounded-lg bg-contain bg-center bg-no-repeat animate-in fade-in duration-500 md:slide-in-from-right lg:h-[450px] lg:w-[450px]"
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
  {
    title: "Rapid Wraith",
    description:
      "In this coffee shop, you can find your favorite coffee, you truly deserve it.",
    image: rapidWraith.src,
    liveLink: "https://wraithwinterly.github.io/rapid-wraith/",
    githubLink: "https://github.com/WraithWinterly/rapid-wraith",
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

export function ProjectsList() {
  const id = useId();
  return (
    <>
      <div className="w-full animate-in fade-in duration-500">
        <div className="flex w-full flex-col gap-4 px-1">
          {projects.map((project, i) => (
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
