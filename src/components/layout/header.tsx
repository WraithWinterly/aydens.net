import { Dispatch, SetStateAction, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { BiArrowBack } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import Modal from "../ui/modal";
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
      <header className="fixed flex w-full justify-between px-4 py-1 pt-4 text-center lg:px-8">
        <div className="flex w-full items-center justify-between gap-4">
          <div className="items-center">
            <a href={`https://${process.env.NEXT_PUBLIC_URL}`}>
              <span className="flex w-full gap-2 rounded-xl bg-black/30 py-1 px-2 pb-3 pt-2.5 pl-6 pr-7 text-2xl text-slate-200 backdrop-blur-sm transition-colors hover:text-accent">
                <MdOutlineDeveloperBoard size={30} className="pt-1" />
                <span className="mb-0">{process.env.NEXT_PUBLIC_URL}</span>
              </span>
            </a>
          </div>
          <div className="flex shrink-0 items-center gap-2 rounded-xl bg-black/30 py-2 px-4 backdrop-blur-md">
            {router.pathname != "/" && (
              <Link
                href={"/"}
                className="animate-in fade-in duration-300 md:slide-in-from-right-10">
                <div className="py-2 pr-2 text-2xl text-white">
                  <BiArrowBack size={30} />
                </div>
              </Link>
            )}

            <div className="hidden shrink-0 items-center gap-2 py-1 md:flex">
              <Links setMenuOpen={setMenuOpen} />
            </div>
            <div className="flex md:hidden">
              <button className="header-link" onClick={() => setMenuOpen(true)}>
                <RxHamburgerMenu
                  size={30}
                  className="transition-colors hover:text-accent"
                />
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
      <HeaderLink text="About" link="/about" setMenuOpen={setMenuOpen} />
      <HeaderLink text="Projects" link="/projects" setMenuOpen={setMenuOpen} />
      <HeaderLink text="Contact" link="/contact" setMenuOpen={setMenuOpen} />
    </>
  );
}

function HeaderLink({
  text,
  link,
  setMenuOpen,
}: {
  text: string;
  link: string;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <Link href={link}>
      <span
        className="w-full cursor-pointer rounded-full px-2 py-2 text-2xl text-slate-200 transition-colors hover:text-accent"
        onClick={() => setMenuOpen(false)}>
        {text}
      </span>
    </Link>
  );
}