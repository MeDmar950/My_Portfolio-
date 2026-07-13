import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, MapPin, Mail, CheckCircle, ArrowRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon, TwitterIcon } from '@/components/ui/SocialIcons'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { PERSONAL, SOCIALS } from '@/data/portfolioData'
import { cn } from '@/utils'

const schema = z.object({
  name: z.string().min(2, 'Required'),
  email: z.string().email('Invalid email'),
  message: z.string().min(10, 'Required'),
})

const ICON_MAP = { Github: GithubIcon, Linkedin: LinkedinIcon, Twitter: TwitterIcon, Mail }

const InputField = ({ label, error, className, ...props }) => (
  <div>
    <input
      {...props}
      placeholder={label}
      className={cn(
        'w-full px-0 py-4 bg-transparent border-b border-[var(--border)] transition-all duration-300 outline-none text-[var(--text-primary)] focus:border-[var(--accent)] placeholder:text-[var(--text-muted)]',
        error && 'border-red-500 focus:border-red-500 text-red-500 placeholder:text-red-300',
        className
      )}
    />
  </div>
)

const ContactSection = () => {
  const [status, setStatus] = useState(null)

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data) => {
    try {
      await new Promise((r) => setTimeout(r, 1000))
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section-padding bg-[var(--bg-primary)] border-t border-[var(--border)]">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-12 fade-up">
            <div>
              <h2 className="text-5xl md:text-7xl font-bold text-[var(--text-primary)] tracking-tighter mb-6 leading-tight">
                Let's start a <br/>project together.
              </h2>
              <p className="text-[var(--text-secondary)] text-lg max-w-md">
                Feel free to reach out for collaborations or just a friendly hello.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { label: 'Email', value: PERSONAL.email },
                { label: 'Location', value: PERSONAL.location },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="text-[var(--text-muted)] text-sm font-medium uppercase tracking-widest mb-1">{label}</p>
                  <p className="text-[var(--text-primary)] font-semibold text-lg">{value}</p>
                </div>
              ))}
            </div>

            <div>
              <p className="text-[var(--text-muted)] text-sm font-medium uppercase tracking-widest mb-4">Socials</p>
              <div className="flex gap-4">
                {SOCIALS.map(({ label, url, icon }) => {
                  const Icon = ICON_MAP[icon]
                  return (
                    <a
                      key={label}
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      className="w-12 h-12 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--text-primary)] hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:text-white hover:shadow-[0_0_15px_var(--accent-glow)] transition-all duration-300"
                    >
                      {Icon && <Icon size={18} />}
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="fade-up">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-12 bg-[var(--bg-secondary)] rounded-3xl border border-[var(--border)]">
                <CheckCircle size={48} className="text-[var(--accent)] mb-6 drop-shadow-[0_0_10px_var(--accent-glow)]" />
                <h3 className="text-3xl font-bold mb-4 text-[var(--text-primary)]">Message Sent!</h3>
                <p className="text-[var(--text-secondary)] mb-8">Thanks for reaching out. I'll get back to you soon.</p>
                <button onClick={() => setStatus(null)} className="font-semibold underline underline-offset-4">Send another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <InputField label="What's your name?" error={errors.name} {...register('name')} />
                <InputField label="Your email address" type="email" error={errors.email} {...register('email')} />
                <div>
                  <textarea
                    rows={4}
                    placeholder="Tell me about your project..."
                    {...register('message')}
                    className={cn(
                      'w-full px-0 py-4 bg-transparent border-b border-[var(--border)] transition-all duration-300 outline-none text-[var(--text-primary)] focus:border-[var(--accent)] placeholder:text-[var(--text-muted)] resize-none',
                      errors.message && 'border-red-500 focus:border-red-500 text-red-500'
                    )}
                  />
                </div>

                <button type="submit" disabled={isSubmitting} className="flex items-center gap-2 px-8 py-4 bg-[var(--accent)] hover:bg-[var(--accent-light)] text-white rounded-full text-lg font-bold group hover:shadow-[0_0_20px_var(--accent-glow)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <ArrowRight className="group-hover:translate-x-1 transition-transform" />}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
