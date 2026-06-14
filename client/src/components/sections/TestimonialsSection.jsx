import testimonials from '../../data/testimonials'

const accentClasses = {
  primary:   { bg: 'bg-primary/10',   text: 'text-primary',   dot: 'bg-primary'   },
  accent:    { bg: 'bg-accent/10',    text: 'text-accent',    dot: 'bg-accent'    },
  secondary: { bg: 'bg-secondary/10', text: 'text-secondary', dot: 'bg-secondary' },
}

const StarRow = () => (
  <div className="flex gap-0.5 mb-4">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-amber-400">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
)

const TestimonialCard = ({ quote, name, role, initials, accent }) => {
  const cls = accentClasses[accent]
  return (
    <div className="w-80 shrink-0 bg-white rounded-2xl p-6 border border-border shadow-sm mx-3">
      <StarRow />
      <p className="text-body text-sm leading-relaxed mb-6">"{quote}"</p>
      <div className="flex items-center gap-3">
        <div className={`w-9 h-9 rounded-full ${cls.bg} ${cls.text} flex items-center justify-center text-xs font-bold shrink-0`}>
          {initials}
        </div>
        <div>
          <p className="text-heading text-sm font-bold leading-tight">{name}</p>
          <p className="text-body text-xs">{role}</p>
        </div>
      </div>
    </div>
  )
}

const TestimonialsSection = () => {
  const doubled = [...testimonials, ...testimonials]

  return (
    <section className="py-24 bg-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-14">

        {/* Header — centered */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.2em] uppercase text-primary mb-5 justify-center">
            <span className="block w-8 h-px bg-primary rounded-full" />
            Client Stories
            <span className="block w-8 h-px bg-primary rounded-full" />
          </span>
          <h2 className="text-4xl lg:text-5xl font-black leading-tight tracking-tight text-heading mb-4">
            Trusted by businesses<br />
            <span className="hero-gradient-text">that mean business.</span>
          </h2>
          <p className="text-body text-lg leading-relaxed">
            Real results from real clients — across industries, company sizes, and financial goals.
          </p>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />

        <div className="flex testimonials-marquee">
          {doubled.map((t, i) => (
            <TestimonialCard key={`${t.id}-${i}`} {...t} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
