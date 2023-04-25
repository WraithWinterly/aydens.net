import Image from "next/image";
import { useId } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";

const Socials = [
  {
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/ayden-springer-03a61824a/",
  },
  {
    icon: FaGithub,
    link: "https://github.com/WraithWinterly",
  },
  {
    icon: FaTwitter,
    link: "https://twitter.com/WraithWinterly",
  },
];

export default function Footer() {
  const id = useId();
  return (
    <footer className="relative flex w-full justify-center bg-bgPurple bg-opacity-70 py-7 text-gray-300 dark:border-slate-500">
      <div className="flex flex-col items-center gap-2">
        <p className="mx-auto flex flex-wrap items-center justify-center gap-2 text-center">
          <span>Designed and programmed with</span>
          <span className="text-2xl text-red-600"> &hearts; </span>
          {/* <FiHeart className="text-red-500" /> */}
          <span>by Ayden Springer.</span>
        </p>
        <div className="my-2 flex items-center gap-4">
          {Socials.map((social, i) => (
            <a href={social.link} target="_blank" rel="noreferrer noopener">
              <social.icon
                size={36}
                className="text-gray-300 transition-colors duration-500 hover:text-accent"
                key={`${id}-${i}`}
              />
            </a>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4 md:flex-row">
          <a href={`https://${process.env.NEXT_PUBLIC_URL}`}>
            <span className="text-xl">{process.env.NEXT_PUBLIC_URL}</span>
          </a>
          <p className="hidden md:inline-block">&bull;</p>
          <p>&copy;2022-{new Date().getFullYear()}</p>
          <p className="hidden md:inline-block">&bull;</p>
          <a
            href="https://github.com/WraithWinterly/aydens.net"
            className="text-lg hover:text-accent">
            View Source
          </a>
        </div>
      </div>
    </footer>
  );
}
