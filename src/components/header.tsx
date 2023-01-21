import { Dispatch, SetStateAction, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { BiArrowBack } from "react-icons/bi";
import { IoWarningOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import Modal from "./ui/modal";

export default function Header() {
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Modal isOpen={menuOpen} setIsOpen={setMenuOpen} title="Menu">
        <div className="mx-auto flex w-48 flex-col items-stretch gap-4">
          <Links setMenuOpen={setMenuOpen} />
        </div>
      </Modal>
      <div className="relative flex w-full items-center justify-center gap-2 text-center text-2xl">
        <div className="mt-2 flex flex-col rounded-full bg-black/50 px-4 py-2 md:flex-row md:gap-2">
          <div className="flex shrink-0 flex-row items-center gap-1">
            <IoWarningOutline size={20} />
            <span>This website is under construction.</span>
          </div>

          <a
            href="https://wraithwinterly.github.io"
            target="_blank"
            rel="noreferrer">
            View 2022 Website
          </a>
        </div>
      </div>
      <header className="relative flex w-full justify-between py-4 px-4 text-center lg:px-8 ">
        <div className="flex w-full items-center justify-between gap-4">
          <div className="items-center">
            <a
              href={`https://${process.env.NEXT_PUBLIC_URL}`}
              className="rounded-full bg-blue-600/30 py-4 px-6 text-2xl text-slate-200 transition-colors hover:bg-blue-600/80 hover:text-white">
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

            <div className="hidden shrink-0 items-center gap-2 md:flex">
              <Links setMenuOpen={setMenuOpen} />
            </div>
            <div className="flex md:hidden">
              <button className="header-link" onClick={() => setMenuOpen(true)}>
                <RxHamburgerMenu size={30} />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

function Links({
  setMenuOpen,
}: {
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <>
      <Link href={"/about"}>
        <button className="header-link" onClick={() => setMenuOpen(false)}>
          About
        </button>
      </Link>

      <Link href={"/contact"}>
        <button className="header-link" onClick={() => setMenuOpen(false)}>
          Contact
        </button>
      </Link>

      <Link href={"/projects"}>
        <button className="header-link" onClick={() => setMenuOpen(false)}>
          Projects
        </button>
      </Link>

      <Link href={"/games"}>
        <button className="header-link" onClick={() => setMenuOpen(false)}>
          Games
        </button>
      </Link>
    </>
  );
}
