import { profile } from '../data/portfolio'

export default function Quote() {
  return (
    <div className="bg-ink text-white dark:bg-white/[0.06]">
      <figure className="mx-auto max-w-3xl px-5 py-14 text-center sm:py-20">
        <blockquote className="font-display text-2xl font-extrabold leading-snug sm:text-4xl">“{profile.quote}”</blockquote>
        <figcaption className="mt-4 text-sm text-white/70">{profile.name}</figcaption>
      </figure>
    </div>
  )
}
