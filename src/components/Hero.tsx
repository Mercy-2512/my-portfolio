import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col-reverse gap-10 lg:flex-row lg:items-center pt-10"
    >
      {/* Left on desktop / below image on mobile: text */}
      <div className="flex-1 space-y-5">
        <p className="text-sm uppercase tracking-[0.25em] text-sky-500">
          Hi, I'm Mercy Nicholas 👋
        </p>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
          Implementation Analyst
          <br />
          Data Engineer
          <br />
          Frontend Developer
        </h1>

        <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 max-w-xl">
          I create clean and responsive user interfaces with a focus on clarity
          and aesthetics. At{" "}
          <span className="font-semibold text-sky-600 dark:text-sky-400">
            Athenahealth
          </span>
          , I work on loading and managing data in AthenaDB. I enjoy combining
          design, code, and data to build impactful digital experiences. My goal
          is to craft solutions that feel simple, intuitive, and meaningful.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="#projects"
            className="rounded-full border border-sky-500 px-5 py-2 text-sm font-medium
                       text-sky-700 hover:bg-sky-500 hover:text-white
                       dark:text-sky-200 dark:hover:bg-sky-400 dark:hover:text-slate-950
                       transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full px-5 py-2 text-sm font-medium
                       bg-slate-900 text-slate-50 hover:bg-slate-800
                       dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200
                       transition"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Right on desktop / top on mobile: toggle + photo *
      <div className="flex-1 flex flex-col items-center gap-4 lg:items-end">
        <ThemeToggle />
*/}
        <div
          className="relative w-56 h-64 sm:w-64 sm:h-72 md:w-72 md:h-80
                     rounded-3xl border-4 border-blue-400 bg-white dark:bg-slate-900
                     shadow-lg overflow-hidden"
        >
          <Image
            src="/m3.jpg"
            alt="Mercy photo"
            fill
            sizes="(min-width: 1024px) 18rem, (min-width: 640px) 16rem, 14rem"
            className="object-cover object-center"
          />
        </div>
    </section>
  );
}
