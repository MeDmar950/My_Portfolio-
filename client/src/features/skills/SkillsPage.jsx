import { motion } from 'framer-motion'
import { SKILLS } from '@/data/portfolioData'

const BentoCard = ({ children, className, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95, y: 20 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    whileHover={{ y: -5, scale: 1.02 }}
    className={`glass p-8 relative overflow-hidden group ${className}`}
  >
    {children}
  </motion.div>
)

const SkillsSection = () => {
  // Mapping the SKILLS data to specific bento box shapes
  // Assuming SKILLS has 3 categories: Frontend, Backend, Database
  const frontend = SKILLS[0]
  const backend = SKILLS[1]
  const database = SKILLS[2]

  return (
    <section id="skills" className="section-padding bg-[var(--bg-primary)] relative z-10">
      <div className="container-custom">
        <div className="mb-16 md:text-center fade-up">
          <span className="text-sm font-semibold text-[var(--accent-light)] uppercase tracking-widest block mb-4">My Skills</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] tracking-tight mb-4">What I Know</h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical skills, structured for modern, scalable, and stunning applications.
          </p>
        </div>

        {/* Progress Bar Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Frontend Box */}
          <BentoCard delay={0.1} className="flex flex-col justify-between h-full">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[var(--accent-glow)] rounded-full blur-[80px] pointer-events-none group-hover:scale-150 transition-transform duration-1000" />
            <div className="mb-8">
              <div className="w-14 h-14 rounded-2xl bg-[var(--bg-secondary)] flex items-center justify-center text-2xl mb-6 border border-[var(--border)] shadow-sm text-[var(--text-primary)]">
                {frontend?.icon || '✨'}
              </div>
              <h3 className="text-3xl font-bold text-[var(--text-primary)] tracking-tight mb-2">{frontend?.category || 'Frontend'}</h3>
            </div>
            
            <div className="flex flex-col gap-5 relative z-10">
              {frontend?.items.map((skill) => (
                <div key={skill.name} className="w-full">
                  <div className="flex justify-between text-sm font-semibold mb-2 text-[var(--text-primary)]">
                    <span>{skill.name}</span>
                    <span className="text-[var(--accent-light)]">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2.5 bg-[var(--bg-primary)] border border-[var(--border)] rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </BentoCard>

          {/* Backend Box */}
          <BentoCard delay={0.2} className="flex flex-col justify-between h-full">
            <div className="mb-8">
              <div className="w-14 h-14 rounded-2xl bg-[var(--bg-secondary)] flex items-center justify-center text-2xl mb-6 border border-[var(--border)] shadow-sm text-[var(--text-primary)]">
                {backend?.icon || '⚙️'}
              </div>
              <h3 className="text-3xl font-bold text-[var(--text-primary)] tracking-tight mb-2">{backend?.category || 'Backend'}</h3>
            </div>
            
            <div className="flex flex-col gap-5 relative z-10">
              {backend?.items.map((skill) => (
                <div key={skill.name} className="w-full">
                  <div className="flex justify-between text-sm font-semibold mb-2 text-[var(--text-primary)]">
                    <span>{skill.name}</span>
                    <span className="text-[var(--accent-light)]">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2.5 bg-[var(--bg-primary)] border border-[var(--border)] rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
                      className="h-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </BentoCard>

          {/* Database & Tools Box */}
          <BentoCard delay={0.3} className="flex flex-col justify-between h-full">
            <div className="mb-8">
              <div className="w-14 h-14 rounded-2xl bg-[var(--bg-secondary)] flex items-center justify-center text-2xl mb-6 border border-[var(--border)] shadow-sm text-[var(--text-primary)]">
                {database?.icon || '🛠️'}
              </div>
              <h3 className="text-3xl font-bold text-[var(--text-primary)] tracking-tight mb-2">{database?.category || 'Tools & DBs'}</h3>
            </div>
            
            <div className="flex flex-col gap-5 relative z-10">
              {database?.items.map((skill) => (
                <div key={skill.name} className="w-full">
                  <div className="flex justify-between text-sm font-semibold mb-2 text-[var(--text-primary)]">
                    <span>{skill.name}</span>
                    <span className="text-[var(--accent-light)]">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2.5 bg-[var(--bg-primary)] border border-[var(--border)] rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
                      className="h-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </BentoCard>

        </div>
      </div>
    </section>
  )
}

export default SkillsSection
