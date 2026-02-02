import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { Stats } from "@/components/landing/stats"
import { About } from "@/components/landing/about"
import { Approaches } from "@/components/landing/approaches"
import { Services } from "@/components/landing/services"
import { Testimonials } from "@/components/landing/testimonials"
import { Contact } from "@/components/landing/contact"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Approaches />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
