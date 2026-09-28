import Section from './Section'
import { experience } from '../data/portfolio'

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ul className="space-y-8 border-l-4 border-line pl-6">
        {experience.map((x) => (
          <li key={x.role + x.period} className="relative">
            <span className="absolute -left-[38px] top-1.5 h-4 w-4 rounded-full border-4 border-line bg-paper dark:bg-night" aria-hidden />
            <p className="text-sm text-ink/70 dark:text-slate-400">{x.period}</p>
            <h3 className="font-display text-xl font-extrabold">{x.role}</h3>
            <p className="font-medium">{x.org}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 leading-relaxed">{x.points.map((p) => <li key={p}>{p}</li>)}</ul>
            {x.link && <a href={x.link} target="_blank" rel="noreferrer" className="btn-ghost mt-4">View certificate</a>}
          </li>
        ))}
      </ul>
    </Section>
  )
}
