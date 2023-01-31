import Image from "next/image";
import { SiGithub, SiLinkedin, SiTwitter } from "react-icons/si";
import { IoRefreshCircleOutline } from "react-icons/io5";
import Link from "next/link";
import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - Ayden&#39;s Site</title>
        <meta
          name="description"
          content="The contact page for Ayden, such as LinkedIn and Github."
        />
      </Head>
      <div className="flex w-full flex-col gap-4 animate-in fade-in duration-700 md:slide-in-from-top-10">
        <div className="mx-auto max-w-2xl px-2 text-center">
          <h1>Contact</h1>
          <p>I am happy you have taken the time to reach out!</p>
          <p>
            Open communication and friendliness are a huge value for me, and
            your input is important to me! Here are all the various methods to
            contact me or view all of my social media or links. I look forward
            to connecting with you soon!
          </p>
        </div>

        <div className="flex flex-col items-center justify-center md:flex-row md:gap-4">
          <div className="flex flex-col">
            <div className="w-52 animate-in duration-700 md:slide-in-from-left">
              <a
                href="https://github.com/WraithWinterly"
                target="_blank"
                rel="noreferrer">
                <button className="btn w-full">
                  <span className="flex items-center gap-3">
                    <SiGithub size={22} /> <span>View Github</span>
                  </span>
                </button>
              </a>
            </div>
            <div className="w-52 animate-in duration-700 md:slide-in-from-left">
              <a
                href="https://www.linkedin.com/in/ayden-springer"
                target="_blank"
                rel="noreferrer">
                <button className="btn w-full">
                  <span className="flex items-center gap-3">
                    <SiLinkedin size={22} /> <span>View LinkedIn</span>
                  </span>
                </button>
              </a>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="w-52 animate-in duration-700 md:slide-in-from-left">
              <a
                href="https://twitter.com/WraithWinterly"
                target="_blank"
                rel="noreferrer">
                <button className="btn w-full">
                  <span className="flex items-center gap-3">
                    <SiTwitter size={22} /> <span>View Twitter</span>
                  </span>
                </button>
              </a>
            </div>
            <div className="w-52 animate-in duration-700 md:slide-in-from-left">
              <a
                href="https://wraithwinterly.github.io/"
                target="_blank"
                rel="noreferrer">
                <button className="btn w-full">
                  <span className="flex items-center gap-3">
                    <IoRefreshCircleOutline size={22} />
                    <span>View 2022 Site</span>
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* Github Section */}
        <div className="mx-auto h-full w-full rounded-lg bg-slate-900/70 pt-4 pb-20 backdrop-blur-md md:py-4 md:px-8 lg:max-w-[1200px]">
          <h2 className="text-center lg:text-start">Github</h2>
          {/* Github Box */}
          <div className="flex h-full flex-col gap-6 rounded-lg border-solid border-gray-500 border-opacity-50 py-4 md:flex-row">
            {/* Github Personal Section */}
            <div className="flex w-full flex-col items-center gap-2 md:items-start lg:w-72">
              <Image
                src="/github-pfp.png"
                className="rounded-full"
                alt="Profile"
                width={200}
                height={200}
              />
              <h3 className="pb-0">Ayden Springer</h3>
              <h4 className="pt-0 font-normal text-gray-500">WraithWinterly</h4>
              <button className="btn ml-0 bg-[#6e5494] py-4 text-xl hover:bg-[#8767b6]">
                View Github
              </button>
            </div>
            {/* Github Project Cards */}
            <div className="flex h-full flex-col items-center gap-4 lg:w-full">
              <p>
                Example Projects -{" "}
                <Link href="/projects">
                  <i>See All Projects</i>
                </Link>
              </p>
              <div className="grid h-fit justify-center gap-2 lg:grid-cols-2">
                <GithubCard
                  name="aydens.net"
                  description="This website!"
                  href="https://github.com/WraithWinterly/aydens.net"
                  lang="Typescript"
                  langColor="bg-blue-400"
                />
                <GithubCard
                  name="wraithwinterly.github.io"
                  description="2022 Website"
                  href="https://github.com/WraithWinterly/wraithwinterly.github.io"
                  lang="Javascript"
                  langColor="bg-yellow-300"
                />

                <GithubCard
                  name="Everplast"
                  description="Platforming game with Godot Engine"
                  href="https://github.com/WraithWinterly/Everplast"
                  lang="GDScript"
                  langColor="bg-slate-500"
                />
                <GithubCard
                  name="next-life-planner"
                  description=""
                  href="https://github.com/WraithWinterly/next-life-planner"
                  lang="Typescript"
                  langColor="bg-blue-400"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

interface GithubCardProps {
  name: string;
  description: string;
  href: string;
  lang: string;
  langColor: string;
}
function GithubCard({
  name,
  description,
  href,
  lang,
  langColor,
}: GithubCardProps) {
  return (
    <div className="h-full w-full rounded-lg border border-gray-700 bg-gray-800 py-4 px-4 backdrop-blur-md">
      <div className="mb-1 flex w-fit items-center gap-2">
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="text-xl font-bold text-sky-500">
          {name}
        </a>
        <div className="rounded-full border border-gray-700 font-bold text-gray-400">
          <p className="px-2 text-sm font-medium">Public</p>
        </div>
      </div>

      <p className="text-xl font-normal text-gray-400">{description}</p>
      <div className="mt-1 flex items-center gap-2">
        <div className={"h-3 w-3 rounded-full " + langColor}></div>
        <p className="text-lg text-gray-400">{lang}</p>
      </div>
    </div>
  );
}
