import { SERVICES } from '@/data/portfolioData'

const ServiceCard = ({ service, index }) => (
  <div className="group border-t border-[var(--border)] py-12 flex flex-col md:flex-row gap-8 md:gap-16 items-start hover:bg-[var(--bg-secondary)] transition-colors px-6 -mx-6 rounded-3xl">
    <div className="w-16 h-16 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--accent)]/30 text-[var(--accent)] flex items-center justify-center text-3xl shadow-sm shrink-0 group-hover:scale-110 group-hover:shadow-[0_0_20px_var(--accent-glow)] transition-all duration-500">
      {service.icon}
    </div>

    <div className="flex-grow">
      <h3 className="text-3xl font-bold text-[var(--text-primary)] mb-4 tracking-tight">{service.title}</h3>
      <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-6 max-w-2xl">{service.description}</p>
      
      <div className="flex flex-wrap gap-x-8 gap-y-3">
        {service.features.map((f) => (
          <span key={f} className="text-sm font-semibold text-[var(--text-primary)] relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:-translate-x-4 before:w-1.5 before:h-1.5 before:bg-[var(--accent)] before:rounded-full before:shadow-[0_0_8px_var(--accent-glow)] ml-4">
            {f}
          </span>
        ))}
      </div>
    </div>
  </div>
)

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-[var(--bg-primary)]">
      <div className="container-custom">
        <div className="mb-20 fade-up">
          <span className="text-sm font-semibold text-[var(--text-muted)] uppercase tracking-widest block mb-4">What I Do</span>
          <h2 className="text-5xl md:text-6xl font-bold text-[var(--text-primary)] tracking-tighter mb-6">
            My Services
          </h2>
          <p className="text-[var(--text-secondary)] text-xl max-w-2xl">
            Delivering end-to-end digital solutions, from stunning interfaces to robust architectures.
          </p>
        </div>

        <div className="flex flex-col fade-up border-b border-[var(--border)]">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
