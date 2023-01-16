import { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";

interface LayoutProps {
  children: ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <div className="relative flex flex-col items-center bg-gradient-to-br from-blue-900 to-pink-900">
      <Header />
      <div className="h-full min-h-screen">{children}</div>
      <Footer />
    </div>
  );
}
