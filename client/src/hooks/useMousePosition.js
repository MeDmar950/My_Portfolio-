import { useEffect, useRef } from 'react'

export const useMousePosition = () => {
  const pos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const update = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', update)
    return () => window.removeEventListener('mousemove', update)
  }, [])

  return pos
}
