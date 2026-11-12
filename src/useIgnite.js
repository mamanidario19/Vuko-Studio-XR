import { useEffect } from 'react'

// Único momento animado de la página: al llegar a los niveles,
// las barras de dificultad se encienden en secuencia.
// Sin JavaScript (o con movimiento reducido) se ven completas desde el inicio.
export function useIgnite() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-ignite]')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || !('IntersectionObserver' in window)) return

    els.forEach((el) => el.classList.add('is-armed'))
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-lit')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.35 }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}
