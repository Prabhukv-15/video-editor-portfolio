import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { About, Contact, Footer, Services } from "@/components/SiteSections";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <div className="relative">
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[80] focus:bg-gold focus:px-3 focus:py-2 focus:text-ink"
      >
        Skip to work
      </a>
      <div className="grain" aria-hidden />
      <div className="vignette" aria-hidden />
      <div className="letterbox letterbox-top hidden sm:block" aria-hidden />
      <div className="letterbox letterbox-bottom hidden sm:block" aria-hidden />
      <Nav />
      <main>
        <Hero />
        <Work />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
