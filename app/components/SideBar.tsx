"use client";

import Link from "next/link";
import { useState } from "react";

const IconHome = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const IconProjects = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const IconSkills = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
  </svg>
);

const IconContact = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const IconGithub = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-6.627-5.373-12-12-12z" />
  </svg>
);

const IconLinkedin = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("about");

  const sections = [
    { id: "about", label: "About", icon: IconHome },
    { id: "projects", label: "Projects", icon: IconProjects },
    { id: "skills", label: "Skills", icon: IconSkills },
    { id: "contact", label: "Contact", icon: IconContact },
  ];

  const handleScroll = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <aside className="hidden md:flex w-64 h-screen bg-card border-r border-border flex-col sticky top-0 p-8">
      <div className="mb-12 animate-fade-in-up">
        <h1 className="text-2xl font-bold text-primary mb-2">Bilal Shah</h1>
        <p className="text-sm text-muted-foreground">Full-Stack Developer</p>
      </div>

      <nav className="flex flex-col gap-6 flex-1">
        {sections.map((section, index) => {
          const IconComponent = section.icon;
          return (
            <button
              key={section.id}
              onClick={() => handleScroll(section.id)}
              className={`flex items-center gap-3 text-sm font-medium transition-all duration-300 ${
                activeSection === section.id
                  ? "text-primary border-l-2 border-primary pl-3 translate-x-1"
                  : "text-muted-foreground hover:text-foreground pl-3 hover:translate-x-1"
              }`}
              style={{
                animation: `fadeInUp 0.6s ease-out forwards`,
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <IconComponent />
              {section.label}
            </button>
          );
        })}
      </nav>

      <div className="pt-8 border-t border-border space-y-6">
        <div className="animate-fade-in-up stagger-1">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
            Email
          </p>
          <a
            href="mailto:syedbilals143@gmail.com"
            className="text-sm text-foreground hover:text-primary transition-colors"
          >
            syedbilals143@gmail.com
          </a>
        </div>
        <div className="animate-fade-in-up stagger-2">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
            Phone
          </p>
          <a
            href="tel:03419579038"
            className="text-sm text-foreground hover:text-primary transition-colors"
          >
            +92 341 957 9038
          </a>
        </div>
        <div className="flex gap-4 pt-4">
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            aria-label="GitHub"
          >
            <IconGithub />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <IconLinkedin />
          </Link>
        </div>
      </div>
    </aside>
  );
}
