import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { SectionHeading } from '@/components/ui/Card'
import { TESTIMONIALS } from '@/data/portfolioData'

const StarRating = ({ rating }) => (
  <div className="flex gap-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} size={14} className={i < rating ? 'text-[#ffd700] fill-[#ffd700]' : 'text-white/20'} />
    ))}
  </div>
)

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const go = useCallback((dir) => {
    setDirection(dir)
    setCurrent((c) => (c + dir + TESTIMONIALS.length) % TESTIMONIALS.length)
  }, [])

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => go(1), 6000)
    return () => clearInterval(timer)
  }, [go])

  const t = TESTIMONIALS[current]

  return (
    <section id="testimonials" className="section-padding border-b border-[var(--border)]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <SectionHeading
            badge="Social Proof"
            title={<>Client <span className="gradient-text">Testimonials</span></>}
            subtitle="Hear directly from the clients and colleagues I've had the pleasure of working with."
            centered
          />
        </div>

        {/* Featured Slider */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 60 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="glass-strong rounded-3xl p-10 md:p-14 text-center"
              >
                <Quote size={40} className="text-[var(--accent)]/30 mx-auto mb-6" />
                <p className="text-xl md:text-2xl text-[var(--text-primary)] leading-relaxed font-medium mb-8">
                  "{t.content}"
                </p>
                <StarRating rating={t.rating} />
                <div className="mt-6 flex items-center justify-center gap-4">
                  <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-[var(--accent)]" />
                  <div className="text-left">
                    <p className="font-bold text-[var(--text-primary)]">{t.name}</p>
                    <p className="text-[var(--text-secondary)] text-sm">{t.role} @ {t.company}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button onClick={() => go(-1)} className="p-3 glass rounded-xl text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors cursor-pointer">
                <ChevronLeft size={20} />
              </button>

              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${i === current ? 'w-6 h-2 bg-[var(--accent)]' : 'w-2 h-2 bg-white/20 hover:bg-white/40'}`}
                />
              ))}

              <button onClick={() => go(1)} className="p-3 glass rounded-xl text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors cursor-pointer">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div>
          <h3 className="text-center text-[var(--text-secondary)] text-sm uppercase tracking-widest mb-10">All Reviews</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="glass rounded-2xl p-6"
              >
                <StarRating rating={t.rating} />
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed my-4 line-clamp-4">"{t.content}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-[var(--border)]">
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-[var(--text-primary)] text-sm">{t.name}</p>
                    <p className="text-[var(--text-secondary)] text-xs">{t.role}, {t.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
