"use client";

import { useEffect, useState } from "react";
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
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#top");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      const ids = ["top", "about", "work", "vertical", "ai", "services", "contact"];
      let current = "#top";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= 120) current = `#${id}`;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="pointer-events-none fixed top-0 right-0 left-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div
        className={`nav-shell pointer-events-auto mx-auto flex max-w-[1400px] items-center justify-between gap-3 rounded-2xl border px-4 py-3 transition-all duration-400 sm:px-5 lg:px-6 ${
          scrolled || open
            ? "border-white/12 bg-black/55 shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl"
            : "border-white/8 bg-black/25 shadow-[0_8px_30px_rgba(0,0,0,0.2)] backdrop-blur-md"
        }`}
      >
        <a
          href="#top"
          className="nav-logo label group relative text-paper"
          onClick={() => setOpen(false)}
        >
          <span className="relative z-10">{site.monogram}</span>
          <span className="absolute -inset-2 rounded-lg bg-accent/0 transition-colors group-hover:bg-accent/15" />
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const isActive = active === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link label relative rounded-full px-3.5 py-2 transition-colors ${
                  isActive ? "text-white" : "text-paper-dim hover:text-white"
                }`}
              >
                {isActive ? (
                  <span className="nav-link-pill absolute inset-0 rounded-full bg-white/10" aria-hidden />
                ) : null}
                <span className="relative z-10">{link.label}</span>
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          {site.available ? (
            <a
              href="#contact"
              className="label hidden items-center gap-2 rounded-full border border-accent/35 bg-accent/10 px-3 py-1.5 text-accent sm:inline-flex"
            >
              <span className="rec-dot inline-block h-1.5 w-1.5 rounded-full bg-accent" />
              Available
            </a>
          ) : null}

          <button
            type="button"
            className="label relative flex h-9 w-9 items-center justify-center rounded-full border border-white/15 md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label="Menu"
          >
            <span className="sr-only">{open ? "Close" : "Menu"}</span>
            <span className={`nav-burger ${open ? "is-open" : ""}`} aria-hidden>
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div className="pointer-events-auto mx-auto mt-2 max-w-[1400px] overflow-hidden rounded-2xl border border-white/12 bg-black/80 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.55)] backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className="display rounded-xl px-2 py-3 text-3xl transition-colors hover:bg-white/5 hover:text-accent"
                style={{ animationDelay: `${index * 40}ms` }}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          {site.available ? (
            <a
              href="#contact"
              className="label mt-4 inline-flex items-center gap-2 rounded-full border border-accent/35 bg-accent/10 px-3 py-2 text-accent"
              onClick={() => setOpen(false)}
            >
              <span className="rec-dot inline-block h-1.5 w-1.5 rounded-full bg-accent" />
              Available · Hire me
            </a>
          ) : null}
        </div>
      ) : null}
    </header>
  );
}
