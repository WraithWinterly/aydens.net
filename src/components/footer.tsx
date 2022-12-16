import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex w-full justify-center border-t-[1px] border-solid border-slate-400 py-4 dark:border-slate-500">
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noreferrer">
        Powered by{" "}
        <span className="h-16 w-12 dark:invert dark:filter">
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
    </footer>
  );
}
