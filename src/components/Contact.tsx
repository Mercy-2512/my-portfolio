export default function Contact() {
  return (
    <section id="contact" className="space-y-6 pb-10 mt-12">
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
        Contact
      </h2>

      <p className="text-slate-700 dark:text-slate-300 max-w-xl">
        Want to collaborate, hire me, or just talk about code and coffee? ☕  
        I’d love to connect!
      </p>

      <div className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
        <p>
          <span className="font-medium text-slate-900 dark:text-slate-100">
            Email:
          </span>{" "}
          <a
            className="text-sky-600 dark:text-sky-400 underline"
            href="mailto:mercynicholas2512@gmail.com"
          >
            mercynicholas2512@gmail.com
          </a>
        </p>

        <p>
          <span className="font-medium text-slate-900 dark:text-slate-100">
            LinkedIn:
          </span>{" "}
          <a
            className="text-sky-600 dark:text-sky-400 underline"
            href="https://www.linkedin.com/in/mercy-nicholas/"
            target="_blank"
          >
            linkedin.com/in/mercy-nicholas
          </a>
        </p>

        <p>
          <span className="font-medium text-slate-900 dark:text-slate-100">
            GitHub:
          </span>{" "}
          <a
            className="text-sky-600 dark:text-sky-400 underline"
            href="https://github.com/Mercy-2512"
            target="_blank"
          >
            github.com/Mercy-2512
          </a>
        </p>
      </div>

      <a
        href="/Mercy Nicholas SE.pdf"
        download
        className="inline-block px-5 py-2 rounded-full bg-sky-500 hover:bg-sky-400 
                   text-slate-900 font-medium transition"
      >
        Download Resume
      </a>
    </section>
  );
}
