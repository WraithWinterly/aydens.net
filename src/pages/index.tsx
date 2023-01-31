import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ayden&#39;s Site</title>
        <meta
          name="description"
          content="Aydens's Porfolio Website created with Next.Js! Includes games, projects, and more!"
        />
        <meta
          name="keywords"
          content="ayden, ayden springer, wraith, wraithwinterly, next, javascript, html, css, portfolio"
        />
        <meta name="robots" content="index,follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Ayden's Porfolio" />
        <meta
          property="twitter:description"
          content="Aydens's Porfolio Website created with Next.Js! Includes games, projects, and more!"
        />
        <meta
          property="twitter:image"
          content="https://aydens.net/github-pfp.png"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://wraithwinterly.github.io" />
        <meta property="og:title" content="Ayden's Website" />
        <meta
          property="og:description"
          content="Ayden Springer's Porfolio Website"
        />
        <meta property="og:image" content="https://aydens.net/github-pfp.png" />

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
