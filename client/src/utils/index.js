import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs) => twMerge(clsx(inputs))

export const lerp = (start, end, t) => start + (end - start) * t

export const clamp = (val, min, max) => Math.min(Math.max(val, min), max)

export const mapRange = (val, inMin, inMax, outMin, outMax) =>
  ((val - inMin) / (inMax - inMin)) * (outMax - outMin) + outMin

export const formatDate = (date) =>
  new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long' }).format(new Date(date))

export const delay = (ms) => new Promise((r) => setTimeout(r, ms))

export const debounce = (fn, ms = 300) => {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), ms)
  }
}

export const throttle = (fn, ms = 100) => {
  let last = 0
  return (...args) => {
    const now = Date.now()
    if (now - last >= ms) { last = now; fn(...args) }
  }
}
