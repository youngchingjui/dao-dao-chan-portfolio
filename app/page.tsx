import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { FeaturedWork } from "@/components/featured-work"
import { AllProjects } from "@/components/all-projects"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <FeaturedWork />
      <AllProjects />
      <Contact />
    </main>
  )
}
