import Image from "next/image";
import { SiGithub, SiLinkedin, SiTwitter } from "react-icons/si";
import { IoRefreshCircleOutline } from "react-icons/io5";
import Link from "next/link";
import Head from "next/head";
import ContactSection from "@/components/contact";

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
      <ContactSection />
    </>
  );
}
