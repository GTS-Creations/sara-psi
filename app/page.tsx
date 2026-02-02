import { Hero } from "@/components/landing/hero";
import { Stats } from "@/components/landing/stats";
import { About } from "@/components/landing/about";
import { Approaches } from "@/components/landing/approaches";
import { Services } from "@/components/landing/services";
import { Testimonials } from "@/components/landing/testimonials";
import { Contact } from "@/components/landing/contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Stats />
      <About />
      <Services />
      <Approaches />
      <Testimonials />
      <Contact />
    </main>
  );
}
