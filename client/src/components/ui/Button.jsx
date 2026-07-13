import { cn } from '@/utils'
import { motion } from 'framer-motion'

const variants = {
  primary: 'bg-gradient-to-r from-[#6c63ff] to-[#00d4aa] text-white hover:shadow-[0_0_30px_rgba(108,99,255,0.5)] hover:scale-105',
  outline: 'border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white hover:scale-105',
  ghost: 'text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-white/5',
  glass: 'glass text-[var(--text-primary)] hover:border-[var(--accent)] hover:scale-105',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  icon,
  iconPosition = 'right',
  loading,
  ...props
}) => (
  <motion.button
    whileTap={{ scale: 0.97 }}
    className={cn(
      'relative inline-flex items-center gap-2 rounded-xl font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer',
      variants[variant],
      sizes[size],
      className
    )}
    disabled={loading}
    {...props}
  >
    {loading ? (
      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
    ) : (
      <>
        {icon && iconPosition === 'left' && icon}
        {children}
        {icon && iconPosition === 'right' && icon}
      </>
    )}
  </motion.button>
)
