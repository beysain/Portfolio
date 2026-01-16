export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "JavaScript",
        "HTML5/CSS3",
      ],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "REST APIs"],
    },
    {
      category: "Tools & Platforms",
      skills: ["Git & GitHub", "Vercel", "Docker", "VS Code", "Figma"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 md:px-12 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-4xl font-bold text-foreground mb-12 animate-fade-in-up">
          Skills & Technologies
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className="animate-fade-in-up"
              style={{
                animationDelay: `${catIndex * 0.15}s`,
              }}
            >
              <h4 className="text-lg font-bold text-primary mb-6">
                {category.category}
              </h4>
              <ul className="space-y-3">
                {category.skills.map((skill, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-all duration-300 group/skill hover:translate-x-1"
                    style={{
                      animation: `fadeInUp 0.5s ease-out forwards`,
                      animationDelay: `${catIndex * 0.15 + i * 0.05}s`,
                    }}
                  >
                    <span className="w-2 h-2 bg-accent rounded-full group-hover/skill:scale-150 transition-transform duration-300" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
