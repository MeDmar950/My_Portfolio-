import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Moon, Sun, Download } from 'lucide-react'
import { NAV_LINKS, PERSONAL } from '@/data/portfolioData'
import { cn } from '@/utils'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const location = useLocation()

  useEffect(() => {
    const scrollHandler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', scrollHandler, { passive: true })
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [])

  // Scroll spy implementation using IntersectionObserver
  useEffect(() => {
    const sections = NAV_LINKS.map(link => link.href.replace('#', ''))

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -50% 0px',
      threshold: 0,
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) {
        observer.observe(el)
      }
    })

    return () => observer.disconnect()
  }, [])

  // Handle URL hash on load or path change
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }, 300)
    }
  }, [location])

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    setMobileOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      window.history.pushState(null, '', href)
      setActiveSection(id)
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 inset-x-0 z-40 transition-all duration-500 font-mono-tech',
          scrolled ? 'glass-strong border-b border-[var(--border)] py-3' : 'bg-transparent py-5'
        )}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-2"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-10 h-10 rounded-full border border-[var(--accent)]/50 p-0.5 overflow-hidden shadow-[0_0_10px_var(--accent-glow)]"
            >
              <img src="/profile.jpg" alt="Ziad" className="w-full h-full rounded-full object-cover" />
            </motion.div>
            <span className="font-bold text-[var(--text-primary)] text-sm tracking-wider hidden sm:block">
              {PERSONAL.name.toUpperCase()}
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ label, href }) => {
              const id = href.replace('#', '')
              const isActive = activeSection === id
              return (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => handleLinkClick(e, href)}
                  className={cn(
                    'px-3.5 py-1.5 border text-xs tracking-wider transition-all duration-200',
                    isActive
                      ? 'border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent-light)]'
                      : 'border-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  )}
                >
                  [{label.toUpperCase()}]
                </a>
              )
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <a
              href={PERSONAL.resume}
              download
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 border border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent-light)] text-xs font-semibold hover:bg-[var(--accent)]/20 transition-all duration-300"
            >
              <Download size={12} />
              DOWNLOAD_RES
            </a>

            {/* Mobile Toggle */}
            <button
              className="md:hidden p-2 border border-white/5 bg-white/[0.01] text-[var(--text-secondary)]"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-30 glass-strong md:hidden flex flex-col pt-24 px-6 pb-8"
          >
            {NAV_LINKS.map(({ label, href }, i) => {
              const id = href.replace('#', '')
              const isActive = activeSection === id
              return (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={href}
                    onClick={(e) => handleLinkClick(e, href)}
                    className={cn(
                      'block py-4 text-xl font-bold border-b border-[var(--border)] transition-colors',
                      isActive ? 'text-[var(--accent-light)]' : 'text-[var(--text-primary)]'
                    )}
                  >
                    {label.toUpperCase()}
                  </a>
                </motion.div>
              )
            })}
            <a
              href={PERSONAL.resume}
              download
              className="mt-8 flex items-center justify-center gap-2 py-4 border border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent-light)] font-bold text-sm"
            >
              <Download size={14} />
              DOWNLOAD RESUME
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
