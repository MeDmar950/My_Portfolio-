import { motion } from 'framer-motion'
import { cn } from '@/utils'

export const Card = ({ children, className, hover = true, gradient = false, ...props }) => (
  <motion.div
    whileHover={hover ? { y: -4, scale: 1.01 } : {}}
    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    className={cn(
      'glass rounded-2xl p-6 transition-all duration-300',
      hover && 'hover:glow cursor-pointer',
      gradient && 'gradient-border',
      className
    )}
    {...props}
  >
    {children}
  </motion.div>
)

export const SectionBadge = ({ children, className }) => (
  <span className={cn(
    'inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase',
    'glass border border-[var(--accent)]/30 text-[var(--accent)]',
    className
  )}>
    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
    {children}
  </span>
)

export const SectionHeading = ({ badge, title, subtitle, centered = false, className }) => (
  <div className={cn('mb-12', centered && 'text-center', className)}>
    {badge && <SectionBadge className="mb-4">{badge}</SectionBadge>}
    <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] leading-tight mt-3">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-4 text-[var(--text-secondary)] text-lg max-w-2xl leading-relaxed mx-auto">
        {subtitle}
      </p>
    )}
  </div>
)

export const Divider = ({ className }) => (
  <div className={cn('w-full h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent', className)} />
)
