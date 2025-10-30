"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useRef } from "react"

export function CTASection() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("animate-fade-in-up")),
      { threshold: 0.1 },
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      id="book-me"
      ref={ref}
      className="relative py-24 md:py-32 opacity-0 overflow-hidden"
    >
      {/* soft gradient backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-emerald-400/10" />
      <div className="container mx-auto px-6 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-serif font-bold">Let's build your next story</h3>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            I craft narrative-led films and brand content. If you're looking for an editor or production partner who can
            translate values into emotionally resonant work — let's talk.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Button asChild className="rounded-full">
              <a href="mailto:88524244@qq.com?subject=Project%20Inquiry%20—%20Daodao%20Chan">Book me</a>
            </Button>
            <Button asChild variant="outline" className="rounded-full">
              <a href="#contact">Contact</a>
            </Button>
          </div>
        </div>
      </div>
      {/* artistic edges */}
      <div className="pointer-events-none absolute -left-10 bottom-10 size-40 rotate-6 rounded-xl bg-primary/10 blur-xl" />
      <div className="pointer-events-none absolute -right-8 -top-8 size-48 -rotate-12 rounded-2xl bg-emerald-400/10 blur-2xl" />
    </section>
  )
}

