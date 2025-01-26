import { title } from "../data";
import { Logo } from "~/components/ui/logo";
import { GlowText } from "./glow-text";

export function Title() {
  function parseForHighlightedWords(text: string) {
    const wordsAndSpaces = text.split(/(\s+)/);

    return wordsAndSpaces.map((chunk, index) => {
      const isHighlighted = title.highlight
        .map((word) => word.toLowerCase())
        .includes(chunk.trim().toLowerCase());

      return (
        <span
          key={index}
          className={`${isHighlighted ? "text-white drop-shadow-[0px_0px_3px_white]" : ""}`}
        >
          {chunk}
        </span>
      );
    });
  }
  return (
    <div className="w-full grow basis-1">
      <p className="text-xl font-light text-muted-foreground">
        {title.entryPoint}
      </p>
      <h1 className="text-wrap text-6xl font-bold">
        {title.plainText}
        <GlowText text={title.glowText} />
      </h1>
      <div className="mb-8 text-xl font-light text-muted-foreground">
        {parseForHighlightedWords(title.subTitle)}
      </div>
    </div>
  );
}
