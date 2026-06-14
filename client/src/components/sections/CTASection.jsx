import { Link } from 'react-router-dom'

const CTASection = () => (
  <section className="relative overflow-hidden py-28">

    {/* Gradient background */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary" />

    {/* Noise/grain overlay for depth */}
    <div
      className="absolute inset-0 opacity-[0.06]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '128px 128px',
      }}
    />

    {/* Soft light orbs */}
    <div className="absolute top-[-60px] left-[15%] w-72 h-72 rounded-full bg-white/20 blur-[90px] pointer-events-none" />
    <div className="absolute bottom-[-40px] right-[12%] w-64 h-64 rounded-full bg-white/15 blur-[80px] pointer-events-none" />

    {/* Large faint wordmark */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
      <span className="text-[clamp(5rem,18vw,14rem)] font-black text-white/[0.05] tracking-tighter leading-none whitespace-nowrap">
        CAPIMETRICS
      </span>
    </div>

    {/* Content */}
    <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">

      <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-white/70 mb-6">
        <span className="block w-5 h-px bg-white/50 rounded-full" />
        Get Started
        <span className="block w-5 h-px bg-white/50 rounded-full" />
      </span>

      <h2 className="text-4xl lg:text-6xl font-black leading-tight tracking-tight text-white mb-6">
        Ready to grow<br />with confidence?
      </h2>

      <p className="text-white/75 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
        Book a free 30-minute strategy call. No pressure, no pitch — just a clear-eyed look at where your finances stand and where they could go.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
        <Link
          to="/contact"
          className="px-8 py-4 rounded-full bg-heading text-white font-bold text-sm tracking-wide transition-all duration-200 hover:bg-heading/85 hover:-translate-y-0.5 hover:shadow-xl"
        >
          Book a Free Call
        </Link>
        <Link
          to="/services"
          className="px-8 py-4 rounded-full border-2 border-white/40 text-white font-bold text-sm tracking-wide transition-all duration-200 hover:border-white hover:bg-white/10 hover:-translate-y-0.5"
        >
          Explore Our Services →
        </Link>
      </div>

      {/* Trust line */}
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/55 text-xs font-medium">
        <span className="flex items-center gap-1.5">
          <span className="w-1 h-1 rounded-full bg-white/40 inline-block" />
          No commitment
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-1 h-1 rounded-full bg-white/40 inline-block" />
          Free consultation
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-1 h-1 rounded-full bg-white/40 inline-block" />
          Fully confidential
        </span>
      </div>

    </div>
  </section>
)

export default CTASection
