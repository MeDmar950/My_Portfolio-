import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100
        setScrollProgress(Math.round(progress))
      }
      setVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })
    window.history.pushState(null, '', '#home')
  }

  // Circle coordinates
  const radius = 24
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full glass border border-[var(--border)] flex items-center justify-center cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:border-[var(--accent)]/50 group"
          aria-label="Scroll to top"
        >
          {/* SVG Progress Circle */}
          <svg className="w-full h-full transform -rotate-90 absolute inset-0">
            <circle
              cx="28"
              cy="28"
              r={radius}
              className="stroke-white/5"
              strokeWidth="3.5"
              fill="transparent"
            />
            <circle
              cx="28"
              cy="28"
              r={radius}
              className="stroke-[var(--accent)] transition-all duration-100"
              strokeWidth="3.5"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              fill="transparent"
            />
          </svg>

          {/* Icon / Percentage display */}
          <div className="relative flex items-center justify-center">
            <span className="text-[10px] font-bold text-[var(--text-primary)] group-hover:opacity-0 transition-opacity duration-200">
              {scrollProgress}%
            </span>
            <ArrowUp
              size={18}
              className="text-[var(--accent)] opacity-0 group-hover:opacity-100 absolute transition-all duration-200 transform translate-y-1 group-hover:translate-y-0"
            />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollProgress
