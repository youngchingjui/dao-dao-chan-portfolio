"use client";

import { useEffect, useRef } from "react";
import { MapPin, Mail, Phone, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // YouTube video data
  const YT_ID = "8RgApUqmguU";
  // Start at 167s (~2:47) and loop ~15s
  const START = 167;
  const END = START + 15;

  const src = `https://www.youtube.com/embed/${YT_ID}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&loop=1&playlist=${YT_ID}&start=${START}&end=${END}`;

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

      <div className="w-full px-6 relative z-10">
        <div className="max-w-4xl ml-auto">
          {/* Glassy heavy hero card */}
          <div className="relative overflow-hidden rounded-[2rem] p-8 md:p-12 bg-white/8 backdrop-blur-2xl backdrop-saturate-150 backdrop-contrast-125 border border-white/20 ring-1 ring-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_20px_60px_-10px_rgba(0,0,0,0.6),0_60px_120px_-30px_rgba(0,0,0,0.8)]">
            {/* Refraction blobs */}
            <div className="pointer-events-none absolute -top-10 -left-16 h-56 w-56 rounded-full bg-white/20 blur-2xl opacity-35" />
            <div className="pointer-events-none absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-cyan-400/25 blur-3xl opacity-30" />
            {/* Sheen and vignette for depth */}
            <div className="pointer-events-none absolute -top-1/2 left-1/2 -translate-x-1/2 w-[140%] h-[120%] -rotate-6 bg-gradient-to-b from-white/15 to-transparent opacity-30" />
            <div className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] [mask-image:radial-gradient(120%_100%_at_50%_10%,black,transparent_70%)]" />

            {/* Content */}
            <div className="relative z-10 text-center space-y-6">
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-balance drop-shadow-[0_1px_0_rgba(0,0,0,0.3)]">
                Daodao Chan
              </h1>
              <p className="text-xl md:text-2xl font-medium text-white/90">
                Brand Storyteller
              </p>
              <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto text-pretty leading-relaxed">
                Building stories that move people — driving creative excellence
                through cultural insight and operational clarity.
              </p>

              {/* Subtle CTA */}
              <div className="pt-2 flex items-center justify-center gap-3">
                <Button
                  asChild
                  className="rounded-full shadow-md/30 shadow-black/30 hover:shadow-md"
                >
                  <a href="mailto:88524244@qq.com?subject=Project%20Inquiry%20—%20Daodao%20Chan">
                    Book me
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-full">
                  <a href="#contact">View contact</a>
                </Button>
              </div>

              {/* Contact Info */}
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 pt-4 text-sm text-white/70">
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <MapPin className="h-4 w-4" />
                  Shanghai, China
                </a>
                <a
                  href="mailto:88524244@qq.com"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  88524244@qq.com
                </a>
                <a
                  href="tel:+8613265076435"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  +86 132 6507 6435
                </a>
                <a
                  href="https://linkedin.com/in/daodao-chan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </div>
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
  );
}

