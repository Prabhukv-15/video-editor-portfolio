"use client";

import { useState } from "react";
import { site } from "@/lib/content";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#vertical", label: "Vertical" },
  { href: "#ai", label: "AI" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-white/5 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <a href="#top" className="label text-paper">
          {site.monogram}
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="label text-paper-dim transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          {site.available ? (
            <a href="#contact" className="label hidden items-center gap-2 text-accent sm:flex">
              <span className="rec-dot inline-block h-1.5 w-1.5 rounded-full bg-accent" />
              Available
            </a>
          ) : null}
          <button
            type="button"
            className="label md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label="Menu"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>
      {open ? (
        <div className="border-t border-white/10 bg-ink px-5 py-6 md:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="display text-3xl"
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
