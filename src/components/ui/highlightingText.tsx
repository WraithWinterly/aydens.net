import useOnScreen from "@/hooks/useOnScreen";
import { useRef } from "react";

export default function HighlightingText({
  text,
  twClass,
}: {
  text: string;
  twClass?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(ref, -100);

  return (
    <p className={twClass || ""}>
      <span
        ref={ref}
        className={`text-highlight ${onScreen && "text-highlight-active"}`}>
        {text}
      </span>{" "}
    </p>
  );
}
