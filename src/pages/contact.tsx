import Image from "next/image";
import { SiGithub, SiLinkedin, SiTwitter } from "react-icons/si";
import { IoRefreshCircleOutline } from "react-icons/io5";
import Link from "next/link";
import Head from "next/head";
import ContactSection from "@/components/contact";
import PageContent from "@/components/ui/pageContent";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - Ayden&#39;s Site</title>
        <meta
          name="description"
          content="The contact page for Ayden, such as LinkedIn and Github."
        />
      </Head>
      <div className="w-full">
        <PageContent>
          <div className="w-full px-2 text-center">
            <ContactSection />
          </div>
        </PageContent>
      </div>
    </>
  );
}
