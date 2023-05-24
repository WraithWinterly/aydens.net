import { useId } from "react";
import Head from "next/head";
import ProjectCard from "@/components/ui/projectCard";
import PageSection from "@/components/layout/page-section";
import ContactSection from "@/components/contact";

import AnimationTextShowUp from "@/components/animations/animation-text-showup";
import AnimationTextColor from "@/components/animations/animation-text-color";
import AnimationFadeIn from "@/components/animations/animation-fadein";
import { AllProjects } from "@/utils/projectsList";

import { motion } from "framer-motion";

export default function Projects() {
  const id = useId();
  return (
    <>
      <Head>
        <title>Prrojects - Ayden Springer | Portfolio</title>
        <meta
          name="description"
          content="Showcase of my latest works such as Church Chats, Mothora, as well as web3 and games by Ayden Springer."
        />
      </Head>
      <PageSection color="blue">
        <AnimationTextColor from="#ffff" to="#a855f7">
          <AnimationFadeIn>
            <h1 className="pt-6 text-center">All Projects</h1>
          </AnimationFadeIn>
        </AnimationTextColor>
        <AnimationTextShowUp>
          <div className="mx-auto grid w-full grid-cols-1 gap-12 py-8 pb-32 md:grid-cols-2 lg:grid-cols-3">
            {AllProjects.map((p, i) => (
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: i * 0.15 + 0.17,
                }}
                key={`${id}-${i}`}>
                <ProjectCard project={p} />
              </motion.div>
            ))}
          </div>
        </AnimationTextShowUp>
      </PageSection>
      <ContactSection />
    </>
  );
}
