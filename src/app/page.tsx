import { Navbar } from "@/components/site/navbar";
import { ScrollReveal } from "@/components/site/scroll-reveal";
import { Hero } from "@/components/site/hero";
import { Marquee } from "@/components/site/marquee";
import { About } from "@/components/site/about";
import { Services } from "@/components/site/services";
import { Work } from "@/components/site/work";
import { Clients } from "@/components/site/clients";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <ScrollReveal />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Work />
        <Clients />
      </main>
      <Footer />
    </>
  );
}
