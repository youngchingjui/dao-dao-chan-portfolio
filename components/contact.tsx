"use client"

import { useEffect, useRef } from "react"
import { Mail, Phone, Linkedin, MapPin } from "lucide-react"

export function Contact() {
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
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" ref={sectionRef} className="py-24 md:py-32 opacity-0">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 pt-8">
            <a
              href="mailto:88524244@qq.com"
              className="flex flex-col items-center gap-3 p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <Mail className="h-6 w-6 text-primary" />
              <div>
                <div className="text-sm text-muted-foreground mb-1">Email</div>
                <div className="text-sm font-medium">88524244@qq.com</div>
              </div>
            </a>

            <a
              href="tel:+8613265076435"
              className="flex flex-col items-center gap-3 p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <Phone className="h-6 w-6 text-primary" />
              <div>
                <div className="text-sm text-muted-foreground mb-1">Phone</div>
                <div className="text-sm font-medium">+86 132 6507 6435</div>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/daodao-chan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <Linkedin className="h-6 w-6 text-primary" />
              <div>
                <div className="text-sm text-muted-foreground mb-1">LinkedIn</div>
                <div className="text-sm font-medium">daodao-chan</div>
              </div>
            </a>

            <div className="flex flex-col items-center gap-3 p-6 rounded-lg bg-card border border-border">
              <MapPin className="h-6 w-6 text-primary" />
              <div>
                <div className="text-sm text-muted-foreground mb-1">Location</div>
                <div className="text-sm font-medium">Shanghai, China</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-24 pt-8 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2025 Daodao Chan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </section>
  )
}
