import { Hourglass, Shuffle, EyeOff } from "lucide-react";

const points = [
  {
    icon: Hourglass,
    title: "Full-time hiring is overkill",
    body: "Bringing on staff for a two-week project is slow, expensive, and hard to reverse — most short-term work doesn't need it.",
  },
  {
    icon: Shuffle,
    title: "Freelance platforms are unstructured",
    body: "Endless bidding wars, unclear skill levels, and no real signal for who's actually ready to deliver.",
  },
  {
    icon: EyeOff,
    title: "Great talent stays invisible",
    body: "Students, artisans and self-taught experts have real skill but no easy way to be discovered and booked.",
  },
];

export default function Problem() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
          The problem
        </span>
        <h2 className="text-balance mt-3 text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl">
          Hiring for short-term work is broken
        </h2>
        <p className="mt-4 text-lg text-ink-950/60">
          The journey from "I need this done" to "it's done" is fragmented
          across too many platforms and too much guesswork.
        </p>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-3">
        {points.map(({ icon: Icon, title, body }) => (
          <div
            key={title}
            className="rounded-2xl border border-ink-900/8 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
              <Icon size={20} />
            </div>
            <h3 className="mt-5 text-base font-semibold text-ink-950">
              {title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-950/60">
              {body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
