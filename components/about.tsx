"use client"

import { useEffect, useRef } from "react"

export function About() {
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
      elements.forEach((el) => observer.observe(el))
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="fade-in-element opacity-0">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">About Me</h2>
            <div className="space-y-4 text-foreground/90 leading-relaxed">
              <p>
                I am a brand storyteller with nine years of experience crafting narrative-led campaigns across digital,
                social, and brand communications. I connect creative strategy with operational execution — translating
                brand values into culturally resonant stories that inspire audiences and strengthen brand impact. I
                thrive where creativity meets structure, and ideas turn into action.
              </p>
              <p>
                I bring an athlete's mindset to brand building — clarity, discipline, and resilience. I stay curious,
                move with intent, and approach every project with focus, collaboration, and consistency — ensuring
                creative ideas are executed with excellence and purpose.
              </p>
            </div>
          </div>

          <div className="fade-in-element opacity-0">
            <h3 className="text-2xl font-serif font-bold mb-6">Brand Storytelling Through Editing</h3>
            <p className="text-foreground/90 leading-relaxed">
              Experienced in shaping brand stories through structured visual editing, combining narrative logic, clarity
              of message, and strong production control. Skilled in delivering premium output under tight timelines and
              cross-team workflows.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

