import { projects, site } from "@/lib/content";
import { CinematicStill } from "@/components/CinematicStill";
import { Timecode } from "@/components/Timecode";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col justify-end overflow-hidden px-5 pt-28 pb-16 sm:px-8 lg:px-12"
    >
      <div className="pointer-events-none absolute inset-0">
        <CinematicStill id="short" className="h-full w-full opacity-70" />
        <div className="absolute inset-0 bg-linear-to-b from-ink/40 via-ink/55 to-ink" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px]">
        <div className="mb-10 flex items-center justify-between gap-4 text-paper-dim">
          <div className="flex items-center gap-3">
            <span className="rec-dot inline-block h-2 w-2 rounded-full bg-danger" />
            <span className="timecode text-[11px] tracking-[0.24em]">REC</span>
            <Timecode />
          </div>
          <p className="timecode hidden text-[10px] tracking-[0.22em] sm:block">
            {site.location}
          </p>
        </div>

        <p className="rise timecode text-[11px] tracking-[0.32em] text-gold">
          {site.role}
        </p>
        <h1 className="rise rise-2 display mt-5 text-[18vw] sm:text-[14vw] lg:text-[10.5rem]">
          <span className="block">{site.firstName}</span>
          <span className="block italic text-gold-bright">{site.lastName}</span>
        </h1>

        <div className="rise rise-3 mt-8 flex max-w-3xl flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="tamil text-lg text-gold-bright sm:text-xl">{site.tamilLine}</p>
            <p className="mt-3 max-w-xl text-base leading-7 text-paper-dim sm:text-lg">
              {site.summary}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="#work"
              className="timecode inline-flex items-center border border-gold/40 bg-gold px-5 py-3 text-[11px] tracking-[0.22em] text-ink transition-colors hover:bg-gold-bright"
            >
              Selected work
            </a>
            <a
              href="#contact"
              className="timecode inline-flex items-center border border-paper/20 px-5 py-3 text-[11px] tracking-[0.22em] hover:border-gold hover:text-gold"
            >
              Book a cut
            </a>
          </div>
        </div>

        <ul className="rise rise-4 mt-14 hidden gap-3 md:grid md:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <li key={project.id} className="relative aspect-[2.39/1] overflow-hidden border border-white/10">
              <CinematicStill id={project.id} className="h-full w-full" title={project.title} />
              <span className="absolute right-3 bottom-3 timecode text-[10px] tracking-[0.2em] text-white">
                {project.number} {project.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
