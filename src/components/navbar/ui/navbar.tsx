"use client";

import Link from "next/link";
import { IoIosDesktop, IoIosSend } from "react-icons/io";
import { navBar } from "~/components/hero/data";

export function Navbar() {
  function parseForHighlightedWords(text: string) {
    const wordsAndSpaces = text.split(/(\s+)/);

    return wordsAndSpaces.map((chunk, index) => {
      const isHighlighted = navBar.highlight
        .map((word) => word.toLowerCase())
        .includes(chunk.trim().toLowerCase());

      return (
        <span
          key={index}
          className={`${isHighlighted ? "text-white drop-shadow-[0px_0px_3px_gray]" : ""}`}
        >
          {chunk}
        </span>
      );
    });
  }

  return (
    <nav className="sticky left-0 top-0 z-50 flex w-full items-center bg-[#000000ab] px-5 backdrop-blur-lg">
      <div className="m-auto flex w-full max-w-[1800px] items-center justify-between py-2">
        <Link href="/" className="inline-block p-1 text-2xl font-semibold">
          {parseForHighlightedWords(navBar.subTitle)}
        </Link>
        <div className="flex items-center gap-5">
          <Link
            className="group flex items-end gap-3 transition-all duration-300 hover:brightness-125"
            href="#projects"
          >
            <div className="flex items-center gap-2 rounded-[10px_5px_10px_5px] bg-accent px-3 py-1">
              <IoIosDesktop size={15} />
              <span className="hidden text-sm font-light sm:flex">
                Projects
              </span>
            </div>
          </Link>
          <Link
            className="group flex items-center gap-3 transition-all duration-300 hover:brightness-125"
            href="#connect"
          >
            <div className="flex items-center gap-2 rounded-[10px_5px_10px_5px] bg-accent px-3 py-1">
              <IoIosSend size={15} />
              <span className="hidden text-sm font-light sm:flex">
                Say Hello
              </span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
