import Head from "next/head";

import PageContent from "@/components/ui/pageContent";
import ParticlesBG from "@/components/particlesBg";
import HighlightingText from "@/components/ui/highlightingText";
import useScrollPosition from "@/hooks/useScrollPosition";
import EverplastCard from "@/components/ui/everplastCard";

import { motion } from "framer-motion";
import Link from "next/link";
import ContactSection from "@/components/contact";

export default function Home() {
  // const scrollPos = useScrollPosition();

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
          <HeroSection />
          <HighlightingTextSection />
          <ShowcaseSection />
          <SecondaryTextSection />
          <ContactSection />
          <ParticlesBG />
        </PageContent>
      </main>
    </>
  );
}

function HeroSection() {
  return (
    <div className="mb-72 w-full flex-col ">
      <div className="flex w-fit flex-col flex-wrap px-8 py-40 text-left fade-in duration-700 md:animate-in md:slide-in-from-top-10">
        <motion.div
          initial={{ rotate: -20, scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          // whileHover={{ scale: 1.025 }}
          whileTap={{ scale: 1.05 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 22,
            duration: 2,
          }}>
          <p className="pl-1 text-2xl text-gray-400">I am Ayden,</p>
          <h1 className="mx-0 w-full py-2 px-0 text-7xl md:max-w-2xl lg:max-w-[1000px]">
            Crafting websites should speak to the
            <span className="flex flex-wrap gap-3">
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
              <div className="flex">
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
              </div>
            </span>
          </h1>

          <p className="pl-1 text-3xl text-gray-400 animate-in fade-in duration-1000">
            Because you matter.
          </p>
          <div className="w-fit">
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              whileHover={{
                scale: 1.1,
                opacity: 1,
              }}
              transition={{
                type: "spring",
                damping: 6,
                bounce: 0.5,
                duration: 0.1,
              }}>
              <a
                href="https://drive.google.com/file/d/1U2CQvKHGjSTPWMyYKGUyUxp31aZxFBEo/view"
                className="text-white"
                target="_blank"
                rel="noreferrer">
                <button className="mt-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-900 px-12 py-4">
                  View Resume
                </button>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function HighlightingTextSection() {
  return (
    <>
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
        <div className="mb-24 flex max-w-5xl break-after-all flex-wrap gap-3 pl-6 text-5xl leading-relaxed">
          <span>My </span>
          <HighlightingText
            text="passion for technology"
            className="text-5xl leading-relaxed"
          />
          <span> is matched only by my</span>
          <HighlightingText
            text="ambition"
            className="text-5xl leading-relaxed"
          />
          <span> as a </span>
          <HighlightingText
            text="Full Stack"
            className="text-5xl leading-relaxed"
          />
          <span className="break-after-all">Developer seeking out create </span>
          <HighlightingText
            text="truly remarkable"
            className="text-5xl leading-relaxed"
          />
          <span>solutions.</span>
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
          type: "spring",
          damping: 8,
          bounce: 1.5,
          duration: 0.5,
        }}>
        <div className="my-64 flex max-w-5xl flex-wrap gap-3 pl-6 text-5xl leading-relaxed">
          I enjoy tackling{" "}
          <HighlightingText
            text="exciting"
            className="text-5xl leading-relaxed"
          />{" "}
          and{" "}
          <HighlightingText
            text="varied"
            className="text-5xl leading-relaxed"
          />{" "}
          projects.
        </div>
      </motion.div>
    </>
  );
}

function ShowcaseSection() {
  return (
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
          scale: 0.8,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          delay: 0.2,
          duration: 1.5,
        }}>
        <h1 className="w-full bg-gradient-to-r from-purple-400 to-pink-800 bg-clip-text pt-0 text-center text-5xl font-extrabold text-transparent md:text-7xl lg:text-9xl">
          The Showcase
        </h1>
      </motion.div>

      <div className="mx-auto flex w-fit flex-col items-center">
        <EverplastCard />
      </div>
    </motion.div>
  );
}
function SecondaryTextSection() {
  return (
    <motion.div
      initial={{
        scale: 0.6,
      }}
      whileInView={{
        scale: 1,
      }}
      transition={{
        type: "spring",
        duration: 1,
        damping: 12,
      }}>
      <div className="mt-56 mb-20 flex flex-col gap-14 pl-4 text-gray-500">
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            delay: 0.1,
            duration: 0.5,
          }}>
          <h2 className="text-7xl">
            <span className="text-white">Driven</span> by curiosity
          </h2>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            delay: 0.15,
            duration: 0.5,
          }}>
          <h2>
            <span className="text-white">Motivated</span> by progress
          </h2>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            delay: 0.2,
            duration: 0.5,
          }}>
          <h2 className="text-7xl">
            Embracing <span className="text-white">feedback</span>
          </h2>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            delay: 0.25,
            duration: 0.5,
          }}>
          <h2>
            Committed to <span className="text-white">learning</span>
          </h2>
        </motion.div>
      </div>
    </motion.div>
  );
}
