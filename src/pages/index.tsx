import Head from "next/head";

import HeroLayout from "@/components/layout/hero-layout";
import ContactSection from "@/components/contact";
import HighlightingText from "@/components/ui/highlightingText";

import PageSection from "@/components/layout/page-section";
import AnimationHeroTwist from "@/components/animations/animation-hero-twist";
import AnimationTextColor from "@/components/animations/animation-text-color";
import AnimationBounceHover from "@/components/animations/animation-bounce-hover";
import AnimationTextShowUp from "@/components/animations/animation-text-showup";
import AnimationFadeIn from "@/components/animations/animation-fadein";
import ProjectCard from "@/components/ui/projectCard";
import Link from "next/link";
import { useId } from "react";

import { TopThreeProjects } from "@/utils/projects";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ayden&apos;s Site</title>
        <meta
          name="description"
          content="I am specialized in web development and web3 technologies. I released Everplast on Steam and participated in projects like Pigeon DAO, Mothora, and more. © Ayden Springer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroSection />
      <HighlightingTextSection />
      <PortfolioShowcase />
      <SecondaryTextSection />
      <ContactSection />
    </>
  );
}

function HeroSection() {
  return (
    <>
      <HeroLayout>
        <div className="w-full flex-col pt-8">
          <div className="flex w-fit flex-col flex-wrap px-8 text-left fade-in duration-700 md:leading-relaxed md:animate-in md:slide-in-from-top-10">
            <AnimationHeroTwist>
              <p className="pl-1 text-2xl text-gray-400">I am Ayden,</p>
              <h1 className="w-full py-2 text-5xl md:max-w-2xl md:py-4 md:text-7xl lg:max-w-4xl">
                <AnimationTextColor from="#ffffff" to="#a855f7">
                  <span>Quality </span>
                </AnimationTextColor>

                <span> and </span>
                <AnimationTextColor from="#ffffff" to="#a855f7">
                  <span>dedication</span>
                </AnimationTextColor>

                <span> are my </span>
                <AnimationTextColor from="#ffffff" to="#56E2D6">
                  <span>excellence</span>
                </AnimationTextColor>
              </h1>

              <p className="pl-1 text-3xl text-gray-400 animate-in fade-in duration-1000">
                With integrity, exceptional results are achieved.
              </p>
              <div className="w-fit">
                <AnimationBounceHover>
                  <a
                    href="https://drive.google.com/file/d/1U2CQvKHGjSTPWMyYKGUyUxp31aZxFBEo/view"
                    className="text-white"
                    target="_blank"
                    rel="noreferrer">
                    <button className="mt-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-900 px-12 py-4">
                      View Resume
                    </button>
                  </a>
                </AnimationBounceHover>
              </div>
            </AnimationHeroTwist>
          </div>
        </div>
      </HeroLayout>
    </>
  );
}

function HighlightingTextSection() {
  return (
    <PageSection color="blue" center={true}>
      <AnimationFadeIn>
        <div className="w-full max-w-5xl break-after-all text-4xl leading-relaxed md:text-5xl">
          <span>My </span>
          <HighlightingText
            text="passion for technology"
            className="text-4xl leading-relaxed md:text-5xl md:leading-relaxed"
          />
          <span> is presented by my </span>
          <HighlightingText
            text="ambition"
            className="text-4xl md:text-5xl md:leading-relaxed"
          />
          <span> as a </span>
          <HighlightingText
            text="Full Stack Developer"
            className="text-4xl md:text-5xl md:leading-relaxed"
          />
          <span className="break-after-all">who seeks to create </span>
          <HighlightingText
            text="truly remarkable"
            className="text-4xl md:text-5xl md:leading-relaxed"
          />
          <span>products.</span>
        </div>
      </AnimationFadeIn>
      <br />
      <br />
      <br />
      <AnimationFadeIn>
        <span className="max-w-5xl text-4xl leading-relaxed md:text-5xl md:leading-relaxed">
          I enjoy tackling{" "}
          <HighlightingText
            text="exciting"
            className="text-4xl md:text-5xl md:leading-relaxed"
          />{" "}
          and{" "}
          <HighlightingText
            text="varied"
            className="text-4xl md:text-5xl md:leading-relaxed"
          />{" "}
          projects.
        </span>
      </AnimationFadeIn>
    </PageSection>
  );
}

function PortfolioShowcase() {
  const id = useId();
  return (
    <PageSection color="purple">
      <AnimationTextShowUp>
        <div className="md:py-2">
          <h1 className="w-full bg-gradient-to-r from-purple-400 to-pink-800 bg-clip-text text-center text-6xl font-extrabold text-transparent md:text-7xl lg:text-7xl">
            Portfolio Showcase
          </h1>
          <div className="mx-auto grid w-full grid-cols-1 gap-12 py-8 md:grid-cols-2 lg:grid-cols-3">
            {TopThreeProjects.map((p, i) => (
              <ProjectCard project={p} purple key={`${id}-${i}`} />
            ))}
            <div className="m-auto md:inline-block lg:hidden">
              <Link href="/projects">
                <div className="btn rounded-full bg-gradient-to-br from-purple-400 to-purple-900 px-12 py-4">
                  View More!
                </div>
              </Link>
            </div>
          </div>
          <div className="mt-6 hidden w-full justify-center lg:flex">
            <Link href="/projects">
              <div className="btn rounded-full bg-gradient-to-br from-purple-400 to-purple-900 px-12 py-4 text-xl">
                View More!
              </div>
            </Link>
          </div>
        </div>
      </AnimationTextShowUp>
    </PageSection>
  );
}
function SecondaryTextSection() {
  return (
    <PageSection color="blue" center={true}>
      <div className="flex flex-col gap-14 pl-4 text-[#5293AF]">
        <AnimationFadeIn>
          <h2 className="md:text-7xl">
            Driven by <span className="text-white">curiosity</span>
          </h2>
        </AnimationFadeIn>
        <AnimationFadeIn>
          <h2>
            Motivated by <span className="text-white">progress</span>
          </h2>
        </AnimationFadeIn>

        <AnimationFadeIn>
          <h2 className="md:text-7xl">
            Embracing <span className="text-white">feedback</span>
          </h2>
        </AnimationFadeIn>
        <AnimationFadeIn>
          <h2>
            Committed to <span className="text-white">learning</span>
          </h2>
        </AnimationFadeIn>
      </div>
    </PageSection>
  );
}
