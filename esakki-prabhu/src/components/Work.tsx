"use client";

import { useEffect, useState } from "react";
import { CinematicStill } from "@/components/CinematicStill";
import { type Project, featuredProject, projects, site } from "@/lib/content";

function youtubeSrc(id: string) {
  return `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`;
}

function hasPlayableMedia(project: Project) {
  return Boolean(project.videoSrc || project.youtubeId);
}

function ProjectPlayer({ project, autoPlay = false }: { project: Project; autoPlay?: boolean }) {
  if (project.videoSrc) {
    return (
      <video
        className="h-full w-full object-cover"
        src={project.videoSrc}
        poster={project.poster}
        controls
        playsInline
        preload="metadata"
        autoPlay={autoPlay}
      >
        Your browser does not support video playback.
      </video>
    );
  }

  if (project.youtubeId) {
    return (
      <iframe
        title={project.title}
        src={youtubeSrc(project.youtubeId)}
        className="h-full w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  if (project.poster) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={project.poster} alt={project.title} className="h-full w-full object-cover" />
    );
  }

  return <CinematicStill id={project.id} className="h-full w-full" title={project.title} />;
}

function ProjectCover({ project }: { project: Project }) {
  if (project.poster) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={project.poster}
        alt=""
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
      />
    );
  }

  return (
    <CinematicStill
      id={project.id}
      className="h-full w-full transition-transform duration-700 group-hover:scale-[1.04]"
      title={project.title}
    />
  );
}

export function Work() {
  const [active, setActive] = useState<Project | null>(null);
  const rest = projects.filter((project) => project.id !== featuredProject.id);

  useEffect(() => {
    if (!active) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section id="work" className="relative px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-10 flex flex-col gap-4 border-b border-white/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="timecode text-[11px] tracking-[0.28em] text-gold">Reel 01</p>
            <h2 className="display mt-3 text-5xl sm:text-7xl">Selected work</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-paper-dim">{featuredProject.logline}</p>
        </div>

        <article className="overflow-hidden border border-white/10 bg-ink-soft">
          <div className="relative aspect-video bg-black">
            <ProjectPlayer project={featuredProject} />
          </div>
          <div className="grid gap-8 px-5 py-8 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:py-10">
            <div>
              <p className="timecode text-[11px] tracking-[0.24em] text-gold">
                {featuredProject.number} · {featuredProject.category} · {featuredProject.runtime} ·{" "}
                {featuredProject.format}
              </p>
              <h3 className="display mt-3 text-5xl sm:text-7xl">{featuredProject.title}</h3>
              <p className="mt-4 text-lg text-gold-bright">{featuredProject.tagline}</p>
              <p className="mt-4 max-w-2xl text-base leading-7 text-paper-dim">{featuredProject.blurb}</p>
              {featuredProject.body?.map((paragraph) => (
                <p key={paragraph} className="mt-4 max-w-2xl text-base leading-7 text-paper-dim">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="flex flex-col justify-end gap-6 border-t border-white/10 pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
              <div>
                <p className="timecode text-[10px] tracking-[0.2em] text-paper-dim">Role</p>
                <p className="mt-2 text-sm text-paper">{featuredProject.role}</p>
              </div>
              <div>
                <p className="timecode text-[10px] tracking-[0.2em] text-paper-dim">Finish</p>
                <p className="mt-2 text-sm text-paper">{featuredProject.grade}</p>
              </div>
              <button
                type="button"
                className="timecode w-fit border border-gold/40 bg-gold px-5 py-3 text-[11px] tracking-[0.22em] text-ink hover:bg-gold-bright"
                onClick={() => setActive(featuredProject)}
              >
                Watch full screen
              </button>
            </div>
          </div>
        </article>

        <ul className="mt-8 grid gap-5 md:grid-cols-2">
          {rest.map((project) => (
            <li key={project.id}>
              <button
                type="button"
                onClick={() => setActive(project)}
                className="group w-full text-left"
              >
                <article className="relative overflow-hidden border border-white/10 bg-ink-soft">
                  <div className="relative aspect-video overflow-hidden">
                    <ProjectCover project={project} />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />
                    <span className="absolute top-4 left-4 timecode text-[11px] tracking-[0.24em] text-gold">
                      {project.number}
                    </span>
                    <span className="absolute top-4 right-4 timecode text-[11px] tracking-[0.2em] text-white/80">
                      {project.runtime}
                    </span>
                    <div className="absolute right-4 bottom-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-black/30 text-white backdrop-blur-sm transition-colors group-hover:border-gold group-hover:text-gold">
                      <span className="ml-0.5 text-sm">▶</span>
                    </div>
                  </div>
                  <div className="flex items-end justify-between gap-4 px-4 py-4">
                    <div>
                      <h3 className="display text-3xl">{project.title}</h3>
                      <p className="mt-1 text-sm text-paper-dim">{project.category}</p>
                    </div>
                    <p className="timecode hidden text-[10px] tracking-[0.16em] text-gold sm:block">
                      {project.grade}
                    </p>
                  </div>
                </article>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
          role="presentation"
        >
          <div
            className="max-h-[90vh] w-full max-w-4xl overflow-auto border border-white/15 bg-ink"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-title"
          >
            <div className="relative aspect-video bg-black">
              <ProjectPlayer project={active} autoPlay={hasPlayableMedia(active)} />
            </div>
            <div className="px-6 py-6 sm:px-8">
              <p className="timecode text-[11px] tracking-[0.24em] text-gold">
                {active.number} · {active.grade}
              </p>
              <h3 id="project-title" className="display mt-2 text-4xl sm:text-5xl">
                {active.title}
              </h3>
              {active.tagline ? (
                <p className="mt-3 text-lg text-gold-bright">{active.tagline}</p>
              ) : null}
              <p className="mt-4 max-w-2xl text-base leading-7 text-paper-dim">{active.blurb}</p>
              {active.body?.map((paragraph) => (
                <p key={paragraph} className="mt-4 max-w-2xl text-base leading-7 text-paper-dim">
                  {paragraph}
                </p>
              ))}
              {active.role ? (
                <p className="timecode mt-4 text-[11px] tracking-[0.18em] text-gold">{active.role}</p>
              ) : null}
              {!hasPlayableMedia(active) ? (
                <p className="mt-4 text-sm text-paper-dim">
                  Full reel on request — write to{" "}
                  <a className="text-gold underline decoration-gold/40" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                  .
                </p>
              ) : null}
              <button
                type="button"
                className="timecode mt-6 border border-white/20 px-4 py-2 text-[11px] tracking-[0.2em] hover:border-gold hover:text-gold"
                onClick={() => setActive(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
