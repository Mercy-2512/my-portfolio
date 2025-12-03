import Image from "next/image";
export default function Hero() {
  return (
    <section id="home" className="flex flex-col gap-20 lg:flex-row lg:items-center">
      <div className="flex-4 space-y-5">
        <p className="text-sm uppercase tracking-[0.25em] text-sky-400">
          Hi, I'm Mercy Nicholas👋
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
         Implementation Analyst <br></br> Data Engineer <br></br> Frontend Developer
        </h1>
        <p className="text-slate-300 max-w-xl">
          I create clean and responsive user interfaces with a focus on clarity and aesthetics.
At <span className="text-sky-400">Athenahealth</span>, I work on loading and managing data in AthenaDB.
I enjoy combining design, code, and data to build impactful digital experiences.
My goal is to craft solutions that feel simple, intuitive, and meaningful.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="#projects"
            className="rounded-full border border-sky-500 px-5 py-2 text-sm hover:bg-sky-500 hover:text-slate-950 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full bg-slate-800 px-5 py-2 text-sm hover:bg-slate-700 transition"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/*
        <div className="flex-1 mt-8 lg:mt-0 flex justify-center">
          <div className="relative h-48 w-48 sm:h-56 sm:w-56 rounded-full bg-linear-to-br from-sky-500 to-indigo-500 p-[3px]">
            <div className="h-full w-full rounded-full bg-slate-950 flex items-center justify-center text-center px-4">
          <span className="text-sm text-slate-200">
            “Code, coffee, and clean UI.”
          </span>
            </div>
          </div>
        </div>
      */}
      <div className="flex-3 flex justify-center">
        <Image
          src="/m3.jpg"
          width={300}
          height={300}
          alt="Mercy photo"
          className="rounded-2xl border-4 border-blue-400 shadow-lg object-cover"
        />
      </div>
    </section>
  );
}
