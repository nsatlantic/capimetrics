import industries from '../../../data/industries'

const icons = {
  'real-estate': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  ),
  healthcare: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
    </svg>
  ),
  technology: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"/>
      <polyline points="8 6 2 12 8 18"/>
    </svg>
  ),
  professional: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2"/>
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
    </svg>
  ),
  retail: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
      <line x1="3" y1="6" x2="21" y2="6"/>
      <path d="M16 10a4 4 0 0 1-8 0"/>
    </svg>
  ),
  construction: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    </svg>
  ),
  nonprofit: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  ),
  hospitality: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
      <line x1="6" y1="1" x2="6" y2="4"/>
      <line x1="10" y1="1" x2="10" y2="4"/>
      <line x1="14" y1="1" x2="14" y2="4"/>
    </svg>
  ),
}

const accentCls = {
  primary:   { icon: 'bg-primary/10 text-primary',   border: 'hover:border-primary/30',   tag: 'bg-primary/10 text-primary'   },
  accent:    { icon: 'bg-accent/10 text-accent',     border: 'hover:border-accent/30',    tag: 'bg-accent/10 text-accent'    },
  secondary: { icon: 'bg-secondary/10 text-secondary', border: 'hover:border-secondary/30', tag: 'bg-secondary/10 text-secondary' },
}

const IndustryCard = ({ id, title, description, accent, tags }) => {
  const cls = accentCls[accent]
  return (
    <div className={`bg-white rounded-2xl p-6 border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${cls.border} flex flex-col`}>
      <div className={`w-11 h-11 rounded-xl ${cls.icon} flex items-center justify-center mb-5 shrink-0`}>
        {icons[id]}
      </div>
      <h3 className="text-base font-bold text-heading mb-2">{title}</h3>
      <p className="text-sm text-body leading-relaxed mb-5 flex-1">{description}</p>
      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag, i) => (
          <span key={i} className={`text-xs font-semibold px-2.5 py-1 rounded-full ${cls.tag}`}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

const IndustriesSection = () => (
  <section className="py-24 bg-bg">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">

      <div className="max-w-2xl mb-14">
        <span className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.2em] uppercase text-primary mb-5">
          <span className="block w-8 h-px bg-primary rounded-full" />
          Sectors We Serve
        </span>
        <h2 className="text-4xl lg:text-5xl font-black leading-tight tracking-tight text-heading mb-4">
          Eight sectors.<br />
          <span className="hero-gradient-text">Zero generalism.</span>
        </h2>
        <p className="text-lg text-body leading-relaxed">
          We go deep on the industries we work with — not wide. That's how we stay ahead of what matters to you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {industries.map(ind => <IndustryCard key={ind.id} {...ind} />)}
      </div>

    </div>
  </section>
)

export default IndustriesSection
