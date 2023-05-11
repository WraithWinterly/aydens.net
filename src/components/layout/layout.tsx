import { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";

interface LayoutProps {
  children: ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="relative flex flex-col items-center">
        <div className={`relative flex h-full w-full flex-col items-center`}>
          {children}
        </div>
        <Header />
        <Footer />
      </div>
    </>
  );
}
