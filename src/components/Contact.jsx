import Section from './Section'
import { profile, writing } from '../data/portfolio'

export default function Contact() {
  return (
    <>
      <Section id="contact" title="Contact">
        <p className="max-w-xl leading-relaxed">I am open to full-time and internship roles. Email is the fastest way to reach me{profile.showPhone ? ', and you can call for anything urgent.' : '.'}</p>
        <a href={`mailto:${profile.email}`} className="mt-4 inline-block font-display text-2xl font-extrabold text-line underline dark:text-signal">{profile.email}</a>
        {profile.showPhone && <p className="mt-2">Phone (important calls only): {profile.phone}</p>}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {Object.entries(profile.socials).map(([name, url]) => (
            <a key={name} href={url} target="_blank" rel="noreferrer" className="btn-ghost">{name}</a>
          ))}
        </div>
        <p className="mt-8 text-sm">{writing.blurb} <a href={writing.link} target="_blank" rel="noreferrer" className="font-bold underline">Read on Medium</a></p>
      </Section>
      <footer className="mx-auto max-w-5xl px-5 pb-10 text-sm text-ink/70 dark:text-slate-400">© {new Date().getFullYear()} {profile.name}</footer>
    </>
  )
}
