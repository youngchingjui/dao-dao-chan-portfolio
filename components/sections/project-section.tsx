"use client";

import { useEffect, useRef } from "react";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export type ProjectSectionProps = {
  id?: string;
  title: string;
  description: string;
  impact?: string | string[];
  link?: { href: string; label: string };
  variant?: "leftMedia" | "rightMedia" | "split" | "stacked";
  background?: "base" | "muted" | "contrast" | "gradientA" | "gradientB";
  // Optional hero media image for the section
  mediaImageSrc?: string;
  mediaImageAlt?: string;
};

export function ProjectSection({
  id,
  title,
  description,
  impact,
  link,
  variant = "leftMedia",
  background = "base",
  mediaImageSrc,
  mediaImageAlt,
}: ProjectSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll(".fade-in-element");
      elements.forEach((el, index) =>
        setTimeout(() => observer.observe(el), index * 100)
      );
    }

    return () => observer.disconnect();
  }, []);

  const bgClass = {
    base: "bg-background",
    muted: "bg-secondary/30",
    contrast: "bg-[oklch(0.16_0.01_270)]",
    gradientA: "bg-gradient-to-br from-primary/10 via-transparent to-primary/5",
    gradientB:
      "bg-gradient-to-tr from-emerald-400/10 via-transparent to-blue-400/10",
  }[background];

  const MediaCollage = () => (
    <div className="relative h-[420px] md:h-auto md:min-h-[420px]">
      {/* Large main media frame */}
      <div className="absolute -left-6 top-6 md:static md:translate-x-0 md:translate-y-0 w-[70%] md:w-full aspect-video rounded-xl bg-card/70 border border-border/60 backdrop-blur-sm overflow-hidden shadow-2xl">
        {mediaImageSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={mediaImageSrc}
            alt={mediaImageAlt || title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="h-full w-full grid place-items-center text-center">
            <div>
              <div className="text-xs text-muted-foreground/60 mb-1">
                [Video Placeholder]
              </div>
              <div className="text-xs text-muted-foreground/40">
                Drop your reel or case cut here
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Small floating frames */}
      <div className="absolute right-0 -bottom-6 w-36 md:w-44 aspect-[4/5] rounded-lg bg-secondary/60 border border-border/60 backdrop-blur-sm shadow-xl overflow-hidden">
        <div className="h-full w-full grid place-items-center text-[10px] text-muted-foreground/60">
          [Stills]
        </div>
      </div>
      <div className="absolute -right-4 top-4 w-32 md:w-40 aspect-square rounded-lg bg-primary/20 border border-primary/30 shadow-xl overflow-hidden rotate-3">
        <div className="h-full w-full grid place-items-center text-[10px] text-primary/70">
          [Graphic]
        </div>
      </div>
    </div>
  );

  const Content = () => (
    <div className="p-6 md:p-10">
      <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4 text-balance fade-in-element">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed text-pretty fade-in-element">
        {description}
      </p>
      {impact && (
        <div className="mt-4 space-y-2 text-sm text-foreground/80 fade-in-element">
          {Array.isArray(impact) ? (
            <ul className="list-disc pl-5 space-y-1">
              {impact.map((i, idx) => (
                <li key={idx}>{i}</li>
              ))}
            </ul>
          ) : (
            <p>{impact}</p>
          )}
        </div>
      )}
      {link && (
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium fade-in-element"
        >
          {link.label}
          <ExternalLink className="h-4 w-4" />
        </a>
      )}
    </div>
  );

  return (
    <section id={id} ref={sectionRef} className={cn("py-20 md:py-28", bgClass)}>
      <div className="container mx-auto px-6">
        <div
          className={cn(
            "grid items-center gap-8 md:gap-12",
            variant === "stacked" ? "grid-cols-1" : "md:grid-cols-2"
          )}
        >
          {variant === "rightMedia" ? (
            <>
              <Content />
              <MediaCollage />
            </>
          ) : variant === "split" ? (
            <>
              <div className="fade-in-element ">
                <MediaCollage />
              </div>
              <div className="fade-in-element ">
                <Content />
              </div>
            </>
          ) : variant === "stacked" ? (
            <>
              <div className="fade-in-element ">
                <MediaCollage />
              </div>
              <div className="fade-in-element ">
                <Content />
              </div>
            </>
          ) : (
            <>
              <MediaCollage />
              <Content />
            </>
          )}
        </div>
      </div>
    </section>
  );
}

