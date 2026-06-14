const PageBanner = ({ badge, title, highlight, subtitle }) => (
  <section className="bg-surface relative overflow-hidden py-28 border-b border-border">

    {/* Dot grid */}
    <div className="hero-dot-grid absolute inset-0 opacity-50 pointer-events-none" />

    {/* Ambient blobs */}
    <div className="absolute top-[-60px] right-[-40px] w-96 h-96 rounded-full bg-primary/20 blur-[120px] pointer-events-none" />
    <div className="absolute bottom-[-40px] left-[-30px] w-72 h-72 rounded-full bg-accent/15 blur-[100px] pointer-events-none" />
    <div className="absolute top-1/2 left-[60%] w-64 h-64 rounded-full bg-secondary/10 blur-[100px] pointer-events-none" />

    <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
      {badge && (
        <span className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.2em] uppercase text-primary mb-5 justify-center">
          <span className="block w-8 h-px bg-primary rounded-full" />
          {badge}
          <span className="block w-8 h-px bg-primary rounded-full" />
        </span>
      )}
      <h1 className="text-4xl lg:text-6xl font-black leading-tight tracking-tight text-heading mb-5">
        {title}
        {highlight && (
          <>
            <br />
            <span className="hero-gradient-text">{highlight}</span>
          </>
        )}
      </h1>
      {subtitle && (
        <p className="text-body text-lg leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  </section>
)

export default PageBanner
