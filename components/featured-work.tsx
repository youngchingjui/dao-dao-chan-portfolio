"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

const featuredProjects = [
  {
    title: "Perrotin Gallery | Artist Storytelling Series",
    description:
      "Designed a cultural storytelling campaign to grow brand relevance in China by turning abstract contemporary art into human, emotionally engaging narratives that spark connection.",
    impact:
      "Unlocked 10× engagement and 500K organic views on the Qi Zhuo feature — driving traffic, conversation and exhibition conversion.",
    link: "https://instagram.com",
    linkText: "View on Instagram",
    videoPlaceholder: "Contemporary art storytelling video",
  },
  {
    title: "Yitiao | TongLu Architecture Story",
    description:
      "Created a culturally resonant storytelling film that elevated YITIAO's brand influence by turning a niche countryside architecture project into a lifestyle movement.",
    impact:
      "Reached 1M+ organic views, drove real visitor conversion to the hotel, and became one of YITIAO's signature brand assets.",
    link: "https://youtube.com",
    linkText: "Watch on YouTube",
    videoPlaceholder: "Architecture documentary film",
  },
  {
    title: "Jordan Brand | Chengdu Flagship Opening",
    description:
      "Produced a high-energy brand activation film to amplify the launch of Jordan's Chengdu flagship store and drive community attention and store traffic.",
    impact: "Gained wide pickup from sports and lifestyle media and strong social amplification through KOL reposts.",
    link: "https://rednote.com",
    linkText: "View on Rednote",
    videoPlaceholder: "High-energy brand activation",
  },
]

export function FeaturedWork() {
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
        setTimeout(() => observer.observe(el), index * 100)
      })
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="work" ref={sectionRef} className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 fade-in-element opacity-0">Featured Work</h2>

          <div className="space-y-16">
            {featuredProjects.map((project, index) => (
              <Card
                key={index}
                className="fade-in-element opacity-0 overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Video Placeholder */}
                  <div className="relative aspect-video md:aspect-auto bg-secondary/50 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="text-muted-foreground/50 text-sm mb-2">[Video Placeholder]</div>
                      <div className="text-muted-foreground/30 text-xs">{project.videoPlaceholder}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-balance">{project.title}</h3>
                    <p className="text-foreground/90 mb-4 leading-relaxed text-pretty">{project.description}</p>
                    <p className="text-sm text-foreground/80 mb-6 leading-relaxed">{project.impact}</p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                    >
                      {project.linkText}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

