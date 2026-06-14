const pillars = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
    title: 'No learning curve',
    body: 'We already know your regulatory environment, typical pain points, and sector-specific tax codes. You never start from scratch.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    title: 'Proactive, not reactive',
    body: 'We flag new compliance rules, tax law changes, and sector trends before they hit your bottom line — not after.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    title: 'A shared language',
    body: 'No explaining your business model from scratch. We speak your industry from day one and give advice that actually fits.',
  },
]

const ExpertiseSection = () => (
  <section className="py-24 bg-surface">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">

      <div className="grid lg:grid-cols-2 gap-16 items-center">

        <div>
          <span className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.2em] uppercase text-primary mb-5">
            <span className="block w-8 h-px bg-primary rounded-full" />
            Why It Matters
          </span>
          <h2 className="text-4xl lg:text-5xl font-black leading-tight tracking-tight text-heading mb-5">
            Sector expertise<br />
            <span className="hero-gradient-text">changes everything.</span>
          </h2>
          <p className="text-lg text-body leading-relaxed">
            A generalist accountant learns your business at your expense. We already know it. Industry specialisation means faster onboarding, sharper advice, and fewer surprises.
          </p>
        </div>

        <div className="space-y-6">
          {pillars.map((p, i) => (
            <div key={i} className="flex gap-5 bg-white rounded-2xl p-6 border border-border">
              <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                {p.icon}
              </div>
              <div>
                <h3 className="text-base font-bold text-heading mb-1.5">{p.title}</h3>
                <p className="text-sm text-body leading-relaxed">{p.body}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  </section>
)

export default ExpertiseSection
