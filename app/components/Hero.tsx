"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setGlowPos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 md:px-12 py-20 bg-linear-to-br from-background via-card to-background relative overflow-hidden"
    >
      <div
        className="pointer-events-none fixed w-48 h-48 bg-linear-to-r from-primary/20 to-accent/20 rounded-full blur-3xl transition-all duration-200 ease-out"
        style={{
          left: `${glowPos.x - 96}px`,
          top: `${glowPos.y - 96}px`,
        }}
      />

      <div className="max-w-3xl relative z-10">
        <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight animate-fade-in-up">
          Hi, I&apos;m{" "}
          <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent cursor-pointer">
            Bilal Shah
          </span>
        </h2>
        <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl animate-fade-in-up stagger-1">
          I&apos;m a Full-Stack Developer passionate about building scalable web
          applications using modern technologies like React, Next.js,
          TypeScript, and Node.js. I turn complex problems into elegant
          solutions.
        </p>
        <div className="flex flex-wrap gap-4 animate-fade-in-up stagger-2">
          <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-3 cursor-pointer bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 active:translate-y-0">
            View My Work
          </button>
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-3 cursor-pointer border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            Get in Touch
          </button>
        </div>
        <div className="mt-12 pt-12 border-t border-border/30 grid grid-cols-2 gap-6 animate-fade-in-up stagger-3">
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
              Email
            </p>
            <a
              href="mailto:syedbilals143@gmail.com"
              className="text-foreground hover:text-primary transition-colors"
            >
              syedbilals143@gmail.com
            </a>
          </div>
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
              Phone
            </p>
            <a
              href="tel:03419579038"
              className="text-foreground hover:text-primary transition-colors"
            >
              +92 341 957 9038
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
