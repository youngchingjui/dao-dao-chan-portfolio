"use client"

import { useEffect, useRef } from "react"

export function EditorialSection() {
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
    <section id="editorial" ref={ref} className="py-20 md:py-28 bg-secondary/30 opacity-0">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">Modern Weekly (iWeekly) — Cultural Features</h3>
          <p className="text-muted-foreground leading-relaxed">
            Created long-form cultural storytelling aligned with the magazine's editorial voice. Explored the
            intersections of music, fashion, and identity. Led topic development, research, and editorial coordination
            with brand PR teams — strengthening cultural influence and community connection.
          </p>
          <div className="mt-6 grid sm:grid-cols-2 gap-3">
            <div className="rounded-lg border border-border/60 bg-card/50 p-4">“Grammy Moments”</div>
            <div className="rounded-lg border border-border/60 bg-card/50 p-4">“Eastern Europe's Millennial Fashion Movement”</div>
          </div>
        </div>
      </div>
    </section>
  )
}

