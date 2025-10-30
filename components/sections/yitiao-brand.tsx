"use client";

import { useEffect, useRef } from "react";

export function YitiaoBrandSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) =>
            e.isIntersecting && e.target.classList.add("animate-fade-in-up")
        ),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 bg-gradient-to-br from-secondary/40 via-background to-secondary/20"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            YITIAO — Brand Building Through Storytelling
          </h3>
          <p className="text-muted-foreground leading-relaxed text-pretty">
            2015–2022 · Shaped YITIAO's voice as one of China's leading
            lifestyle media brands, producing storytelling content across
            design, architecture, and culture.
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
            <li className="bg-card/50 border border-border/60 rounded-lg p-4">
              Over 100 narrative-led films and features
            </li>
            <li className="bg-card/50 border border-border/60 rounded-lg p-4">
              Multiple Top 10 annual performances
            </li>
            <li className="bg-card/50 border border-border/60 rounded-lg p-4">
              Drove millions of organic views
            </li>
            <li className="bg-card/50 border border-border/60 rounded-lg p-4">
              Evolved from editor to content leader, crafting stories that
              strengthened brand trust through human insight
            </li>
          </ul>
          <div className="mt-6 text-sm text-primary">
            <a href="#">Watch here →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
