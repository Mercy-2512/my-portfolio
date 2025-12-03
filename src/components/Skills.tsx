const skills = {
  Frontend: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  "Data / Backend": [
    "Python",
    "SQL",
    "PostgreSQL",
    "Data Engineering (Basics)",
    "Node.js (Beginner)",
  ],
  Tools: [
    "Git",
    "VS Code",
    "Eclipse",
    "Figma",
    "Jira",
    "Confluence",
    "Salesforce",
  ],
};

export default function Skills() {
  return (
    <section id="skills" className="space-y-6 mt-12">
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
        Skills
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="rounded-2xl border border-slate-300 dark:border-slate-700
                       bg-white dark:bg-slate-900 p-5 shadow-sm transition"
          >
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
              {category}
            </h3>

            <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
              {items.map((skill) => (
                <li key={skill}>• {skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
