import w3l9 from "@assets/w3l9.png";
import everplastLogo from "@assets/everplast-logo.png";
import { useState } from "react";
import { SiGithub, SiSteam } from "react-icons/si";
import Image from "next/image";

export default function Games() {
  const [hoveringImage, setHoveringImage] = useState<boolean>(false);
  return (
    <>
      <h1>Games</h1>
      <div
        className="h-[350px] w-[980px] rounded-lg bg-center bg-no-repeat transition-all duration-500"
        style={{
          backgroundImage: `url('${w3l9.src}')`,
          backgroundSize: hoveringImage ? "980px" : "1080px",
          filter: hoveringImage ? "brightness(0.8)" : "brightness(1)",
          boxShadow: hoveringImage ? "inset 0 0 10px black" : "",
        }}
        onMouseEnter={() => setHoveringImage(true)}
        onMouseLeave={() => setHoveringImage(false)}>
        <div className="mx-auto flex">
          <Image
            width={1280 / 3}
            height={720 / 3}
            alt="everplast logo"
            src={everplastLogo.src}
            className="rounded-2xl bg-black/50 pl-4 pr-4 pb-4 pt-2"></Image>
          <button className="btn flex h-12 items-center gap-4 bg-[#6E5494] hover:bg-[#7e60aa]">
            <SiGithub size={24} />
            <span>View on Github</span>
          </button>
          <button className="btn flex h-12 items-center gap-4 bg-[#1b2838] hover:bg-[#25374d]">
            <SiSteam size={24} /> <span>View on Steam</span>
          </button>
        </div>
      </div>
    </>
  );
}
