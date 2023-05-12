import Head from "next/head";
import ContactSection from "@/components/contact";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - Ayden Springer - Portfolio</title>
        <meta
          name="description"
          content="The contact page for Ayden, such as LinkedIn and Github."
        />
      </Head>
      <ContactSection />
    </>
  );
}
