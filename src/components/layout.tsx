import { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";

interface LayoutProps {
  children: ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <div className="relative flex flex-col items-center bg-gradient-to-br from-white to-blue-100 dark:from-black dark:to-slate-900">
      <p className="w-full text-center dark:bg-black ">
        This website is under construction.{" "}
        <a href="https://wraithwinterly.github.io" target="_blank">
          View 2022 Website
        </a>
      </p>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
