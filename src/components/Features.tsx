import {
  ShieldCheck,
  Clock3,
  Gauge,
  Lock,
  Sparkles,
  Star,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Verified talent profiles",
    body: "Every listing highlights real, demonstrable skill — not just claims on a résumé.",
  },
  {
    icon: Clock3,
    title: "Flexible rental terms",
    body: "Rent by the hour, the day, or the full project. You set the terms that fit the work.",
  },
  {
    icon: Gauge,
    title: "Skill readiness score",
    body: "A simple score that shows how prepared talent is for the work you need done.",
  },
  {
    icon: Lock,
    title: "Secure payments",
    body: "Bookings and payments happen safely on-platform, protecting both sides.",
  },
  {
    icon: Sparkles,
    title: "Smart matching",
    body: "Get matched with the right talent — or the right opportunity — automatically.",
  },
  {
    icon: Star,
    title: "Ratings & reviews",
    body: "Reputation follows every profile, so trust builds with every booking.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-ink-950 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-400">
            Features
          </span>
          <h2 className="text-balance mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Everything a skills marketplace needs
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Built to make renting and offering skills feel as simple as
            booking a stay.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-white/20 hover:bg-white/7"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-brand-500 to-accent-500 text-white">
                <Icon size={20} />
              </div>
              <h3 className="mt-5 text-base font-semibold text-white">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
