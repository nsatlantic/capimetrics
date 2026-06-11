import { Link } from 'react-router-dom'

const bars = [38, 52, 44, 68, 75, 88, 100]

const HeroSection = () => (
  <section className="relative h-screen overflow-hidden">

    {/* Ambient colour blobs */}
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-primary/10 blur-[160px]" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-secondary/10 blur-[130px]" />
      <div className="absolute top-[40%] left-[35%] w-[400px] h-[400px] rounded-full bg-accent/10 blur-[100px]" />
    </div>

    {/* Dot grid */}
    <div className="hero-dot-grid absolute inset-0 pointer-events-none" aria-hidden="true" />

    <div className="relative z-10 h-full flex items-center pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-[1fr_460px] gap-12 xl:gap-20 items-center">

          {/* Left: copy */}
          <div>
            <span className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.2em] uppercase text-primary mb-5">
              <span className="block w-8 h-px bg-primary rounded-full" aria-hidden="true" />
              Accounting &amp; Advisory
            </span>

            <h1 className="text-5xl lg:text-6xl xl:text-[4.5rem] font-black leading-[1.06] tracking-tight text-heading mb-4">
              Numbers that
              <br />
              <span className="hero-gradient-text">drive decisions.</span>
            </h1>

            <p className="text-lg text-body leading-relaxed max-w-lg mb-7">
              Strategic accounting and financial advisory for ambitious businesses.
              We transform complex numbers into clear pathways for growth.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-semibold text-sm tracking-wide transition-all duration-200 hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5"
              >
                Get in Touch <span>→</span>
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border text-heading font-semibold text-sm tracking-wide transition-all duration-200 hover:border-primary hover:text-primary hover:-translate-y-0.5"
              >
                Our Services
              </Link>
            </div>

            {/* Stats row */}
            <div className="flex items-center gap-8 flex-wrap">
              <div>
                <p className="text-2xl font-black text-heading">450+</p>
                <p className="text-sm text-body mt-0.5">Clients Served</p>
              </div>
              <div className="w-px h-8 bg-border" />
              <div>
                <p className="text-2xl font-black text-heading">15+</p>
                <p className="text-sm text-body mt-0.5">Years of Excellence</p>
              </div>
              <div className="w-px h-8 bg-border" />
              <div>
                <p className="text-2xl font-black text-heading">98%</p>
                <p className="text-sm text-body mt-0.5">Retention Rate</p>
              </div>
            </div>
          </div>

          {/* Right: floating card composition */}
          <div className="relative h-[430px] hidden lg:block">

            {/* Soft glow behind cards */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
              <div className="w-64 h-64 rounded-full bg-primary/20 blur-3xl" />
            </div>

            {/* Main chart card — centered */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="hero-card-main bg-white rounded-2xl shadow-2xl p-6 w-[270px]">
                <p className="text-[11px] font-bold tracking-widest uppercase text-body mb-4">Growth Overview</p>
                <div className="flex items-end gap-1.5 mb-5" style={{ height: '88px' }}>
                  {bars.map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t"
                      style={{
                        height: `${h}%`,
                        background: 'linear-gradient(to top, #70c3c5, #90ac83)',
                        opacity: 0.35 + (i / 6) * 0.65,
                      }}
                    />
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-body">Revenue Growth</p>
                    <p className="text-2xl font-black text-heading">+24.6%</p>
                  </div>
                  <span className="px-2.5 py-1 bg-primary/10 text-primary text-[11px] font-bold rounded-full">↑ YoY</span>
                </div>
              </div>
            </div>

            {/* Float card A — top right */}
            <div className="hero-card-float-a absolute top-8 right-6 bg-white rounded-xl shadow-xl p-4 w-[148px]">
              <p className="text-[11px] text-body font-medium mb-1">Tax Saved</p>
              <p className="font-black text-heading leading-none" style={{ fontSize: '1.7rem' }}>$2.1M</p>
              <p className="text-[11px] text-primary font-semibold mt-1.5">for our clients</p>
            </div>

            {/* Float card B — bottom left */}
            <div className="hero-card-float-b absolute bottom-6 left-4 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 8l3 3 7-7" stroke="#90ac83" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p className="text-base font-black text-heading leading-none">98%</p>
                <p className="text-[11px] text-body mt-0.5">Retention Rate</p>
              </div>
            </div>

            {/* Float badge C — mid right */}
            <div className="hero-card-float-c absolute top-[45%] right-0 bg-secondary/10 border border-secondary/30 rounded-full px-4 py-2">
              <p className="text-[11px] font-bold text-secondary whitespace-nowrap">CPA Certified ✦</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
)

export default HeroSection
