import Link from "next/link";
import Router from "next/router";

export default function Header() {
  return (
    <>
      <header className="relative flex w-full justify-between py-4 px-8 text-center backdrop-blur-md">
        <div className="flex w-full items-center justify-between gap-4">
          <div className="items-center">
            <a
              href={process.env.NEXT_PUBLIC_URL}
              className="rounded-full bg-blue-600/30 py-3 px-8 pt-2 text-3xl text-slate-200 transition-colors hover:bg-blue-600/80 hover:text-white">
              {process.env.NEXT_PUBLIC_URL}
            </a>
          </div>
          <ul className="flex gap-2">
            <li className="header-link" onClick={() => Router.push("/about")}>
              About
            </li>
            <li className="header-link" onClick={() => Router.push("/contact")}>
              Contact
            </li>
            <li
              className="header-link"
              onClick={() => Router.push("/projects")}>
              Projects
            </li>
            <li className="header-link" onClick={() => Router.push("/games")}>
              Games
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
