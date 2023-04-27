import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import Modal, { CloseButton } from "./modal";

import { AiOutlineAppstore } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";
import { Project } from "@/utils/projects";
import { FiCameraOff } from "react-icons/fi";

export default function ProjectCard({
  project,
  purple,
}: {
  project: Project;
  purple?: boolean;
}) {
  const [modalShown, setModalShown] = useState(false);
  const router = useRouter();
  const { proj } = router.query;
  const ref = useRef<HTMLDivElement>(null);

  const id = useId();
  const id2 = useId();

  useEffect(() => {
    if (proj?.toString().toLowerCase() === project.title.toLowerCase()) {
      setModalShown(true);
      setTimeout(() => {
        ref.current?.scrollIntoView();
      }, 200);
    }
  }, [proj, ref, project.title]);

  return (
    <>
      <div
        className="mx-auto flex h-full w-full max-w-[400px] scroll-m-32 flex-col bg-opacity-70 text-gray-300 shadow-lg transition-transform duration-500 hover:scale-105"
        ref={ref}>
        {/* image */}
        <div
          className={`relative h-[250px] w-full cursor-pointer rounded-t-3xl ${
            purple ? "bg-[#370C1E]" : "bg-[#10273d]"
          } `}
          onClick={() => setModalShown(true)}>
          {!!project.image ? (
            <Image
              src={project.image.src}
              alt={`${project.title} image`}
              width={project.image.width}
              height={project.image.height}
              className={`h-full w-full rounded-t-3xl object-cover ${
                project.coverTop ? "object-top" : "object-center"
              }`}
            />
          ) : (
            <div className="h-[350px] w-full rounded-t-3xl bg-gray-800 object-cover">
              <FiCameraOff
                size={64}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-gray-500"
              />
            </div>
          )}
        </div>
        <div
          className={`relative flex flex-1 cursor-pointer flex-col rounded-b-3xl px-6 pt-3 pb-6 text-start ${
            purple ? "bg-[#370C1E]" : "bg-[#10273d]"
          }`}>
          <div
            className="absolute top-0 right-0 left-0 bottom-0"
            onClick={() => setModalShown(true)}></div>

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
      <Modal
        title={project.title}
        isOpen={modalShown}
        setIsOpen={setModalShown}
        borderless={true}>
        <div className="flex h-full w-full flex-col bg-opacity-70 text-gray-300 shadow-lg">
          {/* image */}
          <div
            className={`relative h-full max-h-[850px] w-full rounded-t-3xl ${
              purple ? "bg-[#370C1E]" : "w-full bg-[#10273d]"
            } `}>
            <div className="absolute right-2 top-1">
              <CloseButton setIsOpen={setModalShown} />
            </div>

            {!!project.image ? (
              <Image
                src={project.image.src}
                alt={`${project.title} image`}
                width={project.image.width}
                height={project.image.height}
                className={`h-[350px] w-full rounded-t-3xl object-cover ${
                  project.coverTop ? "object-top" : "object-center"
                }`}
              />
            ) : (
              <div className="h-[350px] w-full rounded-t-3xl bg-gray-800 object-cover">
                <FiCameraOff
                  size={64}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-gray-500"
                />
              </div>
            )}
          </div>
          <div
            className={`relative flex flex-1 flex-col rounded-b-3xl px-6 pt-3 pb-6 text-start ${
              purple ? "bg-[#370C1E]" : "bg-[#10273d]"
            }`}>
            <div className="flex w-full">
              {/* Info */}
              <div className="flex flex-1 flex-col gap-4">
                <h4 className="relative inline-block w-fit cursor-auto">
                  {project.title}
                </h4>
                <span className="relative mb-4 w-fit cursor-auto text-sm text-gray-400">
                  {project.type}
                </span>
                <span className="relative block w-fit cursor-auto font-thin">
                  {project.description}
                </span>{" "}
                <span className="relative mt-6 block w-fit cursor-auto font-thin">
                  {project.descriptionFull}
                </span>
              </div>
              {/* Buttons */}
              <div className="flex w-full max-w-[250px] flex-col justify-center pt-2">
                {project.liveLink && (
                  <Link
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer noopener">
                    <div className="btn flex items-center gap-2 py-4">
                      <AiOutlineAppstore size={28} />
                      <span>View Live Project</span>
                    </div>
                  </Link>
                )}
                {project.sourceLink && (
                  <Link
                    href={project.sourceLink}
                    target="_blank"
                    rel="noreferrer noopener">
                    <div className="btn btn-github flex items-center gap-2 py-4">
                      <FaGithub size={28} />
                      <span>View Source</span>
                    </div>
                  </Link>
                )}
                {project.customLinks &&
                  project.customLinks.map((link, i) => (
                    <Link
                      href={link.link}
                      key={`${id}-${i}`}
                      target="_blank"
                      rel="noreferrer noopener">
                      <div
                        className={`btn ${
                          link.type === "github" ? "btn-github" : ""
                        } flex items-center gap-2 py-1`}>
                        {link.type === "github" ? (
                          <FaGithub size={28} className="flex-shrink-0" />
                        ) : (
                          <AiOutlineAppstore
                            size={28}
                            className="flex-shrink-0"
                          />
                        )}
                        <span>{link.name}</span>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
            <div className="my-4 flex w-full flex-wrap justify-center gap-4 rounded-xl bg-white/20 p-8">
              {project.techIcons.map((techIcon, i) => (
                <div
                  className="group relative transition-all duration-500 hover:scale-110"
                  key={`${id2}-${i}`}>
                  <Image
                    alt=""
                    className="group h-16 w-16 flex-shrink-0"
                    src={techIcon.icon.src}
                    width={techIcon.icon.width}
                    height={techIcon.icon.height}
                  />

                  <span className="pointer-events-none absolute -top-[70px] left-0 right-0 ml-2 flex h-full min-w-[120px] items-center rounded-xl bg-bgBlue px-4 py-1 text-center opacity-0 duration-500 group-hover:opacity-100">
                    {techIcon.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
