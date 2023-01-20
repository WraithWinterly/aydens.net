import Link from "next/link";
import { useRouter } from "next/router";
import { BiArrowBack } from "react-icons/bi";
import { IoWarningOutline } from "react-icons/io5";

export default function Header() {
  const router = useRouter();
  return (
    <>
      <div className="flex w-full items-center justify-center gap-2 text-center text-2xl">
        <IoWarningOutline size={20} />{" "}
        <span>This website is under construction. </span>
        <a
          href="https://wraithwinterly.github.io"
          target="_blank"
          rel="noreferrer">
          View 2022 Website
        </a>
      </div>
      <header className="relative flex w-full justify-between py-4 px-8 text-center ">
        <div className="flex w-full items-center justify-between gap-4">
          <div className="items-center">
            <a
              href={`https://${process.env.NEXT_PUBLIC_URL}`}
              className="rounded-full bg-blue-600/30 py-3 px-8 pt-2 text-3xl text-slate-200 transition-colors hover:bg-blue-600/80 hover:text-white">
              {process.env.NEXT_PUBLIC_URL}
            </a>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            {router.pathname != "/" && (
              <Link
                href={"/"}
                className="animate-in fade-in slide-in-from-right-10 duration-300">
                <BiArrowBack
                  size={30}
                  className="header-link h-full w-full px-6"
                />
              </Link>
            )}

            <Link href={"/about"} className="header-link">
              About
            </Link>

            <Link href={"/contact"} className="header-link">
              Contact
            </Link>

            <Link href={"/projects"} className="header-link">
              Projects
            </Link>

            <Link href={"/games"} className="header-link">
              Games
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
