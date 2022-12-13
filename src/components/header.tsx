export default function Header() {
  return (
    <>
      <header className="relative flex w-full justify-between bg-slate-200 bg-opacity-50 py-4 px-8 text-center shadow-sm backdrop-blur-md dark:bg-black">
        <div className="flex w-full items-center justify-between gap-4">
          <ul className="flex gap-4">
            <li className="cursor-pointer text-slate-500 transition-colors hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-300">
              About
            </li>
            <li className="cursor-pointer text-slate-500 transition-colors hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-300">
              Contact
            </li>
          </ul>

          <div className="absolute-center items-center">
            <a href={`https://${process.env.NEXT_PUBLIC_URL}`}>
              {process.env.NEXT_PUBLIC_URL}
            </a>
          </div>

          <ul className="flex gap-4">
            <li className="cursor-pointer text-slate-500 transition-colors hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-300">
              Projects
            </li>
            <li className="cursor-pointer text-slate-500 transition-colors hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-300">
              Games
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
