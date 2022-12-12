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

      <main className="flex flex-col items-center min-h-screen h-full">
        <h1>Welcome to Ayden's Site!</h1>
        <p>First commit.</p>
      </main>

      <footer className="flex justify-center py-4 border-t-[1px] border-solid border-white">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className="h-16 w-12 dark:filter dark:invert">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  );
}
