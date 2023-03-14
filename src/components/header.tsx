import { Dispatch, SetStateAction, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { BiArrowBack } from "react-icons/bi";
import { IoWarningOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import Modal from "./ui/modal";
import { MdOutlineDeveloperBoard } from "react-icons/md";

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
      <header className="absolute flex w-full justify-between py-4 px-4 text-center lg:px-8 ">
        <div className="flex w-full items-center justify-between gap-4">
          <div className="items-center">
            <a href={`https://${process.env.NEXT_PUBLIC_URL}`}>
              <button className="flex w-full gap-2 rounded-2xl bg-blue-600/30 pb-3 pt-2.5 pl-6 pr-7 text-2xl text-slate-200 transition-colors hover:bg-blue-600/80 hover:text-white">
                <MdOutlineDeveloperBoard size={30} className="pt-1" />
                <span className="mb-0">{process.env.NEXT_PUBLIC_URL}</span>
              </button>
            </a>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            {router.pathname != "/" && (
              <Link
                href={"/"}
                className="animate-in fade-in duration-300 md:slide-in-from-right-10">
                <button className="header-link">
                  <BiArrowBack size={30} />
                </button>
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
