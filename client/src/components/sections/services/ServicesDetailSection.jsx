import services from '../../../data/services'

const largeIcons = {
  tax: (
    <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <path d="M14 2v6h6M9 13h6M9 17h4"/>
    </svg>
  ),
  accounting: (
    <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2"/>
      <path d="M8 21h8M12 17v4"/>
      <path d="M7 8v5M12 6v7M17 9v4"/>
    </svg>
  ),
  advisory: (
    <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 17l5-5 4 3 5-6 4 2"/>
      <path d="M21 7l-4 2"/>
    </svg>
  ),
  audit: (
    <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7"/>
      <path d="M21 21l-4.35-4.35M8 11l2 2 4-4"/>
    </svg>
  ),
  payroll: (
    <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  consulting: (
    <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a7 7 0 0 1 5 11.9c-.7.7-1 1.6-1 2.6V17H8v-.5c0-1-.4-1.9-1-2.6A7 7 0 0 1 12 2z"/>
      <path d="M9 21h6M10 17v1M14 17v1"/>
    </svg>
  ),
}

const accentCfg = {
  primary:   { panel: 'bg-primary/10',   iconText: 'text-primary',   numText: 'text-primary/10',   checkBg: 'bg-primary/10',   checkText: 'text-primary',   badge: 'text-primary',   tagBg: 'bg-primary/10',   tagText: 'text-primary'   },
  accent:    { panel: 'bg-accent/10',    iconText: 'text-accent',    numText: 'text-accent/10',    checkBg: 'bg-accent/10',    checkText: 'text-accent',    badge: 'text-accent',    tagBg: 'bg-accent/10',    tagText: 'text-accent'    },
  secondary: { panel: 'bg-secondary/10', iconText: 'text-secondary', numText: 'text-secondary/10', checkBg: 'bg-secondary/10', checkText: 'text-secondary', badge: 'text-secondary', tagBg: 'bg-secondary/10', tagText: 'text-secondary' },
}

const ServiceBlock = ({ service, index }) => {
  const cfg = accentCfg[service.accent]
  const num = String(index + 1).padStart(2, '0')
  const isEven = index % 2 === 0

  const content = (
    <div className="flex flex-col justify-center py-4">
      <div className={`inline-flex items-center gap-3 text-xs font-bold tracking-[0.2em] uppercase ${cfg.badge} mb-5`}>
        <span className="block w-8 h-px bg-current rounded-full" />
        {num}
      </div>
      <h2 className="text-3xl lg:text-4xl font-black text-heading tracking-tight leading-tight mb-5">
        {service.title}
      </h2>
      <p className="text-base lg:text-lg text-body leading-relaxed mb-8">
        {service.description}
      </p>
      <ul className="space-y-3.5">
        {service.details.map((detail, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className={`mt-0.5 w-5 h-5 rounded-full ${cfg.checkBg} ${cfg.checkText} flex items-center justify-center shrink-0`}>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M2 5.5l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span className="text-sm text-body leading-relaxed">{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  )

  const visual = (
    <div className={`relative rounded-3xl ${cfg.panel} p-10 lg:p-14 flex flex-col items-center justify-center min-h-80 overflow-hidden`}>
      <span className={`absolute text-[8rem] font-black ${cfg.numText} select-none leading-none pointer-events-none`}>
        {num}
      </span>
      <div className={`relative z-10 w-24 h-24 rounded-2xl bg-white shadow-md ${cfg.iconText} flex items-center justify-center mb-7`}>
        {largeIcons[service.id]}
      </div>
      <div className="relative z-10 flex flex-wrap gap-2 justify-center">
        {service.tags.map((tag, i) => (
          <span key={i} className={`text-xs font-semibold px-3 py-1.5 rounded-full ${cfg.tagBg} ${cfg.tagText}`}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  )

  return (
    <div id={service.id} className={`py-20 border-b border-border last:border-b-0 ${index % 2 === 1 ? 'bg-surface' : 'bg-bg'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={isEven ? '' : 'lg:order-2'}>{content}</div>
          <div className={isEven ? '' : 'lg:order-1'}>{visual}</div>
        </div>
      </div>
    </div>
  )
}

const ServicesDetailSection = () => (
  <section>
    {services.map((service, index) => (
      <ServiceBlock key={service.id} service={service} index={index} />
    ))}
  </section>
)

export default ServicesDetailSection
