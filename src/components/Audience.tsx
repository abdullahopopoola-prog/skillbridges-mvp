import {
  GraduationCap,
  Hammer,
  Laptop,
  Building2,
  Users,
} from "lucide-react";

const audiences = [
  {
    icon: GraduationCap,
    title: "Students & graduates",
    body: "Turn coursework and side skills into real, paid experience.",
  },
  {
    icon: Hammer,
    title: "Artisans",
    body: "Tailors, mechanics, carpenters and more — get booked for jobs nearby.",
  },
  {
    icon: Laptop,
    title: "Freelancers",
    body: "List your services and manage bookings without chasing clients.",
  },
  {
    icon: Building2,
    title: "Businesses",
    body: "Rent vetted talent for short-term needs — no lengthy hiring process.",
  },
  {
    icon: Users,
    title: "Mentors",
    body: "Offer guidance sessions and share expertise on your own schedule.",
  },
];

export default function Audience() {
  return (
    <section id="audience" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Who it's for
          </span>
          <h2 className="text-balance mt-3 text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl">
            Built for everyone with a skill to offer
          </h2>
          <p className="mt-4 text-lg text-ink-950/60">
            Talent shouldn't be limited by background. If you can do the
            work, you belong on SkillBridge.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {audiences.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-2xl border border-ink-900/8 bg-white p-6 text-center transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-ink-950">
                {title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-ink-950/55">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
