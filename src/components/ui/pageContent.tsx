import { ReactNode } from "react";

export default function PageContent({ children }: { children: ReactNode }) {
  return <div className="w-full px-1 pb-12 pt-20 md:px-4">{children}</div>;
}
