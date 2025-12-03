type Project = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
};

const projects: Project[] = [
  {
    title: "Blog Web App",
    description:
      "A responsive blog platform built with React and Tailwind CSS, with plans for a Node.js + Supabase backend.",
    tech: ["React", "Tailwind", "JavaScript"],
    github: "https://github.com/Mercy-2512/The-M-M-Blog", // replace
  },
  {
    title: "Transactly",
    description:
      " Transactly is a privacy-first AI system designed to automatically categorize financial transactions with high accuracy, full transparency, and zero cloud dependency.",
    tech: ["Next", "Tailwind", "FastAPI", "Python", "AI/ML"],
    github: "https://github.com/Mercy-2512/transactly-ai", // replace
  },
  {
    title: "IoT Forest Fire Detection System",
    description:
      "An IoT and ML-based early forest fire alarm system using sensors and edge computing with Raspberry Pi.",
    tech: ["Python", "ML", "IoT", "Raspberry Pi"],
    github:"https://github.com/Mercy-2512/IoT-Forest-Fire-Detection-System"
  },
  {
    title: "Aristic Aura",
    description:
      "Dynamic catalog with bookings, authentication, and responsive UI for exhibition workflows.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP"],
    github: "https://github.com/Mercy-2512/ArtisticAura",
  },
  {
    title: "Farm Friend",
    description:
      "A mobile app that provides farmers with real-time weather updates,crop prediction according to their soil type, crop management tips, and a marketplace to buy/sell produce. And integrated with Gemini AI chatbot to assist farmers with their queries.",
    tech: ["Flutter", "Dart", "Firebase"],
    github: "https://github.com/Mercy-2512/Farm-Friend", // replace
  },
  {
    title: "Portfolio Website",
    description:
      "This portfolio itself – built with Next.js and Tailwind, focused on clean UX and simple animations.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com/Mercy-2512/my-portfolio",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="space-y-4">
      <h2 className="text-2xl font-semibold">Projects</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="mt-2 text-sm text-slate-300">
                {project.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-4 flex gap-3 text-sm">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  className="underline text-sky-400"
                >
                  GitHub
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  className="underline text-sky-400"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
