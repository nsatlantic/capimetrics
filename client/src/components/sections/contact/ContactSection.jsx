import { useState } from 'react'
import services from '../../../data/services'

const details = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: 'Email',
    value: 'hello@capimetrics.com',
    href: 'mailto:hello@capimetrics.com',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l1.27-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    label: 'Phone',
    value: '+1 (212) 123-4567',
    href: 'tel:+12121234567',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Office',
    value: '523 Hudson Ave, Suite 400\nNew York, NY 10001',
    href: null,
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    label: 'Hours',
    value: 'Mon – Fri, 9am – 6pm EST',
    href: null,
  },
]

const inputCls = 'w-full px-4 py-3 rounded-xl border border-border bg-bg text-heading text-sm placeholder:text-body/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-150'
const labelCls = 'block text-xs font-bold tracking-wide text-heading mb-1.5'

const Field = ({ label, name, type = 'text', placeholder, required }) => (
  <div>
    <label htmlFor={name} className={labelCls}>{label}{required && <span className="text-primary ml-0.5">*</span>}</label>
    <input id={name} name={name} type={type} placeholder={placeholder} required={required} className={inputCls} />
  </div>
)

const ContactSection = () => {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16 items-start">

          {/* Left: contact info */}
          <div className="lg:col-span-2">
            <span className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.2em] uppercase text-primary mb-5">
              <span className="block w-8 h-px bg-primary rounded-full" />
              Get in Touch
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-heading tracking-tight leading-tight mb-4">
              Let's start the<br />conversation.
            </h2>
            <p className="text-body leading-relaxed mb-10">
              Fill in the form and someone from our team — usually Tushant — will come back to you within one business day.
            </p>

            <div className="space-y-4 mb-10">
              {details.map((d, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    {d.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-widest uppercase text-body mb-0.5">{d.label}</p>
                    {d.href ? (
                      <a href={d.href} className="text-sm text-heading font-medium hover:text-primary transition-colors">
                        {d.value}
                      </a>
                    ) : (
                      <p className="text-sm text-heading font-medium whitespace-pre-line">{d.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-surface rounded-2xl p-5 border border-border">
              <p className="text-xs font-bold tracking-widest uppercase text-primary mb-2">What to expect</p>
              <p className="text-sm text-body leading-relaxed">
                We review every message personally and respond within one business day. Your first call is always free — no pitch, no obligation.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-8 lg:p-10 border border-border">
              {sent ? (
                <div className="flex flex-col items-center text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-5">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-black text-heading mb-2">Message sent.</h3>
                  <p className="text-body">We'll be in touch within one business day.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate={false}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Full Name" name="name" placeholder="Jane Smith" required />
                    <Field label="Company" name="company" placeholder="Acme Inc." />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Email" name="email" type="email" placeholder="jane@acme.com" required />
                    <Field label="Phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" />
                  </div>

                  <div>
                    <label htmlFor="service" className={labelCls}>Service of Interest</label>
                    <div className="relative">
                      <select
                        id="service"
                        name="service"
                        className={`${inputCls} appearance-none pr-10`}
                        defaultValue=""
                      >
                        <option value="" disabled>Select a service…</option>
                        {services.map(s => (
                          <option key={s.id} value={s.id}>{s.title}</option>
                        ))}
                        <option value="other">Not sure / Other</option>
                      </select>
                      <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-body">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="6 9 12 15 18 9"/>
                        </svg>
                      </span>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className={labelCls}>Message<span className="text-primary ml-0.5">*</span></label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell us what you're working on and what you're looking for…"
                      required
                      className={`${inputCls} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-heading text-white font-bold text-sm tracking-wide transition-all duration-200 hover:bg-heading/85 hover:shadow-xl"
                  >
                    Send Message →
                  </button>

                  <p className="text-xs text-body/60 text-center">
                    We'll respond within 1 business day. No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ContactSection
