import React from "react";

export function Footer() {
  return (
    <section className="w-full bg-[#141414]">
      <p className="pb-5 pt-20 text-center text-xs text-muted-foreground">
        © Copyright {new Date().getFullYear()} - Designed and built by Pratik
        Samarth.
      </p>
    </section>
  );
}
