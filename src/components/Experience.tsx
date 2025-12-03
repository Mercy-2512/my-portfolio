type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  description: string;
};

const experiences: ExperienceItem[] = [
  {
    role: "Implementation Analyst",
    company: "Athenahealth",
    period: "Jul 2025 – Present",
    description:
      "Working on data loading in Athena Cloud / AthenaDB, ensuring accurate and reliable data migration.",
  },
  {
    role: "Technical Project Analyst Intern",
    company: "Athenahealth",
    period: "Jan 2025 – Jun 2025",
    description:
      "Supported implementation projects, collaborated with cross-functional teams, and automated workflows.",
  },
  {
    role: "Event Manager",
    company: "Google Developer Student Club",
    period: "College",
    description:
      "Planned and managed tech events, workshops, and hack sessions for students.",
  },
  {
    role: "Club Coordinator",
    company: "DEVS Club",
    period: "College",
    description:
      "Organized coding competitions, coding bootcamps, and peer learning sessions.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="space-y-6 mt-12">
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
        Experience
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {experiences.map((exp) => (
          <div
            key={exp.role + exp.company}
            className="rounded-2xl border border-slate-300 dark:border-slate-700
                       bg-white dark:bg-slate-900 p-5 shadow-sm transition"
          >
            <p className="text-sm font-medium text-sky-700 dark:text-sky-400">
              {exp.period}
            </p>

            <h3 className="mt-1 text-lg font-semibold text-slate-900 dark:text-slate-100">
              {exp.role}
            </h3>

            <p className="text-sm text-slate-700 dark:text-slate-300">
              {exp.company}
            </p>

            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
