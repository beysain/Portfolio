"use client";

import { useState } from "react";
import Image from "next/image";

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A complete full-stack online store featuring secure payment integration, real-time inventory management, product catalog, order tracking, and an admin dashboard for managing customers, products, and sales.",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
      link: "https://www.tensaicommerce.com/",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      gradient: "from-blue-500/20 to-purple-500/20",
    },
    {
      title: "Banking Web App",
      description:
        "A modern digital banking platform providing account management, savings plans, transaction tracking, and secure user authentication with an intuitive interface for financial operations.",
      tech: ["React", "Node.js", "Postgres", "Redux"],
      link: "https://www.islamicsavingscenter.com/",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
      gradient: "from-green-500/20 to-emerald-500/20",
    },
    {
      title: "Endless AI Power in One Place",
      description:
        "An AI-driven platform that generates smart content, automates writing tasks, and provides AI tools through OpenAI API integration with a fast and user-friendly interface.",
      tech: ["Next.js", "Express.js", "OpenAI API", "React"],
      link: "https://palvoro.com/",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      gradient: "from-violet-500/20 to-fuchsia-500/20",
    },
    {
      title: "Pharmacy Management System",
      description:
        "A digital solution for managing medicines, sales, prescriptions, and stock with role-based access, billing system, and real-time reporting for pharmacy operations.",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Recharts"],
      link: "https://td-pharmacy.vercel.app/",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      gradient: "from-cyan-500/20 to-blue-500/20",
    },
    {
      title: "Minerals Showroom",
      description:
        "A business showcase website for displaying mineral products with detailed catalogs, inquiry system, responsive UI, and performance-optimized frontend for better client engagement.",
      tech: ["Next.js", "TypeScript"],
      link: "https://minerals-s8mz.vercel.app/",
      image: "https://images.unsplash.com/photo-1574607383476-f517f260d30b?w=800&q=80",
      gradient: "from-amber-500/20 to-orange-500/20",
    },
    {
      title: "Construction Management System",
      description:
        "A project management platform for construction workflows including project tracking, budgeting, contractor management, progress monitoring, and analytical reporting dashboard.",
      tech: ["Next.js", "TypeScript", "NodeJs", "ExpressJs", "PostgreSQL", "Recharts"],
      link: "https://cms-fe-livid.vercel.app",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
      gradient: "from-red-500/20 to-rose-500/20",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 md:px-12 bg-background">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-4xl font-bold text-foreground mb-4 animate-fade-in-up">
          Featured Projects
        </h3>
        <p className="text-muted-foreground mb-12 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Explore my latest work showcasing modern web technologies and innovative solutions
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-500 group hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 animate-fade-in-up"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Thumbnail Image */}
              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-500`}></div>
                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-80"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h4>
                <p className="text-muted-foreground mb-5 leading-relaxed text-sm line-clamp-3">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-primary/10 text-primary text-xs rounded-full font-medium transition-all duration-300 hover:bg-primary/20 hover:scale-105 border border-primary/20"
                      style={{
                        opacity: hoveredIndex === index ? 1 : 0.8,
                        transform: hoveredIndex === index ? "translateY(0)" : "translateY(2px)",
                        transition: `all 0.3s ease-out ${i * 0.05}s`,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-accent font-semibold transition-all duration-300 group/link border-b-2 border-transparent hover:border-primary pb-1"
                >
                  <span>View Project</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
