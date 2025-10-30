"use client"

import { useEffect, useRef } from "react"
import { MapPin, Mail, Phone, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

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

  // YouTube video data
  const YT_ID = "8RgApUqmguU"
  // Start at 167s (~2:47) and loop ~15s
  const START = 167
  const END = START + 15

  const src = `https://www.youtube.com/embed/${YT_ID}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&loop=1&playlist=${YT_ID}&start=${START}&end=${END}`

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div ref={videoRef} className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 overflow-hidden">
          {/* Maintain 16:9 and cover container */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              // These sizes ensure the 16:9 iframe covers any viewport
              width: "100vw",
              height: "56.25vw", // 9/16 of the width
              minWidth: "177.78vh", // 16/9 of the height
              minHeight: "100vh",
            }}
          >
            <iframe
              title="Background video"
              src={src}
              width="100%"
              height="100%"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen={false}
              frameBorder={0}
              className="pointer-events-none select-none"
            />
          </div>
        </div>
        {/* Dark overlay to make foreground pop */}
        <div className="absolute inset-0 bg-black/45" />
        {/* Optional subtle gradient tint */}
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-300/10 to-blue-400/10" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 opacity-0 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-balance">Daodao Chan</h1>
          <p className="text-xl md:text-2xl text-foreground font-medium">Brand Storyteller</p>
          <p className="text-lg md:text-xl text-foreground/90 max-w-2xl mx-auto text-pretty leading-relaxed">
            Building stories that move people — driving creative excellence through cultural insight and operational
            clarity.
          </p>

          {/* Subtle CTA */}
          <div className="pt-2 flex items-center justify-center gap-3">
            <Button asChild className="rounded-full shadow-md/30 shadow-black/30 hover:shadow-md">
              <a href="mailto:88524244@qq.com?subject=Project%20Inquiry%20—%20Daodao%20Chan">Book me</a>
            </Button>
            <Button asChild variant="outline" className="rounded-full">
              <a href="#contact">View contact</a>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 pt-4 text-sm text-foreground/80">
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

