import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { TrustedBy } from "@/components/site/trusted-by";
import { About } from "@/components/site/about";
import { WhatWeDo } from "@/components/site/what-we-do";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <About />
        <WhatWeDo />
      </main>
      <Footer />
    </>
  );
}
