import { useEffect, useRef } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

const CustomCursor = () => {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const springConfig = { damping: 25, stiffness: 700 }
  const x = useSpring(cursorX, springConfig)
  const y = useSpring(cursorY, springConfig)
  const dotX = useSpring(cursorX, { damping: 40, stiffness: 900 })
  const dotY = useSpring(cursorY, { damping: 40, stiffness: 900 })

  useEffect(() => {
    // Only show on desktop
    if (window.matchMedia('(pointer: coarse)').matches) return

    const move = (e) => {
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)
      dotX.set(e.clientX - 4)
      dotY.set(e.clientY - 4)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [cursorX, cursorY, dotX, dotY])

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[var(--accent)] pointer-events-none z-[999] mix-blend-difference"
        style={{ x, y }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[var(--accent)] pointer-events-none z-[999]"
        style={{ x: dotX, y: dotY }}
      />
    </>
  )
}

export default CustomCursor
