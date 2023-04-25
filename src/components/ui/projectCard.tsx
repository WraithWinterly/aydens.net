import Image, { StaticImageData } from "next/image";

export interface Project {
  title: string;
  type: string;
  description: string;
  image?: StaticImageData;
  coverTop?: boolean;
  sourceLink?: string;
  liveLink?: string;
  techIcons: string[];
}

export default function ProjectCard({
  project,
  purple,
}: {
  project: Project;
  purple?: boolean;
}) {
  function onClick() {}
  return (
    <div className="mx-auto flex h-full w-full max-w-[400px] flex-col bg-opacity-70 text-gray-300 shadow-lg transition-transform duration-500 hover:scale-105">
      {/* image */}
      <div
        className={`h-[250px] w-full cursor-pointer rounded-t-3xl ${
          purple ? "bg-[#370C1E]" : "bg-[#10273d]"
        } `}
        onClick={() => onClick()}>
        {!!project.image && (
          <Image
            src={project.image.src}
            alt={`${project.title} image`}
            width={project.image.width}
            height={project.image.height}
            className={`h-full rounded-t-3xl object-cover ${
              project.coverTop ? "object-top" : "object-center"
            }`}
          />
        )}
      </div>
      <div
        className={`relative flex flex-1 cursor-pointer flex-col rounded-b-3xl px-6 pt-3 pb-6 text-start ${
          purple ? "bg-[#370C1E]" : "bg-[#10273d]"
        }`}>
        <div
          className="absolute top-0 right-0 left-0 bottom-0"
          onClick={() => onClick()}></div>

        <h4 className="relative inline-block w-fit cursor-auto">
          {project.title}
        </h4>
        <span className="relative mb-4 w-fit cursor-auto text-sm text-gray-400">
          {project.type}
        </span>
        <span className="relative w-fit cursor-auto font-thin">
          {project.description}
        </span>
      </div>
    </div>
  );
}
