import Logo from "./Logo";

const columns = [
  {
    title: "Product",
    links: [
      { label: "How it works", href: "#how-it-works" },
      { label: "Features", href: "#features" },
      { label: "Who it's for", href: "#audience" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#top" },
      { label: "Careers", href: "#top" },
      { label: "Contact", href: "#waitlist" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy policy", href: "#top" },
      { label: "Terms of service", href: "#top" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-2">
              <Logo className="h-8 w-8" />
              <span className="text-lg font-semibold tracking-tight text-ink-950">
                SkillBridge
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-ink-950/55">
              Rent real skills, on demand. Helping people move from learning
              to earning.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-ink-950">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-ink-950/55 transition hover:text-ink-950"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-ink-900/8 pt-8 text-sm text-ink-950/45 sm:flex-row">
          <p>© {new Date().getFullYear()} SkillBridge. All rights reserved.</p>
          <p>Helping people move from learning to earning.</p>
        </div>
      </div>
    </footer>
  );
}
