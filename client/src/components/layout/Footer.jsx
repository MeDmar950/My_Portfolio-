import { Mail, Heart, Send, Check, Terminal } from 'lucide-react'
import { useState } from 'react'
import { GithubIcon, LinkedinIcon, TwitterIcon } from '@/components/ui/SocialIcons'
import { PERSONAL, SOCIALS, NAV_LINKS } from '@/data/portfolioData'
import toast from 'react-hot-toast'

const ICON_MAP = { Github: GithubIcon, Linkedin: LinkedinIcon, Twitter: TwitterIcon, Mail }

const Footer = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!email) return
    setSubscribed(true)
    toast.success('SYS_CONFIRM: Subscribed successfully.')
    setEmail('')
    setTimeout(() => setSubscribed(false), 3000)
  }

  return (
    <footer className="relative border-t border-[var(--border)] bg-[var(--bg-primary)] overflow-hidden pt-16 pb-8">
      {/* Laser line decoration */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[var(--accent)]/10 border border-[var(--accent)]/30 flex items-center justify-center text-[var(--accent-light)] font-mono-tech font-bold text-xs shadow-[0_0_8px_var(--accent-glow)]">
                <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <span className="font-bold text-md font-mono-tech text-[var(--text-primary)] tracking-wider">
                {PERSONAL.name}
              </span>
            </div>

            <p className="text-[var(--text-secondary)] text-xs font-light leading-relaxed max-w-sm">
              Creative Development & Systems Engineering. Design system integration complete. Immersive WebGL interfaces registered under active protocols.
            </p>

            {/* Newsletter input inside clean tech widget */}
            <div className="max-w-xs space-y-2">
              <span className="block font-mono-tech text-[9px] text-[var(--text-secondary)]">// PROTOCOL: NEWSLETTER_SUBSCRIBE</span>
              <form onSubmit={handleSubscribe} className="flex border border-white/5 bg-white/[0.01] p-1 gap-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@server.com"
                  required
                  className="w-full bg-transparent px-2.5 py-1.5 font-mono-tech text-[10px] outline-none text-[var(--text-primary)] placeholder:text-white/10"
                />
                <button
                  type="submit"
                  className="px-3 bg-[var(--accent)] hover:bg-[var(--accent-light)] text-white flex items-center justify-center cursor-pointer transition-colors duration-200"
                >
                  {subscribed ? <Check size={10} /> : <Send size={10} />}
                </button>
              </form>
            </div>
          </div>

          {/* Diagnostics / Quick Links */}
          <div className="lg:col-span-3 lg:col-start-7 space-y-4">
            <h4 className="font-mono-tech text-xs font-bold text-[var(--accent-light)] uppercase tracking-wider">// SYS_MAP</h4>
            <ul className="space-y-2.5 font-mono-tech text-[11px]">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => {
                      e.preventDefault()
                      const id = href.replace('#', '')
                      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
                      window.history.pushState(null, '', href)
                    }}
                    className="text-[var(--text-secondary)] hover:text-[var(--green)] transition-colors duration-200 cursor-pointer flex items-center gap-1.5"
                  >
                    <span>&gt;</span>
                    <span>{label.toUpperCase()}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials / Technical Contact details */}
          <div className="lg:col-span-3 space-y-4 font-mono-tech text-xs">
            <h4 className="font-mono-tech text-xs font-bold text-[var(--accent-light)] uppercase tracking-wider">// COMM_LINK</h4>
            <div className="space-y-3.5">
              <div>
                <span className="block text-[var(--text-muted)] text-[9px]">// EMAIL</span>
                <a href={`mailto:${PERSONAL.email}`} className="text-[var(--text-primary)] hover:text-[var(--green)] transition-colors">
                  {PERSONAL.email}
                </a>
              </div>
              <div>
                <span className="block text-[var(--text-muted)] text-[9px]">// NODE</span>
                <span className="text-[var(--text-secondary)]">{PERSONAL.location}</span>
              </div>
            </div>

            {/* Flat tech styled social hubs */}
            <div className="flex gap-1.5 pt-2">
              {SOCIALS.map(({ label, url, icon }) => {
                const Icon = ICON_MAP[icon]
                return (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="w-8 h-8 border border-white/5 bg-white/[0.01] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent-light)] hover:border-[var(--accent)]/30 transition-all duration-200"
                  >
                    {Icon && <Icon size={12} />}
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Diagnostic logs strip */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-tech text-[9px] text-[var(--text-muted)]">
          <p className="flex items-center gap-1">
            <span>COPYRIGHT // {new Date().getFullYear()} // BUILD_VER_5.2.0</span>
            <span>-</span>
            <span className="flex items-center gap-0.5 text-[var(--text-secondary)]">
              MADE WITH <Heart size={8} className="text-[var(--pink)] fill-[var(--pink)]" /> BY {PERSONAL.name.toUpperCase()}
            </span>
          </p>
          <div className="flex items-center gap-4">
            <span className="text-[var(--green)] flex items-center gap-1">
              <span className="w-1 h-1 bg-[var(--green)] rounded-full animate-ping" />
              STATUS: SECURE_ACTV
            </span>
            <span>SYSTEM: REACT.JS // THREE.JS</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
