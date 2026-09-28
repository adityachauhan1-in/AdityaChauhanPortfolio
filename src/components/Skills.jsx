import Section from './Section'
import { skills } from '../data/portfolio'

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <dl className="divide-y divide-ink/10 dark:divide-white/10">
        {Object.entries(skills).map(([group, items]) => (
          <div key={group} className="grid gap-2 py-4 sm:grid-cols-[11rem_1fr]">
            <dt className="font-bold">{group}</dt>
            <dd className="flex flex-wrap gap-2">
              {items.map((s) => (
                <span key={s} className="tag">{s}</span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
