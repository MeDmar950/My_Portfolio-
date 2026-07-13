import { useEffect, useRef, lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, ArrowDown, ExternalLink } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { GithubIcon, LinkedinIcon, TwitterIcon } from '@/components/ui/SocialIcons'
import { PERSONAL, STATS, SOCIALS } from '@/data/portfolioData'

// Section Imports
import AboutSection from '@/features/about/AboutPage'
import SkillsSection from '@/features/skills/SkillsPage'
import ProjectsSection from '@/features/projects/ProjectsPage'
import ServicesSection from '@/features/services/ServicesPage'
import ContactSection from '@/features/contact/ContactPage'

gsap.registerPlugin(ScrollTrigger)

const HeroScene = lazy(() => import('@/components/three/HeroScene'))
const ICON_MAP = { Github: GithubIcon, Linkedin: LinkedinIcon, Twitter: TwitterIcon, Mail: ExternalLink }

// Minimalist Stat Component
const StatCard = ({ value, label, index }) => {
  const isNumber = /^\d/.test(value);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center justify-center text-center p-6 border-b md:border-b-0 md:border-r border-[var(--border)] last:border-r-0 last:border-b-0"
    >
      <div className={`${isNumber ? 'text-4xl md:text-5xl' : 'text-2xl md:text-3xl'} font-bold text-[var(--text-primary)] tracking-tight mb-2`}>{value}</div>
      <div className="text-xs md:text-sm font-semibold text-[var(--text-muted)] uppercase tracking-widest">{label}</div>
    </motion.div>
  )
}

const HomePage = () => {
  const containerRef = useRef()
  const heroTextRef = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-line', {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.1,
      })

      const sections = gsap.utils.toArray('section')
      sections.forEach((section) => {
        const targets = section.querySelectorAll('.fade-up')
        if (targets.length > 0) {
          gsap.fromTo(
            targets,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              stagger: 0.1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: section,
                start: 'top 85%',
                toggleActions: 'play none none none',
              },
            }
          )
        }
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-[var(--bg-primary)]">
      <Helmet>
        <title>{PERSONAL.name} — {PERSONAL.title}</title>
        <meta name="description" content={PERSONAL.subtitle} />
      </Helmet>

      {/* ── Hero ───────────────────────────────────────────── */}
      <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-32 pb-12">
        {/* 3D Background */}
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>

        {/* Content */}
        <div className="relative z-10 container-custom text-center pointer-events-none mt-16" ref={heroTextRef}>
          <div className="max-w-4xl mx-auto flex flex-col items-center">

            <div className="hero-line pointer-events-auto flex flex-col items-center gap-4 mb-8">
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full border-[3px] border-[var(--bg-primary)] shadow-2xl p-1 bg-gradient-to-tr from-[var(--accent)] to-zinc-800 flex items-center justify-center overflow-hidden">
                <img src="/profile.jpg" alt="Profile" className="w-full h-full rounded-full object-cover" />
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-secondary)] text-xs font-semibold tracking-wide shadow-sm">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Available for new projects
              </div>
            </div>

            <div className="overflow-hidden mb-6 px-4">
              <h1 className="hero-line text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-[var(--text-primary)] leading-tight">
                {PERSONAL.name}
              </h1>
            </div>

            <div className="overflow-hidden mb-12 px-6">
              <p className="hero-line text-lg sm:text-xl md:text-2xl text-[var(--text-secondary)] font-medium max-w-2xl mx-auto leading-relaxed">
                {PERSONAL.title}.<br />
                {PERSONAL.subtitle}
              </p>
            </div>

            {/* CTAs */}
            <div className="hero-line flex flex-wrap justify-center gap-4 mb-16 pointer-events-auto">
              <a href="#projects" onClick={(e) => {
                e.preventDefault()
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
                className="px-8 py-4 rounded-full bg-[var(--text-primary)] text-[var(--bg-primary)] font-semibold flex items-center gap-2 hover:scale-105 transition-transform"
              >
                View Work <ArrowRight size={18} />
              </a>
              <a href="#contact" onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
                className="px-8 py-4 rounded-full bg-transparent text-[var(--text-primary)] border border-[var(--border)] font-semibold flex items-center gap-2 shadow-sm hover:bg-[var(--bg-secondary)] transition-colors"
              >
                Contact Me
              </a>
            </div>

            {/* Socials */}
            <div className="hero-line flex items-center justify-center gap-6 pointer-events-auto">
              {SOCIALS.map(({ label, url, icon }) => {
                const Icon = ICON_MAP[icon] || ExternalLink
                return (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="text-[var(--text-muted)] hover:text-black transition-colors duration-300"
                  >
                    <Icon size={24} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-[var(--text-muted)] cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ArrowDown size={20} />
        </motion.div>
      </section>

      {/* ── Stats ──────────────────────────────────────────── */}
      <section className="border-y border-[var(--border)] bg-[var(--bg-secondary)] relative z-10">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {STATS.map((s, i) => <StatCard key={s.label} {...s} index={i} />)}
          </div>
        </div>
      </section>

      {/* ── About Section ──────────────────────────────────── */}
      <AboutSection />

      {/* ── Skills Section ─────────────────────────────────── */}
      <SkillsSection />

      {/* ── Projects Section ───────────────────────────────── */}
      <ProjectsSection />

      {/* ── Services Section ───────────────────────────────── */}
      <ServicesSection />

      {/* ── Contact Section ────────────────────────────────── */}
      <ContactSection />
    </div>
  )
}

export default HomePage
