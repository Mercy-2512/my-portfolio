const skills = {
  "Frontend": ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  "Data / Backend": ["Python", "SQL", "PostgreSQL", "Data Engineering basics", "Node.js (beginner)"],
  "Tools": ["Git", "VS Code", "Eclipse", "Figma", 'Jira', 'Confluence', "Salesforce"],
};

export default function Skills() {
  return (
    <section id="skills" className="space-y-4">
      <h2 className="text-2xl font-semibold">Skills</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4"
          >
            <h3 className="text-lg font-semibold mb-2">{category}</h3>
            <ul className="space-y-1 text-sm text-slate-300">
              {items.map((s) => (
                <li key={s}>• {s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
