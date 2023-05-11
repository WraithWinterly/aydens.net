import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import Modal, { CloseButton } from "./modal";

import { AiOutlineAppstore } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";
import { Project } from "@/utils/projectsList";
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
      }, 800);
    }
  }, [proj, ref, project.title]);

  // useEffect(() => {
  //   if (modalShown) {
  //     if (typeof window === "undefined") return;
  //     const url = new URL(window.location.toString());
  //     url.searchParams.set("proj", project.title.toLowerCase());
  //     window.history.pushState({}, "", url);
  //   } else {
  //     if (typeof window === "undefined") return;
  //     if (proj?.toString().toLowerCase() != project.title.toLowerCase()) {
  //       return;
  //     }
  //     //   const url = new URL(window.location.toString());
  //     // url.searchParams.delete("proj");
  //     // window.history.pushState({}, "", url);
  //   }
  // }, [modalShown]);

  return (
    <>
      <div
        className="mx-auto flex h-full w-full max-w-[400px] scroll-m-32 flex-col bg-opacity-70 text-gray-300 shadow-lg transition-transform duration-500 hover:scale-105"
        ref={ref}
        onClick={() => setModalShown(true)}>
        {/* image */}
        <div
          className={`relative h-[250px] w-full cursor-pointer rounded-t-3xl ${
            purple ? "bg-[#370C1E]" : "bg-[#10273d]"
          } `}>
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
          onClick={() => setModalShown(true)}
          className={`relative flex flex-1 cursor-pointer flex-col rounded-b-3xl  bg-gradient-to-l px-6 pt-3 pb-6 text-start ${
            purple
              ? "from-[#3f0e23]/20 to-[#33091a]/20"
              : "from-[#17334d]/20 to-[#091c2d]/20"
          }`}>
          <h4 className="w-fit">{project.title}</h4>
          <span className="mb-4 w-fit text-sm text-gray-400">
            {project.type}
          </span>
          <span className="w-fit font-thin">{project.description}</span>
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
            className={`backdrop-blur-4xl relative flex flex-1 cursor-pointer flex-col rounded-b-3xl px-6 pt-3 pb-6 text-start ${
              purple ? "bg-[#3f0e23]/80" : "bg-[#17334d]/70"
            }`}>
            <div className="flex w-full flex-col md:flex-row">
              {/* Info */}
              <div className="order-2 flex flex-1 flex-col gap-4 pr-8 md:order-first">
                <h4 className="relative inline-block w-fit cursor-auto">
                  {project.title}
                </h4>
                <span className="relative mb-4 w-fit cursor-auto text-sm text-gray-400">
                  {project.type}
                </span>
                <span className="relative block w-fit cursor-auto text-base font-thin">
                  {project.description}
                </span>{" "}
                <div className="relative flex w-fit cursor-auto flex-col justify-start text-base font-thin">
                  {project.descriptionFull}
                </div>
              </div>
              {/* Buttons */}
              <div className="flex w-full flex-col justify-start pt-2 md:max-w-[250px]">
                {project.liveLink && (
                  <Link
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer noopener">
                    <div className="btn mx-0 flex items-center gap-2 py-4">
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
                    <div className="btn btn-github mx-0 flex items-center gap-2 py-4">
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
                        } mx-0 flex items-center gap-2 py-4 md:py-2`}>
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
                <div className="my-4 flex w-full flex-wrap justify-center gap-3 rounded-xl bg-white/20 px-2 py-8">
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
            {/* <div className="my-4 flex w-full flex-wrap justify-center gap-4 rounded-xl bg-white/20 p-8">
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
            </div> */}
          </div>
        </div>
      </Modal>
    </>
  );
}
