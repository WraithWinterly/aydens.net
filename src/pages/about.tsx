import AnimationBounceHover from "@/components/animations/animation-bounce-hover";
import AnimationTextColor from "@/components/animations/animation-text-color";
import HeroLayout from "@/components/layout/hero-layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import aydenSpringer from "@assets/images/ayden-springer.png";

export default function About() {
  return (
    <>
      <Head>
        <title>About - Ayden&#39;s Site</title>
        <meta name="description" content="About page for Ayden's site." />
      </Head>
      <HeroLayout>
        <div className="flex flex-col">
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

          <AnimationBounceHover>
            <Link href="/contact" className="text-white">
              <button className="mt-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-900 px-12 py-4">
                Contact Now!
              </button>
            </Link>
          </AnimationBounceHover>
        </div>
      </HeroLayout>
      <Image
        src={aydenSpringer.src}
        height={1200}
        width={600}
        alt="Ayden Springer"
        className="object-contain"></Image>
    </>
  );
}
