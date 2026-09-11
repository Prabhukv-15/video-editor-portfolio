"use client";

import { useEffect, useState } from "react";
import { CinematicStill } from "@/components/CinematicStill";
import { type Project, projects, site } from "@/lib/content";

function hasPlayableMedia(project: Project) {
  return Boolean(project.videoSrc || project.youtubeId);
}

function youtubeSrc(id: string) {
  return `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`;
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
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={project.poster} alt={project.title} className="h-full w-full object-cover" />;
  }

  return <CinematicStill id={project.id} className="h-full w-full" title={project.title} />;
}

const filmProjects = projects.filter((project) => Boolean(project.videoSrc));
const moreProjects = projects.filter((project) => !project.videoSrc);

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
    <section id="work" className="relative px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-12 flex flex-col gap-3 border-b border-white/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="label text-accent">Selected work</p>
            <h2 className="display mt-3 text-5xl sm:text-7xl">Projects</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-paper-dim">
            Finished films from the timeline — nature, brand, education, and architectural motion.
          </p>
        </div>

        <div className="space-y-16 lg:space-y-24">
          {filmProjects.map((project) => {
            const vertical = project.format === "9:16";
            return (
              <article key={project.id} className="border border-white/10 bg-ink-soft">
                <div
                  className={
                    vertical
                      ? "mx-auto aspect-[9/16] max-w-[360px] bg-black"
                      : "relative aspect-video bg-black"
                  }
                >
                  <ProjectPlayer project={project} />
                </div>
                <div className="grid gap-8 px-5 py-8 sm:px-8 lg:grid-cols-[1.3fr_0.7fr] lg:px-10 lg:py-10">
                  <div>
                    <p className="label text-accent">
                      {project.number} · {project.category} · {project.runtime}
                      {project.format ? ` · ${project.format}` : ""}
                    </p>
                    <h3 className="display mt-4 text-4xl sm:text-6xl">{project.title}</h3>
                    {project.tagline ? (
                      <p className="mt-4 text-lg text-paper">{project.tagline}</p>
                    ) : null}
                    <p className="mt-4 max-w-2xl text-base leading-7 text-paper-dim">{project.blurb}</p>
                    {project.body?.map((paragraph) => (
                      <p key={paragraph} className="mt-4 max-w-2xl text-base leading-7 text-paper-dim">
                        {paragraph}{" "}
                        {paragraph === project.body?.[0] && project.question ? (
                          <em className="text-paper">{project.question}</em>
                        ) : null}
                      </p>
                    ))}
                  </div>
                  <div className="flex flex-col justify-end gap-5 border-t border-white/10 pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
                    {project.role ? (
                      <div>
                        <p className="label text-paper-dim">Role</p>
                        <p className="mt-2 text-sm text-paper">{project.role}</p>
                      </div>
                    ) : null}
                    <div>
                      <p className="label text-paper-dim">Finish</p>
                      <p className="mt-2 text-sm text-paper">{project.grade}</p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <button
                        type="button"
                        className="label bg-accent px-5 py-3 text-white hover:bg-accent-soft"
                        onClick={() => setActive(project)}
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
                </div>
              </article>
            );
          })}
        </div>

        {moreProjects.length > 0 ? (
          <div className="mt-16">
            <p className="label text-accent">More categories</p>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {moreProjects.map((project) => (
                <li key={project.id}>
                  <button
                    type="button"
                    onClick={() => setActive(project)}
                    className="group flex w-full items-center justify-between border border-white/10 bg-ink-lift px-5 py-5 text-left transition-colors hover:border-accent/50"
                  >
                    <span>
                      <span className="label text-paper-dim">{project.number}</span>
                      <span className="mt-2 block text-xl font-semibold">{project.title}</span>
                      <span className="mt-1 block text-sm text-paper-dim">{project.category}</span>
                    </span>
                    <span className="label text-accent opacity-0 transition-opacity group-hover:opacity-100">
                      Open
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>

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
              <h3 id="project-title" className="display mt-3 text-4xl sm:text-5xl">
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
    </section>
  );
}
