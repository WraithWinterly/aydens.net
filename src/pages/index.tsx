import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ayden{"'"}s Site</title>
        <meta name="description" content="Ayden's Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex h-full min-h-screen flex-col items-center">
        <h1 className="w-fit px-4 text-center fade-in duration-700 md:animate-in md:slide-in-from-top-10 ">
          Welcome to Ayden{"'"}s Site!
        </h1>
        <p className="w-96 text-center font-bold animate-in fade-in duration-700 md:slide-in-from-left-80">
          A passionate, motivated web developer building accessible, stunning,
          and high quality products. Looking to solve the{" "}
        </p>
        <p className="font-bold text-sky-500 animate-in fade-in duration-700 md:slide-in-from-right-80">
          problems of Today.
        </p>
      </main>
    </>
  );
}
