import { useTheme } from '@/contexts/ThemeContext'
import { Moon, Sun } from 'lucide-react'

export const ThemeToggle = () => {
  const { isDark, toggle } = useTheme()

  return (
    <button
      onClick={toggle}
      className="fixed bottom-24 right-6 z-50 w-14 h-14 rounded-full glass flex items-center justify-center text-[var(--text-primary)] shadow-lg hover:scale-110 transition-transform duration-300"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}
