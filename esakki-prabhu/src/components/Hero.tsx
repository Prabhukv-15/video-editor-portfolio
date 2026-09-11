import { site } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col justify-end overflow-hidden px-5 pb-16 pt-28 sm:px-8 lg:px-12 lg:pb-24"
    >
      <div className="pointer-events-none absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={site.heroImage}
          alt=""
          className="h-full w-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-ink/70" />
        <div className="hero-grid absolute inset-0 opacity-60" />
        <div className="hero-glow absolute inset-0" />
        <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/40 to-ink/30" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px]">
        <p className="rise label text-accent">{site.role}</p>
        <h1 className="rise rise-2 display mt-5 text-[16vw] leading-[0.85] sm:text-[12vw] lg:text-[9rem]">
          Portfolio
        </h1>
        <p className="rise rise-3 mt-4 max-w-2xl text-lg text-paper-dim sm:text-xl">
          {site.name} · {site.role}
        </p>
        <p className="rise rise-3 mt-4 max-w-xl text-base leading-7 text-paper-dim">
          {site.summary}
        </p>
        <div className="rise rise-4 mt-10 flex flex-wrap gap-3">
          <a
            href="#work"
            className="label inline-flex items-center bg-accent px-6 py-3 text-white transition-colors hover:bg-accent-soft"
          >
            View work
          </a>
          <a
            href="#contact"
            className="label inline-flex items-center border border-white/20 px-6 py-3 transition-colors hover:border-accent hover:text-accent"
          >
            Hire me
          </a>
        </div>
        <p className="label mt-14 text-paper-dim">{site.location}</p>
      </div>
    </section>
  );
}
