"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

const additionalProjects = [
  {
    title: "Yitiao | Story of a Young Fiber Artist",
    description:
      "Produced a storytelling film during the early months of COVID-19, featuring an emerging fiber artist who pursued her creative dream despite financial hardship.",
    impact:
      "Reached 800K+ organic views, became one of YITIAO's most-shared videos, helped the artist gain brand collaborations.",
    link: "#",
    linkText: "Watch on WeChat",
  },
  {
    title: "MO&Co. | Summer Collection Promotion",
    description:
      "Created social-first fashion storytelling to support a seasonal brand campaign by translating MO&Co.'s attitude-driven design into relatable lifestyle moments.",
    impact: "Received strong client adoption and engagement, helped drive product interest during campaign period.",
    link: "#",
    linkText: "View on WeChat",
  },
  {
    title: "Apple | Local Creator Story",
    description:
      "Supported the production of localized brand content for Apple China, ensuring campaign delivery met global creative standards and local execution needs.",
    impact: "Earned trust from Apple production team for disciplined execution and attention to detail.",
    link: "#",
    linkText: "View on Link",
  },
  {
    title: "YITIAO — Brand Building Through Storytelling",
    description:
      "From 2015 to 2022, helped shape YITIAO's voice as one of China's leading lifestyle media brands — creating original storytelling across design, architecture, and culture.",
    impact:
      "Produced over 100 narrative-led films, many ranking among YITIAO's Top 10 annual performances, driving millions of organic views.",
    link: "#",
    linkText: "Watch here",
  },
  {
    title: "Modern Weekly (iWeekly) – Cultural Feature Editorial",
    description:
      "Created long-form cultural storytelling that aligned with the magazine's editorial voice, writing feature stories exploring the intersection of music, fashion, and identity.",
    impact: "Strengthened the magazine's cultural influence and connection to creative communities.",
    link: "#",
    linkText: "Read More",
  },
]

export function AllProjects() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll(".fade-in-element")
      elements.forEach((el, index) => {
        setTimeout(() => observer.observe(el), index * 50)
      })
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 fade-in-element opacity-0">All Projects</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {additionalProjects.map((project, index) => (
              <Card
                key={index}
                className="fade-in-element opacity-0 p-6 md:p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 flex flex-col"
              >
                <h3 className="text-lg md:text-xl font-serif font-bold mb-3 text-balance">{project.title}</h3>
                <p className="text-sm text-foreground/90 mb-3 leading-relaxed flex-grow text-pretty">
                  {project.description}
                </p>
                <p className="text-xs text-foreground/70 mb-4 leading-relaxed">{project.impact}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                >
                  {project.linkText}
                  <ExternalLink className="h-3 w-3" />
                </a>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

