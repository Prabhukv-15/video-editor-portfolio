import { services, site, stats } from "@/lib/content";

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
        <p className="mt-8 text-sm text-paper-dim">Tools: {site.tools.join(" · ")}</p>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="relative overflow-hidden border-t border-white/10 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
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
            <strong className="text-white">sharp aesthetics, precise sound design, and high dynamism</strong>{" "}
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
            {["DaVinci Resolve", "After Effects", "Premiere Pro", "Audition"].map((tool) => (
              <li
                key={tool}
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-sm font-medium text-white backdrop-blur-sm"
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const mail = `mailto:${site.email}?subject=${encodeURIComponent("Edit / grade enquiry")}`;
  const socials: { href: string; label: string }[] = [];
  if (site.socials.instagram) socials.push({ href: site.socials.instagram, label: "Instagram" });
  if (site.socials.youtube) socials.push({ href: site.socials.youtube, label: "YouTube" });
  if (site.socials.whatsapp) socials.push({ href: site.socials.whatsapp, label: "WhatsApp" });

  return (
    <section id="contact" className="border-t border-white/10 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1400px]">
        <p className="label text-accent">Contact</p>
        <h2 className="display mt-3 max-w-4xl text-5xl sm:text-7xl lg:text-8xl">
          Send the footage.
          <span className="text-accent"> I&apos;ll send the cut.</span>
        </h2>
        <a
          href={mail}
          className="mt-10 inline-block text-2xl text-accent underline decoration-accent/30 underline-offset-8 transition-colors hover:text-accent-soft sm:text-4xl"
        >
          {site.email}
        </a>
        <p className="mt-6 max-w-xl text-sm leading-6 text-paper-dim">
          {site.availability}. Share references, duration, and deadline — I reply with a slot and a
          rate.
        </p>
        {socials.length > 0 ? (
          <ul className="mt-8 flex flex-wrap gap-5">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  className="label text-paper-dim hover:text-accent"
                  target="_blank"
                  rel="noreferrer"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        ) : null}
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
