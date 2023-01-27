import w3l9 from "@assets/games/w3l9.png";
import { useState } from "react";
import { SiGithub, SiSteam } from "react-icons/si";
import { FaGamepad } from "react-icons/fa";
import Image from "next/image";

import everplastLogo from "@assets/games/everplast-logo.png";
import blockhit from "@assets/games/blockhit.png";
import wraithfps from "@assets/games/wraithfps.png";

export default function Games() {
  const [hoveringImage, setHoveringImage] = useState<boolean>(false);
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-center">Games</h1>
      {/* Everplast */}
      <div
        className="h-[450px] w-[320px] rounded-lg bg-center bg-no-repeat transition-all animate-in fade-in zoom-in-50 duration-500 md:w-[680px] lg:w-[950px]"
        style={{
          backgroundImage: `url('${w3l9.src}')`,
          backgroundSize: hoveringImage ? "980px" : "1080px",
          filter: hoveringImage ? "brightness(0.8)" : "brightness(1)",
          boxShadow: hoveringImage ? "inset 0 0 4px black" : "",
        }}
        onMouseEnter={() => setHoveringImage(true)}
        onMouseLeave={() => setHoveringImage(false)}>
        <div className="mx-auto flex h-full w-fit flex-col justify-between px-4 py-4">
          <Image
            width={everplastLogo.width / 3}
            height={everplastLogo.height / 3}
            alt="everplast logo"
            src={everplastLogo.src}
            className="rounded-2xl bg-black/70 px-4 pb-4 pt-2 backdrop-blur-md animate-in fade-in duration-500"></Image>
          <div className="flex flex-col items-center gap-0">
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
      <div className="flex h-full w-full flex-col justify-between gap-4 md:flex-row">
        {/* Blockhit */}
        <div
          className="h-[320px] w-[320px] rounded-lg bg-contain bg-center bg-no-repeat animate-in fade-in slide-in-from-left duration-500 lg:h-[450px] lg:w-[450px]"
          style={{
            backgroundImage: `url(${blockhit.src})`,
          }}>
          <div className="flex h-full flex-col items-center justify-between text-center">
            <p className="pt-24">
              Hit the blocks to get points, but be careful, the obstacles are
              coming.
            </p>
            <div className="mx-auto flex w-full flex-col items-center justify-center gap-2 pb-24 lg:flex-row">
              <a
                href="https://wraithwinterly.itch.io/blockhit"
                target="_blank"
                rel="noreferrer">
                <button className="btn flex w-44 gap-2">
                  <FaGamepad size={24} />
                  <span>View Game</span>
                </button>
              </a>
              <a
                href="https://github.com/WraithWinterly/BlockHit"
                target="_blank"
                rel="noreferrer">
                <button className="btn btn-github flex w-44 gap-2">
                  <SiGithub size={24} />
                  <span>View Source</span>
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* WraithFPS */}
        <div
          className="h-[320px] w-[320px] rounded-lg bg-contain bg-center bg-no-repeat animate-in fade-in slide-in-from-right duration-500 lg:h-[450px] lg:w-[450px]"
          style={{
            backgroundImage: `url(${wraithfps.src})`,
          }}>
          <div className="flex h-full flex-col items-center justify-between text-center">
            <div className="flex flex-col pt-10">
              <h3>WraithFPS</h3>
              <p className="font-bold">
                An open-source documented Unity FPS/RTS feature-rich sample.
              </p>
            </div>

            <div className="mx-auto flex w-full flex-col items-center justify-center gap-2 pb-24 lg:flex-row">
              <a
                href="https://www.youtube.com/watch?v=fMNmn9NV5DE"
                target="_blank"
                rel="noreferrer">
                <button className="btn flex w-44 gap-2">
                  <FaGamepad size={24} />
                  <span>View Game</span>
                </button>
              </a>

              <a
                href="https://github.com/WraithWinterly/Unity-FPS-RTS-System"
                target="_blank"
                rel="noreferrer">
                <button className="btn btn-github flex w-44 gap-2">
                  <SiGithub size={24} />
                  <span>View Source</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
