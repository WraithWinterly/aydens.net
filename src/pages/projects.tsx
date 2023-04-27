import { useId } from "react";
import Head from "next/head";
import ProjectCard from "@/components/ui/projectCard";
import PageSection from "@/components/layout/page-section";
import ContactSection from "@/components/contact";

import AnimationTextShowUp from "@/components/animations/animation-text-showup";
import AnimationTextColor from "@/components/animations/animation-text-color";
import AnimationFadeIn from "@/components/animations/animation-fadein";
import { AllProjects } from "@/utils/projects";

export default function Projects() {
  const id = useId();
  return (
    <>
      <Head>
        <title>Games - Ayden&#39;s Site</title>
        <meta
          name="description"
          content="View games such as Everplast, Blockhit and WraithFPS."
        />
      </Head>
      <PageSection color="blue">
        <AnimationTextColor from="#ffff" to="#a855f7">
          <AnimationFadeIn>
            <h1 className="pt-24 text-center">All Projects</h1>
          </AnimationFadeIn>
        </AnimationTextColor>
        <AnimationTextShowUp>
          <div className="mx-auto grid w-full grid-cols-1 gap-12 py-8 pb-32 md:grid-cols-2 lg:grid-cols-3">
            {AllProjects.map((p, i) => (
              <ProjectCard project={p} key={`${id}-${i}`} />
            ))}
          </div>
        </AnimationTextShowUp>
      </PageSection>
      <ContactSection />
    </>
  );
}
