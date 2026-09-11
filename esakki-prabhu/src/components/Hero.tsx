"use client";

import { useEffect, useRef } from "react";
import { site } from "@/lib/content";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const nleRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let frame = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const onMove = (event: PointerEvent) => {
      const rect = section.getBoundingClientRect();
      const nx = (event.clientX - rect.left) / rect.width - 0.5;
      const ny = (event.clientY - rect.top) / rect.height - 0.5;
      targetX = nx;
      targetY = ny;
    };

    const tick = () => {
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;

      if (nleRef.current) {
        nleRef.current.style.transform = `translate3d(${currentX * -28}px, ${currentY * -18}px, 0)`;
      }
      if (profileRef.current) {
        profileRef.current.style.transform = `translate3d(${currentX * 18}px, ${currentY * 14}px, 0)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${currentX * 40}px, ${currentY * 28}px, 0)`;
      }

      frame = requestAnimationFrame(tick);
    };

    section.addEventListener("pointermove", onMove);
    frame = requestAnimationFrame(tick);

    return () => {
      section.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative flex min-h-[110svh] items-end overflow-hidden bg-[#070707] px-5 pb-16 pt-28 sm:min-h-svh sm:px-8 sm:pb-20 lg:min-h-[108svh] lg:px-14 lg:pb-24"
    >
      <div
        className="hero-grid-drift pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.22) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden
      />

      <div
        ref={glowRef}
        className="pointer-events-none absolute -top-24 -right-16 z-[1] h-[58vh] w-[58vw] will-change-transform"
        aria-hidden
      >
        <div
          className="hero-glow-pulse h-full w-full rounded-full opacity-90 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(255,45,120,0.62) 0%, rgba(255,45,85,0.22) 38%, transparent 70%)",
          }}
        />
      </div>

      <div
        className="hero-glow-orbit pointer-events-none absolute top-[35%] left-[8%] z-[1] h-40 w-40 rounded-full blur-3xl sm:h-56 sm:w-56"
        style={{
          background: "radial-gradient(circle, rgba(255,45,85,0.28), transparent 70%)",
        }}
        aria-hidden
      />

      <div
        ref={nleRef}
        className="pointer-events-none absolute top-[-2%] right-[-12%] bottom-[-4%] z-[2] w-[88%] will-change-transform sm:right-[-8%] sm:w-[82%] lg:right-[-6%] lg:w-[78%]"
        aria-hidden
      >
        <div className="hero-nle-frame h-full w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={site.heroImage}
            alt=""
            className="h-full w-full scale-[1.18] object-cover object-[28%_42%] opacity-100"
          />
          <div className="hero-light-sweep absolute inset-0" />
          <div className="absolute inset-0 bg-linear-to-r from-[#070707] via-[#070707]/20 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-t from-[#070707]/55 via-transparent to-[#070707]/10" />
        </div>
      </div>

      <div
        ref={profileRef}
        className="pointer-events-none absolute top-[20%] right-[4%] z-20 hidden w-[min(34vw,320px)] will-change-transform sm:block lg:right-[7%] lg:top-[16%]"
      >
        <div className="hero-profile-float relative">
          <div className="absolute -inset-3 rounded-[1.7rem] bg-accent/25 blur-2xl" aria-hidden />
          <div className="relative overflow-hidden rounded-[1.4rem] border-[3px] border-white shadow-[0_24px_70px_rgba(0,0,0,0.6)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/profile-hero.jpg"
              alt={site.name}
              className="aspect-[3/4] h-auto w-full object-cover object-[50%_18%]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/75 to-transparent px-3 pb-3 pt-10">
              <p className="text-sm font-semibold text-white">{site.name}</p>
              <p className="text-xs text-white/70">{site.role}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-[1400px]">
        <div className="max-w-[920px]">
          <p className="hero-kicker rise label text-accent">Open for commissions · 2026</p>
          <h1 className="hero-title hero-title-reveal mt-3 text-white">Portfolio</h1>
          <p className="rise rise-2 mt-3 text-[clamp(0.95rem,2.2vw,1.35rem)] font-medium tracking-[0.02em] text-white sm:mt-4">
            Video Editor / Colorist
          </p>
          <p className="rise rise-3 mt-5 max-w-md text-sm leading-6 text-white/55 sm:text-base">
            {site.name} · {site.location}
          </p>
          <div className="rise rise-4 mt-8 flex flex-wrap gap-3">
            <a
              href="#work"
              className="hero-cta-primary label inline-flex items-center bg-accent px-5 py-3 text-white hover:bg-accent-soft"
            >
              View work
            </a>
            <a
              href="#ai"
              className="hero-cta-ghost label inline-flex items-center border border-white/25 px-5 py-3 text-white hover:border-accent hover:text-accent"
            >
              AI films
            </a>
          </div>

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

      <div className="hero-scroll-hint pointer-events-none absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 sm:block" aria-hidden>
        <span className="label text-white/35">Scroll</span>
        <span className="hero-scroll-line mx-auto mt-2 block h-8 w-px bg-linear-to-b from-accent to-transparent" />
      </div>
    </section>
  );
}
