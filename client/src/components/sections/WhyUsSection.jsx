import { Link } from 'react-router-dom'

const items = [
  {
    number: '01',
    title: 'Precision-Driven',
    description:
      'Every figure is scrutinized. Every decision is backed by data — not gut feeling, not guesswork.',
  },
  {
    number: '02',
    title: 'Built for Speed',
    description:
      'Month-end closings, tax deadlines, audits on demand — we move fast without cutting a single corner.',
  },
  {
    number: '03',
    title: 'Strategically Minded',
    description:
      "We don't just file paperwork. We advise, forecast, and plan for where your business is going next.",
  },
  {
    number: '04',
    title: 'Client-First, Always',
    description:
      'Your goals shape our priorities. We are a long-term partner — not a vendor you call once a year.',
  },
]

const WhyUsSection = () => (
  <section className="py-24 bg-heading relative overflow-hidden">

    {/* Ambient glows */}
    <div className="absolute top-[-80px] right-[-60px] w-[480px] h-[480px] rounded-full bg-primary/10 blur-[130px] pointer-events-none" />
    <div className="absolute bottom-[-60px] left-[-40px] w-[380px] h-[380px] rounded-full bg-accent/10 blur-[110px] pointer-events-none" />

    <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-[1fr_1.15fr] lg:gap-24 items-start">

        {/* Left: header block */}
        <div className="mb-16 lg:mb-0">
          <span className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.2em] uppercase text-primary mb-5">
            <span className="block w-8 h-px bg-primary rounded-full" />
            Why Us
          </span>
          <h2 className="text-4xl lg:text-5xl font-black leading-tight tracking-tight text-white mb-6">
            The difference you'll<br />
            <span className="hero-gradient-text">feel from day one.</span>
          </h2>
          <p className="text-white/55 text-lg leading-relaxed mb-10">
            Thousands of firms handle numbers. We handle <em className="not-italic text-white/80">your</em> numbers — with intention, clarity, and an eye on what's next.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white font-semibold text-sm border border-white/15 transition-all duration-200 hover:bg-white/[0.16] hover:border-white/25 hover:-translate-y-0.5"
          >
            Meet the team →
          </Link>
        </div>

        {/* Right: stacked value props */}
        <div>
          {items.map((item) => (
            <div
              key={item.number}
              className="group flex items-start gap-6 py-8 border-b border-white/[0.08] last:border-0 last:pb-0 first:pt-0"
            >
              <span className="hero-gradient-text text-5xl font-black leading-none shrink-0 opacity-50 group-hover:opacity-90 transition-opacity duration-300">
                {item.number}
              </span>
              <div className="pt-1">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-white/50 leading-relaxed group-hover:text-white/70 transition-colors duration-200">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  </section>
)

export default WhyUsSection
