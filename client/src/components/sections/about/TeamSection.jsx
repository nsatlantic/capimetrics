import team from '../../../data/team'

const accentClasses = {
  primary:   { bg: 'bg-primary/15',   text: 'text-primary'   },
  accent:    { bg: 'bg-accent/15',    text: 'text-accent'    },
  secondary: { bg: 'bg-secondary/15', text: 'text-secondary' },
}

const TeamCard = ({ name, role, bio, initials, accent, photo }) => {
  const cls = accentClasses[accent]
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className={`h-56 ${cls.bg} flex items-center justify-center`}>
        {photo ? (
          <img src={photo} alt={name} className="w-36 h-36 rounded-full object-cover border-4 border-white shadow-md" />
        ) : (
          <div className={`w-28 h-28 rounded-full bg-white ${cls.text} flex items-center justify-center text-3xl font-black shadow-md`}>
            {initials}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-base font-bold text-heading mb-1">{name}</h3>
        <p className={`text-xs font-semibold ${cls.text} mb-3`}>{role}</p>
        <p className="text-sm text-body leading-relaxed">{bio}</p>
      </div>
    </div>
  )
}

const TeamSection = () => (
  <section className="py-24 bg-surface">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">

      <div className="max-w-2xl mb-14">
        <span className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.2em] uppercase text-primary mb-5">
          <span className="block w-8 h-px bg-primary rounded-full" />
          The Team
        </span>
        <h2 className="text-4xl lg:text-5xl font-black leading-tight tracking-tight text-heading mb-4">
          The people behind<br />
          <span className="hero-gradient-text">every number.</span>
        </h2>
        <p className="text-lg text-body leading-relaxed">
          Senior professionals only — no hand-offs to junior staff. You work with the people who know your business.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {team.map(member => <TeamCard key={member.id} {...member} />)}
      </div>

    </div>
  </section>
)

export default TeamSection
