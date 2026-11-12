import { useEffect, useLayoutEffect, useRef } from 'react'
import { IconPlay } from './Icons.jsx'
import { useLang } from '../i18n.jsx'
import { PLAY_VIDEO_EVENT } from './Video.jsx'

// Partículas de marca: posición, retardo, duración, tamaño y color fijos.
const SPARKS = [
  [8, 0, 11, 6, 'o'], [18, 3.2, 13, 4, 'm'], [27, 6.1, 10, 5, 'v'], [36, 1.4, 14, 4, 'o'],
  [44, 4.6, 12, 7, 'm'], [52, 7.3, 11, 4, 'o'], [58, 2.2, 15, 5, 'v'], [64, 5.5, 10, 6, 'o'],
  [71, 0.8, 13, 4, 'm'], [77, 3.9, 11, 7, 'o'], [83, 6.6, 14, 5, 'v'], [89, 2.7, 12, 4, 'm'],
  [94, 5.0, 11, 6, 'o'], [68, 8.2, 16, 4, 'v'],
]

export default function Hero() {
  const { c, lang } = useLang()
  const ref = useRef(null)
  const firstLine = useRef(null)

  // Medimos la primera línea del título para que la mano del trabajador caiga
  // siempre sobre su última letra, en cualquier idioma y tamaño de pantalla.
  useLayoutEffect(() => {
    const hero = ref.current
    const line = firstLine.current
    if (!hero || !line) return
    const measure = () => hero.style.setProperty('--tw', `${line.getBoundingClientRect().width}px`)
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(line)
    document.fonts?.ready.then(measure)
    return () => ro.disconnect()
  }, [lang])

  // Leve parallax del personaje siguiendo el mouse (solo con mouse y sin movimiento reducido).
  useEffect(() => {
    const el = ref.current
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!el || !fine || reduce) return
    let raf = 0
    let tx = 0, ty = 0, x = 0, y = 0
    const onMove = (e) => {
      const r = el.getBoundingClientRect()
      tx = ((e.clientX - r.left) / r.width - 0.5) * 2
      ty = ((e.clientY - r.top) / r.height - 0.5) * 2
      if (!raf) raf = requestAnimationFrame(tick)
    }
    const tick = () => {
      x += (tx - x) * 0.08
      y += (ty - y) * 0.08
      el.style.setProperty('--px', x.toFixed(3))
      el.style.setProperty('--py', y.toFixed(3))
      raf = Math.abs(tx - x) + Math.abs(ty - y) > 0.002 ? requestAnimationFrame(tick) : 0
    }
    el.addEventListener('pointermove', onMove)
    return () => { el.removeEventListener('pointermove', onMove); cancelAnimationFrame(raf) }
  }, [])

  const [l1, l2] = c.hero.lines

  return (
    <section className="hero" id="inicio" ref={ref}>
      <div className="hero__sparks" aria-hidden="true">
        {SPARKS.map(([l, d, t, s, col], i) => (
          <span key={i} className={`spark spark--${col}`} style={{ '--l': `${l}%`, '--d': `${d}s`, '--dur': `${t}s`, '--s': `${s}px` }} />
        ))}
      </div>

      <div className="container hero__inner">
        <div className="hero__content">
          <div className="hero__glow" aria-hidden="true" />
          {/* Capa 1: el personaje completo, detrás del título */}
          <figure className="hero__figure">
            <img src="/trabajador-vr.webp" alt={c.hero.imageAlt} width="1086" height="1448" fetchpriority="high" />
          </figure>
          {/* Capa 3: solo la mano, por delante del título */}
          <div className="hero__figure hero__figure--front" aria-hidden="true">
            <img src="/trabajador-vr-mano.webp" alt="" width="1086" height="1448" />
          </div>

          <h1 className="hero__title">
            <span className="hero__line" ref={firstLine}>{l1}</span>{' '}
            <span className="hero__line">{l2}</span>{' '}
            <span className="hero__line text-brand">{c.hero.accent}</span>
          </h1>
          <p className="hero__lead">{c.hero.lead}</p>
          <div className="hero__actions">
            <a href="#cotizar" className="btn btn--dark">{c.hero.cta}</a>
            <a href="#video" className="btn btn--light" onClick={() => window.dispatchEvent(new Event(PLAY_VIDEO_EVENT))}>
              <span className="btn__play"><IconPlay width={12} height={12} /></span>
              {c.hero.video}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
