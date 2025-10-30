"use client"

import { useEffect, useRef } from "react"
import { MapPin, Mail, Phone, Linkedin } from "lucide-react"

export function Hero() {
  const videoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (videoRef.current) {
      observer.observe(videoRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background Placeholder */}
      <div
        ref={videoRef}
        className="absolute inset-0 opacity-20"
        style={{
          background: "linear-gradient(135deg, rgba(134, 239, 172, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)",
        }}
      >
        {/* Placeholder for future video background */}
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center text-muted-foreground/30 text-sm">
            [Video Background Placeholder]
            <br />
            <span className="text-xs">Add your showreel or brand video here</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 opacity-0 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-balance">Daodao Chan</h1>
          <p className="text-xl md:text-2xl text-primary font-medium">Brand Storyteller</p>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Building stories that move people — driving creative excellence through cultural insight and operational
            clarity.
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 pt-4 text-sm text-muted-foreground">
            <a href="#" className="flex items-center gap-2 hover:text-foreground transition-colors">
              <MapPin className="h-4 w-4" />
              Shanghai, China
            </a>
            <a
              href="mailto:88524244@qq.com"
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Mail className="h-4 w-4" />
              88524244@qq.com
            </a>
            <a href="tel:+8613265076435" className="flex items-center gap-2 hover:text-foreground transition-colors">
              <Phone className="h-4 w-4" />
              +86 132 6507 6435
            </a>
            <a
              href="https://linkedin.com/in/daodao-chan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground/30 rounded-full" />
        </div>
      </div>
    </section>
  )
}
