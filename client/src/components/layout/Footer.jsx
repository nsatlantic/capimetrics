import { Link } from 'react-router-dom'

const companyLinks = [
  { label: 'About',      path: '/about' },
  { label: 'Services',   path: '/services' },
  { label: 'Industries', path: '/industries' },
  { label: 'Contact',    path: '/contact' },
]

const serviceLinks = [
  { label: 'Tax Planning',       path: '/services' },
  { label: 'Accounting',         path: '/services' },
  { label: 'Business Advisory',  path: '/services' },
  { label: 'Audit & Compliance', path: '/services' },
  { label: 'Payroll',            path: '/services' },
]

const Footer = () => (
  <footer className="bg-heading relative overflow-hidden">

    {/* Gradient top border */}
    <div className="h-px w-full bg-gradient-to-r from-primary via-accent to-secondary" />

    {/* Ambient glow */}
    <div className="absolute bottom-0 left-[30%] w-[500px] h-48 rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

    <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

      {/* Main grid */}
      <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr] gap-12 lg:gap-16">

        {/* Brand column */}
        <div>
          <Link to="/" className="inline-block mb-5">
            <span className="text-2xl font-black tracking-tight hero-gradient-text">
              Capimetrics
            </span>
          </Link>
          <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-7">
            Precision accounting and strategic advisory for businesses that are serious about growth. Based in the US, trusted across industries.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full bg-white/[0.07] border border-white/10 flex items-center justify-center text-white/50 hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all duration-200"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a
              href="#"
              aria-label="X / Twitter"
              className="w-9 h-9 rounded-full bg-white/[0.07] border border-white/10 flex items-center justify-center text-white/50 hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all duration-200"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full bg-white/[0.07] border border-white/10 flex items-center justify-center text-white/50 hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all duration-200"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Company links */}
        <div>
          <p className="text-white text-xs font-bold tracking-[0.18em] uppercase mb-5">Company</p>
          <ul className="space-y-3">
            {companyLinks.map(({ label, path }) => (
              <li key={label}>
                <Link
                  to={path}
                  className="text-white/50 text-sm hover:text-primary transition-colors duration-150"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services links */}
        <div>
          <p className="text-white text-xs font-bold tracking-[0.18em] uppercase mb-5">Services</p>
          <ul className="space-y-3">
            {serviceLinks.map(({ label, path }) => (
              <li key={label}>
                <Link
                  to={path}
                  className="text-white/50 text-sm hover:text-primary transition-colors duration-150"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact column */}
        <div>
          <p className="text-white text-xs font-bold tracking-[0.18em] uppercase mb-5">Get in Touch</p>
          <ul className="space-y-4">
            <li>
              <a href="mailto:hello@capimetrics.com" className="flex items-start gap-2.5 text-white/50 text-sm hover:text-primary transition-colors duration-150 group">
                <svg className="mt-0.5 shrink-0 group-hover:text-primary transition-colors" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                hello@capimetrics.com
              </a>
            </li>
            <li>
              <a href="tel:+15551234567" className="flex items-start gap-2.5 text-white/50 text-sm hover:text-primary transition-colors duration-150 group">
                <svg className="mt-0.5 shrink-0 group-hover:text-primary transition-colors" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.17h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.71 2.81a2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.93-.93a2 2 0 0 1 2.11-.45c.91.35 1.85.58 2.81.71A2 2 0 0 1 22 16.92z"/>
                </svg>
                +1 (555) 123-4567
              </a>
            </li>
            <li>
              <span className="flex items-start gap-2.5 text-white/50 text-sm">
                <svg className="mt-0.5 shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                123 Finance Ave, Suite 400<br />New York, NY 10001
              </span>
            </li>
            <li>
              <span className="flex items-start gap-2.5 text-white/40 text-xs mt-1">
                <svg className="mt-0.5 shrink-0" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                </svg>
                Mon–Fri, 9am – 6pm EST
              </span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.07] py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/30 text-xs">
          © {new Date().getFullYear()} Capimetrics. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          <Link to="#" className="text-white/30 text-xs hover:text-white/60 transition-colors">Privacy Policy</Link>
          <Link to="#" className="text-white/30 text-xs hover:text-white/60 transition-colors">Terms of Service</Link>
        </div>
      </div>

    </div>
  </footer>
)

export default Footer
