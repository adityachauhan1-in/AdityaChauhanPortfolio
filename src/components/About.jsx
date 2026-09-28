import Section from './Section'
import { profile, education, achievements } from '../data/portfolio'

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-4 leading-relaxed">
          <p>{profile.about}</p>
          <p><strong>Where I am headed:</strong> {profile.ambition}</p>
          <p><strong>Languages I speak:</strong> {profile.languages.join(', ')}</p>
        </div>
        <div>
          <h3 className="font-display text-xl font-extrabold">Education</h3>
          <ul className="mt-4 space-y-4 border-l-4 border-line pl-5">
            {education.map((e) => (
              <li key={e.degree}>
                <p className="font-bold">{e.degree}</p>
                <p className="text-sm">{e.org}</p>
                <p className="text-sm text-ink/70 dark:text-slate-400">{e.period}</p>
              </li>
            ))}
          </ul>
          <h3 className="mt-8 font-display text-xl font-extrabold">Achievement</h3>
          <ul className="mt-3 list-disc space-y-1 pl-5">{achievements.map((a) => <li key={a}>{a}</li>)}</ul>
        </div>
      </div>
    </Section>
  )
}
