const PageBanner = ({ badge, title, highlight, subtitle }) => (
  <section className="bg-heading relative overflow-hidden py-28">

    {/* Ambient blobs */}
    <div className="absolute top-[-60px] right-[-40px] w-96 h-96 rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
    <div className="absolute bottom-[-40px] left-[-30px] w-72 h-72 rounded-full bg-accent/10 blur-[100px] pointer-events-none" />

    <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
      {badge && (
        <span className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.2em] uppercase text-primary mb-5 justify-center">
          <span className="block w-8 h-px bg-primary rounded-full" />
          {badge}
          <span className="block w-8 h-px bg-primary rounded-full" />
        </span>
      )}
      <h1 className="text-4xl lg:text-6xl font-black leading-tight tracking-tight text-white mb-5">
        {title}
        {highlight && (
          <>
            <br />
            <span className="hero-gradient-text">{highlight}</span>
          </>
        )}
      </h1>
      {subtitle && (
        <p className="text-white/55 text-lg leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  </section>
)

export default PageBanner
