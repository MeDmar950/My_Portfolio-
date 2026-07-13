import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'

const LoadingScreen = ({ onComplete }) => {
  const barRef = useRef()
  const textRef = useRef()

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to('.loading-screen', { opacity: 0, duration: 0.5, onComplete })
      },
    })

    tl.to(barRef.current, { width: '100%', duration: 1.8, ease: 'power2.inOut' })
      .to(textRef.current, { opacity: 0, y: -20, duration: 0.3 }, '-=0.2')
  }, [onComplete])

  return (
    <div className="loading-screen fixed inset-0 z-[100] bg-[var(--bg-primary)] flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        ref={textRef}
        className="text-center mb-8"
      >
        <div className="w-20 h-20 rounded-full border-2 border-[var(--accent)]/50 p-1 mx-auto mb-5 overflow-hidden">
          <img src="/profile.jpg" alt="Profile" onError={(e) => { e.target.onerror = null; e.target.src = "https://ui-avatars.com/api/?name=Ziad+Ahmed&background=0f172a&color=38bdf8&size=256"; e.target.style.opacity = 1; }} className="w-full h-full rounded-full object-cover transition-opacity duration-300" />
        </div>
        <p className="text-[var(--text-secondary)] text-sm tracking-widest uppercase animate-pulse">Getting Things Ready...</p>
      </motion.div>

      <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden shadow-sm">
        <div ref={barRef} className="h-full w-0 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] rounded-full shadow-[0_0_15px_var(--accent-glow)]" />
      </div>
    </div>
  )
}

export default LoadingScreen
