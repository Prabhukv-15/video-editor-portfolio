import { services, site, stats } from "@/lib/content";

export function Services() {
  return (
    <section id="services" className="border-y border-white/10 px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1400px]">
        <p className="timecode text-[11px] tracking-[0.28em] text-gold">Reel 02</p>
        <h2 className="display mt-3 text-5xl sm:text-7xl">What I finish</h2>
        <ul className="mt-14 grid gap-px bg-white/10 sm:grid-cols-2">
          {services.map((service) => (
            <li key={service.title} className="bg-ink px-6 py-10 sm:px-8">
              <p className="timecode text-[11px] tracking-[0.24em] text-gold">{service.code}</p>
              <h3 className="display mt-4 text-4xl">{service.title}</h3>
              <p className="mt-4 max-w-md text-sm leading-7 text-paper-dim">{service.copy}</p>
            </li>
          ))}
        </ul>
        <ul className="mt-8 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 md:grid-cols-4">
          {stats.map((stat) => (
            <li key={stat.label}>
              <p className="display text-3xl text-gold-bright sm:text-4xl">{stat.value}</p>
              <p className="timecode mt-2 text-[10px] tracking-[0.2em] text-paper-dim">
                {stat.label}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm text-paper-dim">
          Tools in the bay: {site.tools.join(" · ")}
        </p>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div>
          <p className="timecode text-[11px] tracking-[0.28em] text-gold">Reel 03</p>
          <h2 className="display mt-3 text-5xl sm:text-7xl">The cut, then the look.</h2>
          <p className="tamil mt-6 text-lg text-gold-bright">{site.tamilLine}</p>
        </div>
        <div className="space-y-5 text-base leading-7 text-paper-dim">
          <p>
            I&apos;m {site.name}, a video editor and colorist working out of {site.location}. Footage
            arrives as coverage. My job is to leave with a story — one that holds on Instagram, on a
            wedding screen, and in a client review bay.
          </p>
          <p>
            DaVinci Resolve is home base: timeline, color, and delivery in one suite. I grade for skin
            first, then for mood. I cut for breath, not for trend.
          </p>
          <p>
            If you have a showreel, a campaign, or a wedding film that needs a finishing hand, send
            the brief. I&apos;ll tell you honestly whether I&apos;m the right cut.
          </p>
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
    <section id="contact" className="border-t border-white/10 px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1400px]">
        <p className="timecode text-[11px] tracking-[0.28em] text-gold">Reel 04</p>
        <h2 className="display mt-3 max-w-4xl text-5xl sm:text-7xl lg:text-8xl">
          Send the footage.
          <span className="italic text-gold-bright"> I&apos;ll send the cut.</span>
        </h2>
        <a
          href={mail}
          className="mt-10 inline-block display text-2xl text-gold underline decoration-gold/30 underline-offset-8 transition-colors hover:text-gold-bright sm:text-4xl"
        >
          {site.email}
        </a>
        <p className="mt-6 max-w-xl text-sm leading-6 text-paper-dim">
          {site.availability}. Share references, duration, and deadline — I reply with a slot and a
          rate, not a vague maybe.
        </p>
        {socials.length > 0 ? (
          <ul className="mt-8 flex flex-wrap gap-5">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  className="timecode text-[11px] tracking-[0.22em] text-paper-dim hover:text-gold"
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
      <p className="timecode text-[10px] tracking-[0.2em] text-paper-dim">
        © {new Date().getFullYear()} {site.name}
      </p>
      <p className="timecode text-[10px] tracking-[0.2em] text-paper-dim">
        Video editor · Colorist · {site.location}
      </p>
    </footer>
  );
}
