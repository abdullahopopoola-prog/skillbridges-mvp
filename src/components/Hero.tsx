import { ArrowRight, Sparkles, ShieldCheck, Clock3 } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink-950">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-96 w-96 animate-blob rounded-full bg-brand-500/30 blur-3xl" />
        <div className="absolute top-40 -right-24 h-96 w-96 animate-blob rounded-full bg-accent-500/20 blur-3xl anim-delay-300" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(11,12,23,0.9))]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-24 sm:pt-24 sm:pb-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="animate-fade-up mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-white/80 backdrop-blur">
            <Sparkles size={14} className="text-accent-400" />
            Early access — onboarding first talent &amp; renters now
          </div>

          <h1 className="animate-fade-up anim-delay-150 mt-6 text-balance text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Rent real skills,
            <br />
            <span className="gradient-text">not just résumés.</span>
          </h1>

          <p className="animate-fade-up anim-delay-300 mx-auto mt-6 max-w-xl text-balance text-lg text-white/60">
            SkillBridge is a marketplace where you rent verified talent by the
            hour, day, or project — and where skilled people, from students
            to artisans, get discovered and booked. No long hiring cycles.
            No fragmented platforms.
          </p>

          <div className="animate-fade-up anim-delay-450 mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#waitlist"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink-950 transition hover:bg-brand-100 sm:w-auto"
            >
              Find a skill to rent
              <ArrowRight
                size={16}
                className="transition group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#waitlist"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10 sm:w-auto"
            >
              List your skill
            </a>
          </div>

          <div className="animate-fade-up anim-delay-450 mt-14 flex flex-col items-center justify-center gap-x-8 gap-y-4 text-sm text-white/50 sm:flex-row">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck size={16} className="text-brand-400" />
              Verified talent profiles
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock3 size={16} className="text-brand-400" />
              Rent by the hour, day, or project
            </span>
            <span className="inline-flex items-center gap-2">
              <Sparkles size={16} className="text-brand-400" />
              Built for students, artisans &amp; freelancers
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
