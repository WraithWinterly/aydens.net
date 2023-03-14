import Head from "next/head";
import { motion } from "framer-motion";

import PageContent from "@/components/ui/pageContent";
import ParticlesBG from "@/components/particlesBg";
import HighlightingText from "@/components/ui/highlightingText";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ayden{"'"}s Site</title>
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
                      animate={{
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
                      animate={{
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
              rotate: -5,
              scale: 0.75,
            }}
            whileInView={{
              rotate: 0,
              scale: 1,
            }}
            transition={{
              bounce: 0.5,
              duration: 0.5,
            }}>
            <div className="flex max-w-5xl flex-wrap gap-3 pl-6 text-5xl leading-relaxed">
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
              rotate: -4,
              scale: 0.9,
            }}
            whileInView={{
              rotate: 0,
              scale: 1,
            }}
            transition={{
              bounce: 1.5,
              duration: 0.5,
            }}>
            <div className="my-32 flex max-w-5xl flex-wrap gap-3 pl-6 text-5xl leading-relaxed">
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
          <h1 className="bg-gradient-to-r from-purple-400 to-pink-800 bg-clip-text text-9xl font-extrabold text-transparent">
            The Showcase
          </h1>
          <p className="pb-[4000px]"></p>

          <ParticlesBG />
        </PageContent>
      </main>
    </>
  );
}
