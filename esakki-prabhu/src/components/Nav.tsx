"use client";

import { useState } from "react";
import { site } from "@/lib/content";

const links = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-50">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-5 mix-blend-difference sm:px-8 lg:px-12">
        <a href="#top" className="timecode text-[13px] tracking-[0.28em]">
          {site.monogram}
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="timecode text-[10px] tracking-[0.22em] text-paper/80 transition-colors hover:text-gold-bright"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          {site.available ? (
            <a
              href="#contact"
              className="timecode hidden items-center gap-2 text-[10px] tracking-[0.22em] text-gold sm:flex"
            >
              <span className="rec-dot inline-block h-1.5 w-1.5 rounded-full bg-gold" />
              Available
            </a>
          ) : null}
          <button
            type="button"
            className="timecode text-[10px] tracking-[0.22em] md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label="Menu"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>
      {open ? (
        <div className="border-t border-white/15 bg-black/80 px-5 py-6 backdrop-blur-md md:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="display text-4xl"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
