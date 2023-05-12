import Link from "next/link";
import AnimationFadeIn from "./animations/animation-fadein";
import AnimationTextShowUp from "./animations/animation-text-showup";
import PageSection from "./layout/page-section";
import { HiOutlineDownload } from "react-icons/hi";
import { FaDiscord, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BsTelephoneOutbound } from "react-icons/bs";
import { AES, enc } from "crypto-js";
import { useState } from "react";

const Links = [
  {
    name: "Download Resume",
    icon: <HiOutlineDownload size={24} />,
    link: "/ayden-resume.pdf",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={24} />,
    link: "https://www.linkedin.com/in/ayden-springer-03a61824a/",
  },
  {
    name: "Github",
    icon: <FaGithub size={24} />,
    link: "https://github.com/WraithWinterly",
  },
  {
    name: "Twitter",
    icon: <FaTwitter size={24} />,
    link: "https://twitter.com/WraithWinterly",
  },
  {
    name: "Ayden#8531",
    icon: <FaDiscord size={24} />,
  },
];

export default function ContactSection() {
  const [displayText, setDisplayText] = useState("");

  const _F47CEE6C_FDA6_4769_815E_9B978A8D7AD4 =
    "C3EB5E69-C24E-4350-92D5-6C96921EBBCF";

  function Discover() {
    // This is not supposed to be secure, I just don't want my alternative work phone number showing up in SEO / bots
    const bytes = AES.decrypt(
      "U2FsdGVkX19JdaTDD7D6zQmJm9yRtr7elFQ8t+/3ORgkYYx+7EhKgEUTCG88oCSb",
      _F47CEE6C_FDA6_4769_815E_9B978A8D7AD4
    );
    const originalText = bytes.toString(enc.Utf8);
    setDisplayText(originalText);
  }

  return (
    <PageSection color="purple">
      <div className="flex w-full flex-col lg:flex-row">
        <div className="flex-1 pb-24 pt-4 md:px-8 md:pt-20">
          <AnimationTextShowUp noScale>
            <h2 className="mb-16 bg-gradient-to-br from-cyan-500 to-blue-800 bg-clip-text text-start text-6xl font-extrabold text-transparent md:text-5xl lg:text-7xl">
              Contact Me
            </h2>
          </AnimationTextShowUp>
          <AnimationFadeIn>
            <form
              action="https://usebasin.com/f/5785003bca73"
              method="POST"
              className="flex w-full max-w-4xl flex-col gap-8 text-xl text-gray-400">
              <div className="flex flex-col gap-1">
                <label htmlFor="name">Name </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="border-2 border-white/0 border-b-gray-400/60 bg-bgPurple/30 px-4 py-4 outline-gray-400/70"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="email">Email </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="border-2 border-white/0 border-b-gray-400/60 bg-bgPurple/30 px-4 py-4 outline-gray-400/70"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="message">Message </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  cols={33}
                  required
                  className="resize-none rounded-md border-2 border-gray-400/60 bg-bgPurple/30 px-4 py-4 outline-gray-400/70 ring-0 focus:border-gray-300"
                />
              </div>

              <button
                type="submit"
                className="-ml-3 w-full cursor-pointer bg-opacity-0 px-4 py-4 text-start outline-gray-400/70 hover:underline md:w-52">
                Submit
              </button>
            </form>
          </AnimationFadeIn>
        </div>
        <div className="mx-6 mt-24 hidden h-[720px] w-[2px] bg-gray-500/80 lg:block"></div>
        <div className="flex gap-8 pb-24 pt-4 md:px-8 lg:mr-8 lg:flex-col lg:justify-start lg:pt-36">
          <div className="flex flex-col gap-8">
            {Links.map((link, index) => (
              <>
                {!!link.link ? (
                  <Link
                    href={link.link}
                    key={index}
                    target="_blank"
                    rel="noreferrer noopener">
                    <div className="flex items-center gap-3 text-xl text-gray-400 transition-colors duration-500 hover:text-white">
                      {link.icon}
                      <span>{link.name}</span>
                    </div>
                  </Link>
                ) : (
                  <div>
                    <div className="flex items-center gap-3 text-xl text-gray-400">
                      {link.icon}
                      <span>{link.name}</span>
                    </div>
                  </div>
                )}
              </>
            ))}

            <div>
              <div className="flex h-16 items-center gap-3 text-xl text-gray-400">
                <BsTelephoneOutbound size={24} />
                {displayText.length > 0 ? (
                  <span className="-mb-3 h-10">{displayText}</span>
                ) : (
                  <button className="btn mx-0 h-10 py-0" onClick={Discover}>
                    View Number
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageSection>
  );
}
