import Link from "next/link";
import Router from "next/router";

export default function Header() {
  return (
    <>
      <header className="relative flex w-full justify-between bg-slate-200 bg-opacity-50 py-4 px-8 text-center shadow-sm backdrop-blur-md dark:bg-black">
        <div className="flex w-full items-center justify-between gap-4">
          <ul className="flex gap-6">
            <li className="header-link" onClick={() => Router.push("/about")}>
              About
            </li>
            <li className="header-link" onClick={() => Router.push("/contact")}>
              Contact
            </li>
          </ul>

          <div className="absolute-center items-center">
            <Link href={`/`}>{process.env.NEXT_PUBLIC_URL}</Link>
          </div>

          <ul className="flex gap-6">
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
