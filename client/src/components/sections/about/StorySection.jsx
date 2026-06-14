const stats = [
  { value: '450+',  label: 'Clients Served' },
  { value: '15+',   label: 'Years in Business' },
  { value: '$2.3B', label: 'Revenue Managed' },
  { value: '98%',   label: 'Client Retention' },
]

const StorySection = () => (
  <section className="py-14 bg-bg">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-start">

        {/* Left: story text */}
        <div>
          <span className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.2em] uppercase text-primary mb-5">
            <span className="block w-8 h-px bg-primary rounded-full" />
            Our Story
          </span>
          <h2 className="text-3xl lg:text-4xl font-black leading-tight tracking-tight text-heading mb-6">
            Started with a belief:<br />
            <span className="hero-gradient-text">every business deserves better.</span>
          </h2>
          <div className="space-y-5 text-body leading-relaxed">
            <p>
              Capimetrics was built on a simple observation — small and mid-size businesses were consistently underserved by the accounting industry. Handed off to junior staff, given cookie-cutter advice, and left to figure out the complex parts themselves.
            </p>
            <p>
              We set out to fix that. Every client gets senior-level attention, proactive strategy, and a team that's genuinely invested in where their business is going — not just where it's been.
            </p>
            <p>
              Today we work with 450+ businesses across a dozen industries, from early-stage startups to established companies with complex multi-state operations. The commitment hasn't changed.
            </p>
          </div>
        </div>

        {/* Right: pull quote + stats card */}
        <div className="mt-12 lg:mt-0 space-y-6">
          <blockquote className="bg-surface rounded-2xl overflow-hidden border border-border max-w-xs mx-auto">
            <img
              src="/images/team/tushant.jpg"
              alt="Tushant Nayak"
              className="w-full h-72 object-cover object-top"
            />
            <div className="p-6 border-l-4 border-primary">
              <p className="text-sm text-body leading-relaxed mb-4">
                "Small and mid-size businesses deserve the same quality of financial thinking as Fortune 500 companies. That's why Capimetrics exists."
              </p>
              <cite className="not-italic">
                <p className="text-sm font-bold text-heading">Tushant Nayak</p>
                <p className="text-xs text-body">Managing Partner, CPA</p>
              </cite>
            </div>
          </blockquote>

          <div className="bg-heading rounded-2xl p-6 max-w-xs mx-auto w-full">
            <p className="text-white text-xs font-bold tracking-[0.18em] uppercase mb-4 opacity-50">By the numbers</p>
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <p className="text-3xl font-black hero-gradient-text leading-none mb-1">{value}</p>
                  <p className="text-white/50 text-xs">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
)

export default StorySection
