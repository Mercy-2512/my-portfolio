export default function Contact() {
  return (
    <section id="contact" className="space-y-4 pb-10">
      <h2 className="text-2xl font-semibold">Contact</h2>
      <p className="text-slate-300">
        Want to collaborate, hire me, or just talk about code and coffee? ☕
      </p>
      <div className="space-y-2 text-sm text-slate-300">
        <p>Email: <a className="text-sky-400 underline" href="mailto:mercynicholas2512@gmail.com">mercynicholas2512@gmail.com</a></p>
        <p>LinkedIn: <a className="text-sky-400 underline" href="https://www.linkedin.com/in/mercy-nicholas/" target="_blank">https://www.linkedin.com/in/mercy-nicholas/</a></p>
        <p>GitHub: <a className="text-sky-400 underline" href="https://github.com/Mercy-2512" target="_blank">https://github.com/Mercy-2512</a></p>
      </div>
      <a
  href="/Mercy Nicholas SE.pdf"
  download
  className="inline-block px-5 py-2 rounded-full bg-sky-500 hover:bg-sky-400 text-slate-900 font-medium"
>
  Download Resume
</a>

    </section>
  );
}
