import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About - Ayden&#39;s Site</title>
        <meta name="description" content="About page for Ayden's site." />
      </Head>
      <div className="w-fit animate-in fade-in duration-500 md:max-w-4xl">
        <h1 className="w-full text-center animate-in duration-500 md:slide-in-from-top-5">
          About
        </h1>
        <p className="px-2 text-center animate-in duration-500 md:slide-in-from-left-5">
          I am specialized in web and game development with over 2 years of
          experience as a game developer, using engines such as Unreal Engine,
          Godot and Unity, having released my solo developed first game{" "}
          <a href="https://store.steampowered.com/app/1896630/Everplast/">
            &quot;Everplast&quot; on Steam{" "}
          </a>{" "}
          which counts as my biggest achievement to the date. My first
          experience in web3 was with{" "}
          <a href="https://app.pigeondao.org/">Pigeon DAO</a>, where I was as an
          advisor and web3 developer. I now moved to work on Mothora to build
          the game systems and game web app user experience.
        </p>
      </div>
    </>
  );
}
