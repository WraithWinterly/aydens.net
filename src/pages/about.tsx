import AnimationBounceHover from "@/components/animations/animation-bounce-hover";
import AnimationTextColor from "@/components/animations/animation-text-color";
import HeroLayout from "@/components/layout/hero-layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import aydenSpringer from "@assets/images/ayden-springer.jpeg";
import AnimationHeroTwist from "@/components/animations/animation-hero-twist";
import PageSection from "@/components/layout/page-section";
import AnimationFadeIn from "@/components/animations/animation-fadein";

export default function About() {
  return (
    <>
      <Head>
        <title>About - Ayden Springer | Portfolio</title>
        <meta
          name="description"
          content="Discover who Ayden Springer is, and explore his programming journey with years of experience. Ayden has competed and won hackathons and bounties hosted by industry leaders and founders. He also released an indie game on Steam in 2022."
        />
      </Head>
      <AboutSection color="blue" />
    </>
  );
}

export function AboutSection({ color }: { color: "blue" | "purple" }) {
  return (
    <PageSection color={color} center>
      <AnimationFadeIn>
        <div className="flex flex-col gap-2 py-8 md:px-4">
          <h2 className="mt-10">Who am I?</h2>
          <p className="max-w-2xl text-gray-200">
            Why not learn about me in simple terms, instead of reading AI
            generated nonsense about striving to hone my development skills for
            quality innovations. I am a real person that means business.
          </p>
          <div className="leading-10 text-gray-200">
            <AnimationHeroTwist>
              <p className="py-12 text-2xl leading-10">
                <span>- I am a programmer with over </span>
                <span className="text-accent">4 years of experience</span> with
                a variety of fields and technologies.
                <br className="md:hidden" />
                <br />
                <span>- I have </span>
                <span className="text-accent">competed and won </span>
                <span>in hackathons and bounties at hackgpt.tech with </span>
                <span className="text-accent">industry leaders</span>{" "}
                <span>and </span>
                <span className="text-accent">founders.</span>
                <br className="md:hidden" />
                <br />
                <span>- I developed an </span>
                <span className="text-accent">indie game </span>
                <span>as a </span>
                <span className="text-accent">solo developer</span>
                <span> and released it on </span>
                <span className="text-accent">Steam in 2022.</span>
                <br className="md:hidden" />
                <br />
                <span>
                  - Currently, I am a full stack developer, working most
                  commonly with{" "}
                </span>
                <b>
                  <i> Next.js, React, Tailwind, Prisma, tRPC.</i>
                </b>
                <br className="md:hidden" />
                <br />
                <span>- I also have development experience with </span>
                <span className="text-accent">web3 and Solidity</span>
                <span>, demonstrated by </span>
                <Link
                  href="/projects?proj=mothora"
                  className="cursor-pointer hover:underline">
                  nft-storage-contracts
                </Link>
                <span> , or </span>
                <Link
                  href="/projects?proj=openseal"
                  className="cursor-pointer hover:underline">
                  openseal
                </Link>
                <span>.</span>
              </p>
            </AnimationHeroTwist>

            <p className="max-w-2xl pb-12 leading-10">
              When running into a problem, I don't know when to stop. I do not
              give up, I find the solution to the problem. This is business,
              let's build even when it's hard.
            </p>
          </div>
        </div>
      </AnimationFadeIn>
    </PageSection>
  );
}
