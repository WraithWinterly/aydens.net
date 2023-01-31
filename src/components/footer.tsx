import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative flex w-full justify-center py-4 dark:border-slate-500">
      <div className="flex items-center gap-4">
        <a href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
          <span className="text-xl">{process.env.NEXT_PUBLIC_URL}</span>
        </a>
        <p>&bull;</p>
        <p>&copy;2022-{new Date().getFullYear()} &nbsp;Ayden Springer</p>
        <p>&bull;</p>
        <a
          href="https://github.com/WraithWinterly/aydens.net"
          className="text-lg">
          View Source
        </a>
      </div>
    </footer>
  );
}
