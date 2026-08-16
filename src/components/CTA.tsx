import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    // Demo only — wire this up to your waitlist/backend of choice.
    setSubmitted(true);
  }

  return (
    <section id="waitlist" className="relative overflow-hidden bg-ink-950 py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 animate-blob rounded-full bg-brand-500/25 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Ready to rent a skill — or get rented?
        </h2>
        <p className="mt-4 text-lg text-white/60">
          We're onboarding early talent and renters right now. Join the list
          and be first in when we open access.
        </p>

        {submitted ? (
          <div className="mx-auto mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white">
            <CheckCircle2 size={18} className="text-brand-400" />
            Thanks — we'll be in touch at {email}.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white placeholder-white/40 outline-none backdrop-blur focus:border-brand-400"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink-950 transition hover:bg-brand-100"
            >
              Join early access
            </button>
          </form>
        )}

        <p className="mt-4 text-xs text-white/40">
          No spam. Just an early invite when SkillBridge opens up.
        </p>
      </div>
    </section>
  );
}
