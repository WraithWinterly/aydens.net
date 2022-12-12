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

      <footer className="flex justify-center border-t-[1px] border-solid border-white py-4">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          Powered by{" "}
          <span className="h-16 w-12 dark:invert dark:filter">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  );
}
