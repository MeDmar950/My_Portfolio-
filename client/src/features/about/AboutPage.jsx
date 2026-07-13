import { motion } from 'framer-motion'
import { MapPin, Mail } from 'lucide-react'
import { PERSONAL, EXPERIENCE } from '@/data/portfolioData'
import { useInView } from '@/hooks/useInView'

const TimelineItem = ({ item, index }) => {
  const [ref, inView] = useInView({ once: true })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
      className="relative pl-8 pb-12 border-l border-[var(--border)] last:border-transparent last:pb-0"
    >
      <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[var(--text-muted)] border-2 border-[var(--bg-primary)]" />

      <span className="inline-block text-xs font-semibold text-[var(--text-muted)] mb-2 uppercase tracking-widest">
        {item.year}
      </span>

      <h3 className="text-xl md:text-2xl font-bold text-[var(--text-primary)] mb-1 tracking-tight">{item.role}</h3>
      <p className="text-[var(--text-secondary)] font-medium mb-3">@ {item.company}</p>
      <p className="text-[var(--text-secondary)] text-base leading-relaxed mb-4 max-w-2xl">{item.description}</p>

      <div className="flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span key={tag} className="text-xs px-3 py-1 rounded-md bg-[var(--bg-secondary)] text-[var(--text-secondary)] font-medium">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

const AboutSection = () => {
  const [heroRef, heroInView] = useInView({ once: true })

  return (
    <div id="about" className="bg-[var(--bg-primary)]">
      {/* Bio / Info */}
      <section className="section-padding relative">
        <div className="container-custom">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid md:grid-cols-12 gap-16 items-center"
          >
            {/* Minimalist Visual */}
            <div className="md:col-span-5 relative order-2 md:order-1 flex justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl bg-[var(--bg-secondary)] flex items-center justify-center overflow-hidden border border-[var(--border)] shadow-sm">
                <img src="/profile.jpg" alt="Profile" className="w-full h-full  object-cover" />

              </div>
            </div>

            {/* Bio info */}
            <div className="md:col-span-7 order-1 md:order-2 space-y-8 fade-up">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-6">
                  About <span className="text-[var(--text-muted)]">Me.</span>
                </h2>
                <p className="text-[var(--text-secondary)] leading-relaxed text-lg font-normal">
                  {PERSONAL.bio}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[var(--border)]">
                {[
                  { Icon: MapPin, label: 'Location', value: PERSONAL.location },
                  { Icon: Mail, label: 'Email', value: PERSONAL.email },
                ].map(({ Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--bg-secondary)] flex items-center justify-center text-[var(--text-primary)] shrink-0 border border-[var(--border)]">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-semibold mb-0.5">{label}</p>
                      <p className="text-[var(--text-primary)] font-medium text-sm">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="section-padding bg-[var(--bg-secondary)] relative">
        <div className="container-custom">
          <div className="mb-16 fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] tracking-tight">Experience</h2>
          </div>
          <div className="max-w-3xl">
            {EXPERIENCE.map((item, i) => (
              <TimelineItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutSection
