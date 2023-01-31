import { useId } from "react";
import { SiGithub } from "react-icons/si";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { IoWarningOutline } from "react-icons/io5";

import lifePlanner from "@assets/proj-icons/life-planner.png";
import unitconverter from "@assets/proj-icons/unit-converter.png";
import calculator from "@assets/proj-icons/calculator.png";
import tasksultra from "@assets/proj-icons/tasksultra.png";
import rapidWraith from "@assets/proj-icons/rapid-wraith.png";
import Head from "next/head";

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

export default function Projects() {
  const id = useId();
  return (
    <>
      <Head>
        <title>Projects - Ayden&#39;s Site</title>
        <meta
          name="description"
          content="View projects including Life Planner, Unit Converter, Calculator, etc."
        />
      </Head>
      <div className="animate-in fade-in duration-500">
        <h1 className="text-center">Projects</h1>
        <div className="flex flex-col gap-4 px-1">
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
      className={`flex gap-4 rounded-2xl bg-black/20 px-8 py-8 animate-in fade-in duration-500 ${
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
