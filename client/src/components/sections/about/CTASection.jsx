import { Link } from 'react-router-dom'

const CTASection = () => (
  <section className="py-20 bg-bg border-t border-border">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
      <div>
        <h3 className="text-2xl lg:text-3xl font-black text-heading mb-2">
          Ready to work with a team<br className="hidden lg:block" /> that actually gets it?
        </h3>
        <p className="text-body">Book a free call — no pitch, just clarity.</p>
      </div>
      <Link
        to="/contact"
        className="shrink-0 px-8 py-4 rounded-full bg-heading text-white font-bold text-sm tracking-wide transition-all duration-200 hover:bg-heading/85 hover:-translate-y-0.5 hover:shadow-xl"
      >
        Get in Touch →
      </Link>
    </div>
  </section>
)

export default CTASection
