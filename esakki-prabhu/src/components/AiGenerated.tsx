"use client";

import { useEffect, useState } from "react";
import { type Project, aiVideos, site } from "@/lib/content";

function AiPlayer({ project, autoPlay = false }: { project: Project; autoPlay?: boolean }) {
  const isVertical = project.format === "9:16";
  const loop = Boolean(project.loop);

  return (
    <video
      className={`h-full w-full bg-black ${isVertical ? "object-contain" : "object-cover"}`}
      src={project.videoSrc}
      poster={project.poster}
      controls
      playsInline
      preload="metadata"
      loop={loop}
      muted={loop}
      autoPlay={autoPlay || loop}
    >
      Your browser does not support video playback.
    </video>
  );
}

export function AiGenerated() {
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
        id="ai"
        className="relative overflow-hidden border-t border-white/10 px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(255,45,120,0.18), transparent 60%), radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)",
            backgroundSize: "auto, 26px 26px",
          }}
          aria-hidden
        />

        <div className="relative z-10 mx-auto max-w-[1400px]">
          <div className="mb-12 text-center sm:mb-16">
            <p className="label text-accent">2026 · Generative motion</p>
            <h2 className="hero-title ai-title-shimmer mt-3 text-[clamp(2.6rem,9vw,5.8rem)]">
              AI Generated
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/65 sm:text-base">
              Prompt-to-picture films — liquid glass cards, kinetic type, and cuts built for the feed.
            </p>
          </div>

          <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
            {aiVideos.map((project) => {
              const isVertical = project.format === "9:16";
              return (
                <article
                  key={project.id}
                  className={
                    isVertical
                      ? "lg:col-span-5 lg:col-start-1"
                      : "lg:col-span-7 lg:col-start-6 lg:row-start-1"
                  }
                >
                  <div className={`ai-glass overflow-hidden rounded-[1.6rem] ${isVertical ? "mx-auto max-w-[420px]" : ""}`}>
                    <div className={isVertical ? "aspect-[9/16] bg-black/80" : "aspect-video bg-black/80"}>
                      <AiPlayer project={project} />
                    </div>
                    <div className="px-5 py-5 sm:px-6 sm:py-6">
                      <p className="label text-accent">
                        {project.number} · {project.category} · {project.runtime}
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                        {project.title}
                      </h3>
                      {project.tagline ? (
                        <p className="mt-2 text-sm text-white/60 sm:text-base">{project.tagline}</p>
                      ) : null}
                      <button
                        type="button"
                        className="label mt-5 inline-flex bg-accent px-5 py-3 text-white hover:bg-accent-soft"
                        onClick={() => setActive(project)}
                      >
                        Watch fullscreen
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {active ? (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-labelledby="ai-project-title"
          onClick={() => setActive(null)}
        >
          <div
            className="ai-glass max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div
              className={
                active.format === "9:16"
                  ? "mx-auto aspect-[9/16] max-w-[420px] bg-black"
                  : "aspect-video bg-black"
              }
            >
              <AiPlayer project={active} autoPlay />
            </div>
            <div className="px-6 py-6 sm:px-8">
              <p className="label text-accent">
                {active.number} · {active.grade}
              </p>
              <h3 id="ai-project-title" className="mt-3 text-3xl font-semibold sm:text-4xl">
                {active.title}
              </h3>
              {active.tagline ? <p className="mt-3 text-lg text-paper">{active.tagline}</p> : null}
              <p className="mt-4 max-w-2xl text-base leading-7 text-paper-dim">{active.blurb}</p>
              <p className="mt-4 text-sm text-paper-dim">
                More AI cuts on request —{" "}
                <a className="text-accent underline" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </p>
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
