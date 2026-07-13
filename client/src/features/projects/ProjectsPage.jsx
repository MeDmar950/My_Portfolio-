import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, ArrowRight } from 'lucide-react'
import { GithubIcon } from '@/components/ui/SocialIcons'
import { Modal } from '@/components/ui/Modal'
import { PROJECTS, PROJECT_CATEGORIES } from '@/data/portfolioData'

const ProjectCard = ({ project, onClick }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.4 }}
    onClick={() => onClick(project)}
    className="group cursor-pointer flex flex-col bg-[var(--bg-secondary)] border border-[var(--border)] rounded-[2rem] p-4 hover:border-[var(--accent)]/50 hover:shadow-[0_0_30px_var(--accent-glow)] transition-all duration-500"
  >
    <div className="relative overflow-hidden rounded-3xl bg-[var(--bg-primary)] aspect-[16/9] mb-6">
      <img
        src={project.imageUrl}
        alt={project.title}
        loading="lazy"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute top-4 left-4 flex gap-2">
        {project.featured && (
          <span className="text-xs px-3 py-1 bg-[var(--accent)] text-white rounded-full font-medium shadow-sm">Featured</span>
        )}
        <span className="text-xs px-3 py-1 bg-[var(--bg-secondary)]/80 backdrop-blur-md border border-[var(--border)] text-[var(--text-primary)] rounded-full font-medium shadow-sm">{project.category}</span>
      </div>
    </div>

    <div className="px-2 pb-2">
      <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2 tracking-tight group-hover:underline decoration-2 underline-offset-4">{project.title}</h3>
      <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4 line-clamp-2">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="text-xs text-[var(--text-muted)] font-medium">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
)

const ProjectDetailModal = ({ project, onClose }) => (
  <Modal isOpen={!!project} onClose={onClose} title={project?.title}>
    {project && (
      <div className="space-y-6">
        <div className="rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--bg-secondary)]">
          <img src={project.imageUrl} alt={project.title} className="w-full h-64 object-cover" />
        </div>
        
        <p className="text-[var(--text-primary)] text-base leading-relaxed font-medium">{project.longDescription || project.description}</p>
        
        <div className="pt-4 border-t border-[var(--border)]">
          <h4 className="text-sm font-bold text-[var(--text-primary)] mb-3 uppercase tracking-wider">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 text-sm rounded-full bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-secondary)] font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-4 pt-6">
          <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex-1 px-6 py-3 bg-[var(--accent)] hover:bg-[var(--accent-light)] text-white rounded-full font-semibold flex items-center justify-center gap-2 transition-colors shadow-[0_0_15px_var(--accent-glow)]">
            Visit Site <ExternalLink size={16} />
          </a>
          <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex-1 px-6 py-3 bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-primary)] hover:border-[var(--accent)] rounded-full font-semibold flex items-center justify-center gap-2 transition-colors">
            Source Code <GithubIcon size={16} />
          </a>
        </div>
      </div>
    )}
  </Modal>
)

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selected, setSelected] = useState(null)

  const filtered = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="section-padding bg-[var(--bg-primary)]">
      <div className="container-custom">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6 fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] tracking-tight">My Projects</h2>

          <div className="flex flex-wrap gap-2">
            {PROJECT_CATEGORIES.map(({ label, value }) => (
              <button
                key={value}
                onClick={() => setActiveCategory(value)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === value
                    ? 'bg-[var(--accent)] text-white shadow-[0_0_10px_var(--accent-glow)]'
                    : 'bg-transparent text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] border border-transparent hover:border-[var(--border)]'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} onClick={setSelected} />
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-[var(--text-secondary)] text-lg">No projects found.</div>
        )}
      </div>

      <ProjectDetailModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}

export default ProjectsSection
