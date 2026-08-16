import { useState } from "react";
import {
  Search,
  CalendarCheck,
  MessagesSquare,
  Star,
  UserPlus,
  Wallet,
  BadgeCheck,
  TrendingUp,
} from "lucide-react";

type Persona = "renter" | "talent";

const steps: Record<
  Persona,
  { icon: typeof Search; title: string; body: string }[]
> = {
  renter: [
    {
      icon: Search,
      title: "Search & filter",
      body: "Find talent by skill, price, and availability in minutes.",
    },
    {
      icon: CalendarCheck,
      title: "Book instantly",
      body: "Rent by the hour, day, or project — whatever the work needs.",
    },
    {
      icon: MessagesSquare,
      title: "Work together",
      body: "Collaborate with in-app messaging and clear milestones.",
    },
    {
      icon: Star,
      title: "Rate & rehire",
      body: "Leave a review and book the same talent again, faster.",
    },
  ],
  talent: [
    {
      icon: UserPlus,
      title: "Create your profile",
      body: "Showcase what you can actually do, not just certificates.",
    },
    {
      icon: BadgeCheck,
      title: "Set your terms",
      body: "Choose your rate, availability, and how you want to be booked.",
    },
    {
      icon: Wallet,
      title: "Get booked & paid",
      body: "Accept bookings and get paid securely through the platform.",
    },
    {
      icon: TrendingUp,
      title: "Build your reputation",
      body: "Grow your readiness score and get discovered for more work.",
    },
  ],
};

export default function HowItWorks() {
  const [persona, setPersona] = useState<Persona>("renter");

  return (
    <section id="how-it-works" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            How it works
          </span>
          <h2 className="text-balance mt-3 text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl">
            One platform, two sides of the same bridge
          </h2>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-full border border-ink-900/10 bg-ink-950/3 p-1">
            <button
              onClick={() => setPersona("renter")}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                persona === "renter"
                  ? "bg-ink-950 text-white shadow-sm"
                  : "text-ink-950/60 hover:text-ink-950"
              }`}
            >
              I want to rent a skill
            </button>
            <button
              onClick={() => setPersona("talent")}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                persona === "talent"
                  ? "bg-ink-950 text-white shadow-sm"
                  : "text-ink-950/60 hover:text-ink-950"
              }`}
            >
              I want to list my skill
            </button>
          </div>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps[persona].map(({ icon: Icon, title, body }, i) => (
            <div key={title} className="relative">
              <div className="rounded-2xl border border-ink-900/8 bg-white p-6 h-full">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-linear-to-br from-brand-500 to-accent-500 text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  <Icon size={20} className="text-brand-600" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-ink-950">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-950/60">
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
