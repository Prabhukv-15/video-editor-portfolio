import { services, site, softwares, stats } from "@/lib/content";

function SoftwareIcon({
  short,
  label,
  color,
  accent,
}: {
  short: string;
  label: string;
  color: string;
  accent: string;
}) {
  return (
    <li>
      <div
        className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 shadow-[0_0_24px_rgba(255,45,85,0.15)] sm:h-[72px] sm:w-[72px]"
        style={{ background: `linear-gradient(145deg, ${color} 0%, #0a0a0a 100%)` }}
        title={label}
        aria-label={label}
      >
        <span className="text-xl font-bold tracking-tight sm:text-2xl" style={{ color: accent }}>
          {short}
        </span>
      </div>
    </li>
  );
}

function SocialIcon({ name }: { name: "email" | "instagram" | "whatsapp" | "threads" }) {
  const common = "h-5 w-5 shrink-0";
  if (name === "email") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M4 6h16v12H4V6Zm0 0 8 7 8-7"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (name === "instagram") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm5 4.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5Zm5.75-.9a1.1 1.1 0 1 0 1.1 1.1 1.1 1.1 0 0 0-1.1-1.1Z" />
      </svg>
    );
  }
  if (name === "whatsapp") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12.04 3a8.9 8.9 0 0 0-7.62 13.4L3.5 20.5l4.2-.9A8.9 8.9 0 1 0 12.04 3Zm0 1.6a7.3 7.3 0 0 1 6.25 11.1 7.25 7.25 0 0 1-5.8 2.9 7.3 7.3 0 0 1-3.5-.9l-.5-.28-2.5.54.54-2.44-.3-.5a7.3 7.3 0 0 1 5.81-10.42Zm4.1 9.35c-.17-.09-1.03-.5-1.19-.56s-.28-.09-.4.09-.46.56-.56.67-.21.13-.38.04a5.95 5.95 0 0 1-1.75-1.08 6.58 6.58 0 0 1-1.22-1.52c-.13-.22 0-.33.1-.44s.21-.26.31-.39.13-.22.2-.37.03-.28-.02-.37-.4-.96-.55-1.31-.29-.3-.4-.3h-.34a.66.66 0 0 0-.48.22 2 2 0 0 0-.62 1.48 3.47 3.47 0 0 0 .73 1.84c.09.13 1.27 1.94 3.08 2.72a10.5 10.5 0 0 0 1.7.56 2.28 2.28 0 0 0 1.4.1 2.06 2.06 0 0 0 1.36-1 1.8 1.8 0 0 0 .12-1c-.05-.08-.16-.13-.33-.22Z" />
      </svg>
    );
  }
  return (
    <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M16.5 8.3a5.7 5.7 0 0 0-2-.4c-.4-1.7-1.5-3-3.3-3.5-1.5-.4-3.1 0-4.1 1.1-.9 1-1.1 2.4-.7 3.8.5 1.7 1.9 2.9 3.7 3.2-.7.5-1.2 1.1-1.5 1.9-.5 1.2-.3 2.5.5 3.5.8 1 2.1 1.5 3.4 1.4 2.4-.1 4.1-1.6 4.9-4.2.5-1.5.6-3.1.3-4.7.5-.4.9-.9 1.2-1.5.2-.4 0-.9-.4-1.1-.4-.2-.9 0-1.1.4-.2.4-.5.8-.9 1.1Zm-5.8 7.6c-.5 0-1-.2-1.3-.6-.3-.4-.4-.9-.2-1.4.3-.7.9-1.2 1.8-1.5.5 1.1 1.3 2 2.4 2.5-.7.7-1.7 1-2.7 1Zm1.4-8.9c1 .3 1.6 1.1 1.8 2.1-1.4-.1-2.5-.7-3.1-1.7.4-.3.8-.4 1.3-.4Z" />
    </svg>
  );
}

export function Services() {
  return (
    <section id="services" className="border-y border-white/10 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1400px]">
        <p className="label text-accent">Services</p>
        <h2 className="display mt-3 text-5xl sm:text-7xl">What I deliver</h2>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {services.map((service) => (
            <li key={service.title} className="border border-white/10 bg-ink-soft px-6 py-8 sm:px-8">
              <p className="label text-accent">{service.code}</p>
              <h3 className="display mt-4 text-3xl sm:text-4xl">{service.title}</h3>
              <p className="mt-4 max-w-md text-sm leading-7 text-paper-dim">{service.copy}</p>
            </li>
          ))}
        </ul>
        <ul className="mt-10 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 md:grid-cols-4">
          {stats.map((stat) => (
            <li key={stat.label}>
              <p className="display text-3xl text-accent sm:text-4xl">{stat.value}</p>
              <p className="label mt-2 text-paper-dim">{stat.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/10 px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-10 top-10 h-[50%] w-[55%] opacity-80"
        aria-hidden
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/about-timeline-plate.jpg"
          alt=""
          className="h-full w-full scale-110 object-cover object-center opacity-55"
        />
        <div className="absolute inset-0 bg-linear-to-l from-transparent via-ink/40 to-ink" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px]">
        <h2 className="hero-title text-[clamp(3rem,11vw,7rem)] text-white">About</h2>
        <div className="mt-8 max-w-3xl space-y-5 text-base leading-7 text-paper-dim sm:text-lg">
          <p>
            The following projects were developed as finished client and personal films, marking my
            work as a <strong className="text-white">Video Editor and Colorist</strong>. These pieces
            reflect a core philosophy where{" "}
            <strong className="text-white">
              sharp aesthetics, precise sound design, and high dynamism
            </strong>{" "}
            work together to amplify storytelling.
          </p>
          <p>
            By aligning <strong className="text-white">strategic editing</strong> with color and
            motion craft, the final visual becomes the key element to{" "}
            <strong className="text-white">capture and hold the viewer&apos;s attention</strong>.
          </p>
          <p>
            I&apos;m {site.name}, based in {site.location}. DaVinci Resolve is home base — timeline,
            grade, and delivery in one suite.
          </p>
        </div>

        <div className="mt-14">
          <h3 className="hero-title text-[clamp(2.2rem,7vw,4.5rem)] text-white">Softwares</h3>
          <ul className="mt-6 flex flex-wrap gap-4">
            {softwares.map((tool) => (
              <SoftwareIcon key={tool.id} {...tool} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const mail = `mailto:${site.email}?subject=${encodeURIComponent("Edit / grade enquiry")}`;
  const links = [
    { href: mail, label: site.email, icon: "email" as const },
    { href: site.socials.instagram, label: "@prabhukv_15", icon: "instagram" as const },
    { href: site.socials.whatsapp, label: "9025815302", icon: "whatsapp" as const },
    { href: site.socials.threads, label: "@prabhukv_15", icon: "threads" as const },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/10 px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(255,45,85,0.35), transparent 70%)" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(255,45,120,0.25), transparent 70%)" }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex max-w-[1400px] flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h2 className="hero-title text-[clamp(3.2rem,12vw,8rem)] text-white">
            Thank You
            <span className="ml-3 align-middle text-[clamp(1rem,2.5vw,1.6rem)] font-normal tracking-normal text-white/70">
              / Let&apos;s work
            </span>
          </h2>
          <p className="mt-4 max-w-md text-sm leading-6 text-paper-dim">
            {site.availability}. Share references, duration, and deadline — I reply with a slot and a
            rate.
          </p>
        </div>

        <ul className="space-y-4 text-base text-white sm:text-lg">
          {links.map((link) => (
            <li key={`${link.icon}-${link.label}`}>
              <a
                href={link.href}
                target={link.icon === "email" ? undefined : "_blank"}
                rel={link.icon === "email" ? undefined : "noreferrer"}
                className="inline-flex items-center gap-3 transition-colors hover:text-accent"
              >
                <SocialIcon name={link.icon} />
                <span>{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="flex flex-col gap-4 border-t border-white/10 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
      <p className="label text-paper-dim">
        © {new Date().getFullYear()} {site.name}
      </p>
      <p className="label text-paper-dim">
        Video editor · Colorist · {site.location}
      </p>
    </footer>
  );
}
