import AnimationBounceHover from "@/components/animations/animation-bounce-hover";
import AnimationTextColor from "@/components/animations/animation-text-color";
import HeroLayout from "@/components/layout/hero-layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import aydenSpringer from "@assets/images/ayden-springer.jpeg";
import AnimationHeroTwist from "@/components/animations/animation-hero-twist";
import PageSection from "@/components/layout/page-section";

export default function About() {
  return (
    <>
      <Head>
        <title>About - Ayden&#39;s Site</title>
        <meta name="description" content="About page for Ayden's site." />
      </Head>
      <HeroLayout>
        <div className="flex w-full justify-between pl-14 pr-36">
          <div className="flex flex-col items-center justify-center">
            <AnimationHeroTwist>
              <h1>
                <span>Learn</span>{" "}
                <AnimationTextColor from="#ffffff" to="#a855f7">
                  About{" "}
                </AnimationTextColor>
                <AnimationTextColor from="#ffffff" to="#56E2D6">
                  Me
                </AnimationTextColor>
                <span>.</span>
              </h1>
            </AnimationHeroTwist>
            <div className="w-fit">
              <AnimationBounceHover>
                <Link href="/contact" className="text-white">
                  <button className="mt-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-900 px-12 py-4">
                    Contact Now!
                  </button>
                </Link>
              </AnimationBounceHover>
            </div>
          </div>
          <Image
            src={aydenSpringer.src}
            height={700}
            width={350}
            alt="Ayden Springer"
            className="object-contain"></Image>
        </div>
      </HeroLayout>
      <PageSection color="blue" center>
        <div className="flex flex-col gap-2 px-16">
          <h2 className="-mt-10">Who am I?</h2>
          <div className="leading-10">
            <p className="py-12 text-2xl leading-10">
              I am a programmer with{" "}
              <span className="text-accent">4 years of experience</span>.<br />{" "}
              I developed an <span className="text-accent">indie game</span> as
              a <span className="text-accent">solo developer</span> and released
              it on <span className="text-accent">Steam in 2022</span>.<br />{" "}
              Now, I am a full stack developer, working most commonly with{" "}
              <b>
                {" "}
                <i> Next.js, React, Tailwind, Prisma, tRPC.</i>
              </b>
              <br />I also have a good understanding of{" "}
              <span className="text-accent">web3 and Solidity</span>,
              demonstrated by the{" "}
              <a href="" className="cursor-pointer hover:underline">
                nft-storage-contracts
              </a>{" "}
              , or{" "}
              <a href="" className="cursor-pointer hover:underline">
                openseal
              </a>
              .
            </p>
            <p className="pb-12 text-2xl">
              {" "}
              I am a quick worker and I stick to my word.{" "}
            </p>
            <div className="my-4 flex flex-col gap-3">
              <i className="block text-xl">
                “You are way better than most mid-level developers I know” -
                Rocky
              </i>
              <i className="block text-xl">
                “I love seeing your 5 insane progress development skills in a
                day” - Watson
              </i>
            </div>
          </div>
        </div>
      </PageSection>
    </>
  );
}
