import { profile } from '../data/portfolio'

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute -left-24 top-0 -z-10 h-72 w-72 rounded-full bg-line/20 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -right-20 bottom-0 -z-10 h-72 w-72 rounded-full bg-signal/20 blur-3xl" aria-hidden />
      <section id="top" className="mx-auto max-w-5xl px-5 pb-12 pt-14 sm:pt-20">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_auto]">
          <div>
            <p className="text-sm font-medium text-ink/70 dark:text-slate-400">B.Tech CSE, 2023–2027 · {profile.location}</p>
            <h1 className="mt-3 font-display text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-7xl">{profile.name}</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed">{profile.tagline}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={profile.resume} target="_blank" rel="noreferrer" className="btn-primary">View resume</a>
              <a href="#projects" className="btn-ghost">See projects</a>
              <a href="#contact" className="btn-ghost">Contact me</a>
            </div>
          </div>
          <img
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            className="order-first mx-auto h-52 w-52 rounded-full object-cover object-top ring-4 ring-line ring-offset-4 ring-offset-paper transition duration-300 hover:scale-105 hover:ring-signal sm:h-64 sm:w-64 md:order-last dark:ring-offset-night"
          />
        </div>

        {/* Metro-line route: the roles you are open to, shown as stops */}
        <div className="mt-14" aria-label="Roles open to">
          <p className="mb-4 text-sm font-medium">Open to work as</p>
          <ol className="relative grid grid-cols-2 gap-y-6 sm:grid-cols-4">
            <div className="absolute left-0 right-0 top-[7px] hidden h-1 rounded bg-line sm:block" aria-hidden />
            {profile.openToRoles.map((s) => (
              <li key={s} className="relative pr-3">
                <span className="block h-4 w-4 rounded-full border-4 border-line bg-paper dark:bg-night" aria-hidden />
                <span className="mt-2 block text-sm font-bold">{s}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  )
}
