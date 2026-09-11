import { site } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[110svh] items-end overflow-hidden bg-[#070707] px-5 pb-16 pt-28 sm:min-h-svh sm:px-8 sm:pb-20 lg:min-h-[108svh] lg:px-14 lg:pb-24"
    >
      {/* Dot grid — slow drift */}
      <div
        className="hero-grid-drift pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.22) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden
      />

      {/* Magenta glow — breathing pulse */}
      <div
        className="hero-glow-pulse pointer-events-none absolute -top-24 -right-16 h-[55vh] w-[55vw] rounded-full opacity-90 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,45,120,0.55) 0%, rgba(255,45,85,0.2) 35%, transparent 70%)",
        }}
        aria-hidden
      />

      {/* Angled NLE interface — ken burns + drift */}
      <div
        className="pointer-events-none absolute top-[-2%] right-[-12%] bottom-[-4%] w-[88%] sm:right-[-8%] sm:w-[82%] lg:right-[-6%] lg:w-[78%]"
        aria-hidden
      >
        <div className="hero-nle-frame h-full w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={site.heroImage}
            alt=""
            className="h-full w-full scale-[1.18] object-cover object-[28%_42%] opacity-100"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#070707] via-[#070707]/15 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-t from-[#070707]/55 via-transparent to-[#070707]/10" />
        </div>
      </div>

      {/* Profile image box — right side overlay */}
      <div className="pointer-events-none absolute top-[22%] right-[4%] z-20 hidden w-[min(34vw,320px)] sm:block lg:right-[7%] lg:top-[18%]">
        <div className="relative overflow-hidden rounded-[1.4rem] border-[3px] border-white shadow-[0_20px_60px_rgba(0,0,0,0.55)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/profile-hero.jpg"
            alt={site.name}
            className="aspect-[3/4] h-auto w-full object-cover object-[50%_18%]"
          />
          <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 to-transparent px-3 pb-3 pt-10">
            <p className="text-sm font-semibold text-white">{site.name}</p>
            <p className="text-xs text-white/70">{site.role}</p>
          </div>
        </div>
      </div>

      {/* Left typography */}
      <div className="relative z-10 w-full max-w-[1400px]">
        <div className="max-w-[920px]">
          <h1 className="hero-title rise text-white">Portfolio</h1>
          <p className="rise rise-2 mt-3 text-[clamp(0.95rem,2.2vw,1.35rem)] font-medium tracking-[0.02em] text-white sm:mt-4">
            Video Editor / Colorist
          </p>
          <p className="rise rise-3 mt-5 max-w-md text-sm leading-6 text-white/55 sm:text-base">
            {site.name} · {site.location}
          </p>
          <div className="rise rise-4 mt-8 flex flex-wrap gap-3">
            <a
              href="#work"
              className="label inline-flex items-center bg-accent px-5 py-3 text-white hover:bg-accent-soft"
            >
              View work
            </a>
            <a
              href="#ai"
              className="label inline-flex items-center border border-white/25 px-5 py-3 text-white hover:border-accent hover:text-accent"
            >
              AI films
            </a>
          </div>

          {/* Mobile profile */}
          <div className="mt-10 w-44 overflow-hidden rounded-2xl border-2 border-white sm:hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/profile-hero.jpg"
              alt={site.name}
              className="aspect-[3/4] w-full object-cover object-[50%_18%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
