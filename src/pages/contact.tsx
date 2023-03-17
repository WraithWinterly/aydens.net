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
      <div className="flex w-full flex-col gap-4 pt-14 animate-in fade-in duration-700 md:slide-in-from-top-10">
        <div className="mx-auto max-w-2xl px-2 text-center">
          <h1>Contact</h1>
          <h3 className="text-center">
            <i>This page will be updated soon.</i>
          </h3>
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
      </div>
    </>
  );
}
