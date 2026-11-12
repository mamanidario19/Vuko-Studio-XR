import { useEffect, useState } from 'react'
import { IconMenu, IconClose, IconExternal } from './Icons.jsx'
import LangSwitch from './LangSwitch.jsx'
import { useLang } from '../i18n.jsx'
import { config } from '../config.js'

export default function Header() {
  const { c } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a href="#inicio" className="header__logo" aria-label="Vuko Studio">
          <img src="/logo-vuko-light.png" alt="Vuko Studio" width="132" height="56" />
        </a>

        <nav className={`nav ${open ? 'nav--open' : ''}`} aria-label="Principal">
          {c.nav.links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href={config.mainSite} className="nav__external" target="_blank" rel="noopener noreferrer">
            {c.nav.mainSite} <IconExternal width={14} height={14} />
          </a>
          <LangSwitch className="nav__lang" />
          <a href="#cotizar" className="btn btn--dark btn--sm nav__cta" onClick={() => setOpen(false)}>
            {c.nav.cta}
          </a>
        </nav>

        <button
          className="header__toggle"
          aria-label={open ? c.nav.closeMenu : c.nav.openMenu}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </div>
    </header>
  )
}
