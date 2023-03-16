import Head from "next/head";
import { motion } from "framer-motion";

import PageContent from "@/components/ui/pageContent";
import ParticlesBG from "@/components/particlesBg";
import HighlightingText from "@/components/ui/highlightingText";
import useScrollPosition from "@/hooks/useScrollPosition";
import { SiGithub, SiSteam } from "react-icons/si";
import { useState } from "react";
import w3l9 from "@assets/games/w3l9.png";
import everplastLogo from "@assets/games/everplast-logo.png";
import Image from "next/image";

export default function Home() {
  const scrollPos = useScrollPosition();

  return (
    <>
      <Head>
        <title>Aydens Site</title>
        <meta name="description" content="Ayden's Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className="flex h-full min-h-screen w-full flex-col"
        style={
          {
            // backgroundImage: `url(${PurpleBG.src})`,
          }
        }>
        <PageContent>
          <div className="mb-72 w-full flex-col ">
            <div className="flex w-fit flex-col px-8 py-40 text-left fade-in duration-700 md:animate-in md:slide-in-from-top-10">
              <motion.div
                initial={{ rotate: -20, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                whileHover={{ scale: 1.025 }}
                whileTap={{ scale: 1.05 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  duration: 0.4,
                }}>
                <p className="pl-1 text-2xl text-gray-400">I am Ayden,</p>
                <h1 className="mx-0 w-[1000px] py-2 px-0 text-7xl">
                  Crafting websites should speak to the
                  <span className="flex gap-3">
                    <motion.div
                      initial={{
                        color: "#ffffff",
                      }}
                      whileInView={{
                        color: "#dc2626",
                      }}
                      transition={{
                        duration: 0.5,
                        delay: 0.2,
                      }}>
                      <span>heart</span>
                    </motion.div>
                    <span> and </span>
                    <motion.div
                      initial={{
                        color: "#ffffff",
                      }}
                      whileInView={{
                        color: "#a855f7",
                      }}
                      transition={{
                        duration: 0.5,
                        delay: 0.4,
                      }}>
                      <span>soul</span>
                    </motion.div>
                    <span>.</span>
                  </span>
                </h1>

                <p className="pl-1 text-3xl text-gray-400 animate-in fade-in duration-1000">
                  Because you matter.
                </p>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{
              rotate: 0,
              scale: 0.95,
            }}
            whileInView={{
              rotate: 0,
              scale: 1,
            }}
            transition={{
              bounce: 0.5,
              duration: 0.5,
            }}>
            <div className="mb-24 flex max-w-5xl flex-wrap gap-3 pl-6 text-5xl leading-relaxed">
              My{" "}
              <HighlightingText
                text="passion for technology"
                twClass="text-5xl leading-relaxed"
              />{" "}
              is matched only by my
              <HighlightingText
                text="ambition"
                twClass="text-5xl leading-relaxed"
              />{" "}
              as a{" "}
              <HighlightingText
                text="Full Stack"
                twClass="text-5xl leading-relaxed"
              />
              Developer seeking out create{" "}
              <HighlightingText
                text="truly remarkable"
                twClass="text-5xl leading-relaxed"
              />
              solutions.
            </div>
          </motion.div>
          <motion.div
            initial={{
              x: "-30px",
            }}
            whileInView={{
              x: "0px",
            }}
            transition={{
              bounce: 1.5,
              duration: 0.5,
            }}>
            <div className="mb-20 flex max-w-5xl flex-wrap gap-3 pl-6 text-5xl leading-relaxed">
              I am tackling{" "}
              <HighlightingText
                text="exciting"
                twClass="text-5xl leading-relaxed"
              />{" "}
              and{" "}
              <HighlightingText
                text="varied"
                twClass="text-5xl leading-relaxed"
              />{" "}
              projects.
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: "100px",
            }}
            whileInView={{
              opacity: 1,
              y: "0px",
            }}
            transition={{
              duration: 0.5,
            }}>
            <motion.div
              initial={{
                opacity: 0.5,
                y: "0px",
              }}
              whileInView={{
                opacity: 1,
                y: "-50px",
              }}>
              <h1 className="w-full bg-gradient-to-r from-purple-400 to-pink-800 bg-clip-text pt-72 text-center text-9xl font-extrabold text-transparent">
                The Showcase
              </h1>
            </motion.div>

            <div className="flex flex-col items-center">
              <EverplastCard />
            </div>
          </motion.div>

          {/* <p className="pb-[4000px]"></p> */}
          <h2 className="py-24 text-center">
            This page is still under construction.
          </h2>

          {scrollPos < 2300 && <ParticlesBG />}
        </PageContent>
      </main>
    </>
  );
}

function EverplastCard() {
  const [hoveringImage, setHoveringImage] = useState(false);
  return (
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
          width={everplastLogo.width}
          height={everplastLogo.height}
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
  );
}
