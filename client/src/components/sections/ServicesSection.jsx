import { Link } from 'react-router-dom'
import services from '../../data/services'

const icons = {
  tax: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <path d="M14 2v6h6M9 13h6M9 17h4"/>
    </svg>
  ),
  accounting: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2"/>
      <path d="M8 21h8M12 17v4"/>
      <path d="M7 8v5M12 6v7M17 9v4"/>
    </svg>
  ),
  advisory: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 17l5-5 4 3 5-6 4 2"/>
      <path d="M21 7l-4 2"/>
    </svg>
  ),
  audit: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7"/>
      <path d="M21 21l-4.35-4.35M8 11l2 2 4-4"/>
    </svg>
  ),
  payroll: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  consulting: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a7 7 0 0 1 5 11.9c-.7.7-1 1.6-1 2.6V17H8v-.5c0-1-.4-1.9-1-2.6A7 7 0 0 1 12 2z"/>
      <path d="M9 21h6M10 17v1M14 17v1"/>
    </svg>
  ),
}

const accentClasses = {
  primary:   { bg: 'bg-primary/10',   text: 'text-primary',   border: 'group-hover:border-primary/40'   },
  accent:    { bg: 'bg-accent/10',    text: 'text-accent',    border: 'group-hover:border-accent/40'    },
  secondary: { bg: 'bg-secondary/10', text: 'text-secondary', border: 'group-hover:border-secondary/40' },
}

const ServiceCard = ({ id, title, description, accent }) => {
  const cls = accentClasses[accent]
  return (
    <div className={`group bg-white rounded-2xl p-6 border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${cls.border}`}>
      <div className={`w-11 h-11 rounded-xl ${cls.bg} ${cls.text} flex items-center justify-center mb-5`}>
        {icons[id]}
      </div>
      <h3 className="text-base font-bold text-heading mb-2">{title}</h3>
      <p className="text-sm text-body leading-relaxed mb-5">{description}</p>
      <Link
        to="/services"
        className={`inline-flex items-center gap-1.5 text-sm font-semibold ${cls.text} transition-all`}
      >
        Learn more
        <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
      </Link>
    </div>
  )
}

const ServicesSection = () => (
  <section className="py-24 bg-surface">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">

      {/* Header */}
      <div className="max-w-2xl mb-14">
        <span className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.2em] uppercase text-primary mb-5">
          <span className="block w-8 h-px bg-primary rounded-full" />
          What We Do
        </span>
        <h2 className="text-4xl lg:text-5xl font-black leading-tight tracking-tight text-heading mb-4">
          Every service your<br />
          <span className="hero-gradient-text">business needs to grow.</span>
        </h2>
        <p className="text-lg text-body leading-relaxed">
          From day-to-day bookkeeping to high-level financial strategy — we cover the full spectrum so you can focus on what you do best.
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map(s => <ServiceCard key={s.id} {...s} />)}
      </div>

      {/* Bottom CTA */}
      <div className="mt-12">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-border text-heading font-semibold text-sm tracking-wide transition-all duration-200 hover:border-primary hover:text-primary hover:-translate-y-0.5"
        >
          View all services →
        </Link>
      </div>

    </div>
  </section>
)

export default ServicesSection
