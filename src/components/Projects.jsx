import Section from './Section'
import { projects } from '../data/portfolio'

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="space-y-8">
        {projects.map((p) => (
          <article key={p.name} className="card">
            <h3 className="font-display text-2xl font-extrabold">{p.name}</h3>
            <p className="text-sm text-ink/70 dark:text-slate-400">{p.subtitle}</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed">{p.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.stack.map((s) => <span key={s} className="rounded-md bg-ink/[0.07] px-2.5 py-1 text-xs dark:bg-white/10">{s}</span>)}
            </div>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              {p.live && <a href={p.live} target="_blank" rel="noreferrer" className="btn-primary">Live demo</a>}
              {p.github && <a href={p.github} target="_blank" rel="noreferrer" className="btn-ghost">GitHub</a>}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
