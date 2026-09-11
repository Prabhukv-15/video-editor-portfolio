"use client";

import { useEffect, useState } from "react";
import { CinematicStill } from "@/components/CinematicStill";
import { type Project, horizontalVideos, site, verticalVideos } from "@/lib/content";

function hasPlayableMedia(project: Project) {
  return Boolean(project.videoSrc || project.youtubeId);
}

function ProjectPlayer({ project, autoPlay = false }: { project: Project; autoPlay?: boolean }) {
  const fit = project.format === "9:16" ? "object-contain" : "object-cover";

  if (project.videoSrc) {
    return (
      <video
        className={`h-full w-full bg-black ${fit}`}
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

  if (project.poster) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={project.poster} alt={project.title} className="h-full w-full object-cover" />;
  }

  return <CinematicStill id={project.id} className="h-full w-full" title={project.title} />;
}

function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="mb-10 text-center sm:mb-14">
      <h2 className="hero-title text-[clamp(2.8rem,10vw,6.5rem)] text-white">{title}</h2>
      <p className="mt-3 text-sm text-white/70 sm:text-base">{subtitle}</p>
    </div>
  );
}

function ProjectMeta({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  return (
    <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="label text-accent">
          {project.number} · {project.category} · {project.runtime}
        </p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{project.title}</h3>
        {project.tagline ? <p className="mt-2 max-w-2xl text-paper-dim">{project.tagline}</p> : null}
      </div>
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          className="label bg-accent px-5 py-3 text-white hover:bg-accent-soft"
          onClick={onOpen}
        >
          Watch fullscreen
        </button>
        {project.resourcesUrl ? (
          <a
            href={project.resourcesUrl}
            target="_blank"
            rel="noreferrer"
            className="label inline-flex items-center border border-white/20 px-5 py-3 hover:border-accent hover:text-accent"
          >
            {project.resourcesLabel ?? "View resources"}
          </a>
        ) : null}
      </div>
    </div>
  );
}

export function Work() {
  const [active, setActive] = useState<Project | null>(null);

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
    <>
      <section
        id="work"
        className="relative overflow-hidden border-t border-white/10 px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full opacity-70 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(255,45,85,0.35), transparent 70%)" }}
          aria-hidden
        />

        <div className="relative z-10 mx-auto max-w-[1400px]">
          <SectionHeader
            title="Horizontal Videos"
            subtitle="Horizontal Videos – YouTube – Longform"
          />

          <div className="space-y-14">
            {horizontalVideos.map((project) => (
              <article key={project.id}>
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#121212]">
                  <div className="aspect-video bg-black">
                    <ProjectPlayer project={project} />
                  </div>
                </div>
                <ProjectMeta project={project} onOpen={() => setActive(project)} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="vertical"
        className="relative overflow-hidden border-t border-white/10 px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-16 top-10 h-72 w-72 rounded-full opacity-70 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(255,45,120,0.4), transparent 70%)" }}
          aria-hidden
        />

        <div className="relative z-10 mx-auto max-w-[1400px]">
          <SectionHeader title="Vertical Videos" subtitle="Vertical Videos – Shorts – Reels" />

          <div className="grid gap-10 md:grid-cols-2 lg:gap-12">
            {verticalVideos.map((project) => (
              <article key={project.id} className="mx-auto w-full max-w-[420px]">
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#121212]">
                  <div className="aspect-[9/16] bg-black">
                    <ProjectPlayer project={project} />
                  </div>
                </div>
                <ProjectMeta project={project} onOpen={() => setActive(project)} />
              </article>
            ))}
          </div>
        </div>
      </section>

      {active ? (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-title"
          onClick={() => setActive(null)}
        >
          <div
            className="max-h-[92vh] w-full max-w-5xl overflow-y-auto border border-white/10 bg-ink-soft"
            onClick={(event) => event.stopPropagation()}
          >
            <div
              className={
                active.format === "9:16"
                  ? "mx-auto aspect-[9/16] max-w-[420px] bg-black"
                  : "aspect-video bg-black"
              }
            >
              <ProjectPlayer project={active} autoPlay={hasPlayableMedia(active)} />
            </div>
            <div className="px-6 py-6 sm:px-8">
              <p className="label text-accent">
                {active.number} · {active.grade}
              </p>
              <h3 id="project-title" className="mt-3 text-3xl font-semibold sm:text-4xl">
                {active.title}
              </h3>
              {active.tagline ? <p className="mt-3 text-lg text-paper">{active.tagline}</p> : null}
              <p className="mt-4 max-w-2xl text-base leading-7 text-paper-dim">{active.blurb}</p>
              {active.resourcesUrl ? (
                <a
                  href={active.resourcesUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="label mt-4 inline-flex border border-white/20 px-4 py-2 hover:border-accent hover:text-accent"
                >
                  {active.resourcesLabel ?? "View resources"}
                </a>
              ) : null}
              {!hasPlayableMedia(active) ? (
                <p className="mt-4 text-sm text-paper-dim">
                  Full reel on request — write to{" "}
                  <a className="text-accent underline" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                  .
                </p>
              ) : null}
              <button
                type="button"
                className="label mt-6 border border-white/20 px-4 py-2 hover:border-accent hover:text-accent"
                onClick={() => setActive(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
