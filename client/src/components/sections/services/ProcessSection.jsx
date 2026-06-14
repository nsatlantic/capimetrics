const steps = [
  {
    num: '01',
    title: 'Discovery Call',
    description: 'We start by listening — understanding your business, challenges, and goals before recommending anything.',
    accent: 'primary',
  },
  {
    num: '02',
    title: 'Tailored Strategy',
    description: 'We scope exactly what you need and build a plan designed around your situation — nothing generic.',
    accent: 'accent',
  },
  {
    num: '03',
    title: 'Seamless Execution',
    description: 'We take over the workload — delivering accurate, on-time work with clear and proactive communication.',
    accent: 'secondary',
  },
  {
    num: '04',
    title: 'Ongoing Partnership',
    description: 'We stay in your corner month after month, adapting as your business grows and new needs emerge.',
    accent: 'primary',
  },
]

const stepCfg = {
  primary:   { icon: 'bg-primary/10 text-primary'   },
  accent:    { icon: 'bg-accent/10 text-accent'     },
  secondary: { icon: 'bg-secondary/10 text-secondary' },
}

const ProcessSection = () => (
  <section className="py-24 bg-surface">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">

      <div className="max-w-2xl mb-16">
        <span className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.2em] uppercase text-primary mb-5">
          <span className="block w-8 h-px bg-primary rounded-full" />
          How We Work
        </span>
        <h2 className="text-4xl lg:text-5xl font-black leading-tight tracking-tight text-heading mb-4">
          From first call to<br />
          <span className="hero-gradient-text">lasting results.</span>
        </h2>
        <p className="text-lg text-body leading-relaxed">
          A clear, structured process — so you always know where things stand and what comes next.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {steps.map((step) => (
          <div key={step.num} className="bg-white rounded-2xl p-8 border border-border">
            <div className={`w-12 h-12 rounded-xl ${stepCfg[step.accent].icon} flex items-center justify-center font-black text-sm tracking-widest mb-6`}>
              {step.num}
            </div>
            <h3 className="text-lg font-bold text-heading mb-3">{step.title}</h3>
            <p className="text-sm text-body leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>

    </div>
  </section>
)

export default ProcessSection
