import { SiGithub, SiSteam } from "react-icons/si";
import { useState } from "react";
import w3l9 from "@assets/games/w3l9.png";
import everplastLogo from "@assets/games/everplast-logo.png";
import Image from "next/image";
import GodotIcon from "./techIcons/godotIcon";

export default function EverplastCard() {
  const [hoveringImage, setHoveringImage] = useState(false);
  return (
    <div className="flex w-full justify-center rounded-xl bg-gray-600/50 px-2 py-2">
      <div
        className="h-[450px] w-[320px] rounded-lg  bg-center bg-no-repeat transition-all animate-in fade-in zoom-in-50 duration-500 md:w-[680px] lg:w-[950px]"
        style={{
          backgroundImage: `url('${w3l9.src}')`,
          backgroundSize: hoveringImage ? "980px" : "1080px",
          filter: hoveringImage ? "brightness(1)" : "brightness(0.9)",
          boxShadow: hoveringImage ? "inset 0 0 4px black" : "",
        }}
        onMouseEnter={() => setHoveringImage(true)}
        onMouseLeave={() => setHoveringImage(false)}>
        <div className="absolute left-4 bottom-4 z-30 rounded-xl bg-gray-700/50 px-2 py-2">
          <div className="z-30">
            <GodotIcon />
          </div>
        </div>

        <div className="relative mx-auto flex h-full w-fit flex-col justify-between px-4 py-4">
          <Image
            width={everplastLogo.width}
            height={everplastLogo.height}
            alt="everplast logo"
            src={everplastLogo.src}
            className="rounded-2xl bg-black/70 px-4 pb-4 pt-2 backdrop-blur-md animate-in fade-in duration-500"></Image>
          <div className="mb-24 flex flex-col items-center gap-0 md:mb-0">
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
    </div>
  );
}
