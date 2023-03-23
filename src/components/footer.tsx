import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="relative flex w-full justify-center py-4 dark:border-slate-500">
      <div className="flex flex-col items-center gap-2">
        <p className="mx-auto flex flex-wrap items-center justify-center gap-2 text-center">
          <span>Designed and programmed with</span>
          <span className="text-2xl text-red-600"> &hearts; </span>
          {/* <FiHeart className="text-red-500" /> */}
          <span>by Ayden Springer.</span>
        </p>
        <div className="my-2 flex items-center gap-4">
          <a href="">
            <FaLinkedin size={36} className="text-white" />
          </a>
          <a href="">
            <FaGithub size={36} className="text-white" />
          </a>
          <a href="">
            <FaTwitter size={32} className="text-white" />
          </a>
        </div>

        <div className="flex flex-col items-center gap-4 md:flex-row">
          <a href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
            <span className="text-xl">{process.env.NEXT_PUBLIC_URL}</span>
          </a>
          <p className="hidden md:inline-block">&bull;</p>
          <p>&copy;2022-{new Date().getFullYear()}</p>
          <p className="hidden md:inline-block">&bull;</p>
          <a
            href="https://github.com/WraithWinterly/aydens.net"
            className="text-lg">
            View Source
          </a>
        </div>
      </div>
    </footer>
  );
}
