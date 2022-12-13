import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ayden's Site</title>
        <meta name="description" content="Ayden's Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex h-full min-h-screen flex-col items-center">
        <h1>Welcome to Ayden's Site!</h1>
        <p>First commit.</p>
      </main>
    </>
  );
}
