import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { About, Contact, Footer, Services } from "@/components/SiteSections";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <div className="relative bg-ink">
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[80] focus:bg-accent focus:px-3 focus:py-2 focus:text-white"
      >
        Skip to work
      </a>
      <Nav />
      <main>
        <Hero />
        <About />
        <Work />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
