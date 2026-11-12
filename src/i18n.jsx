import { createContext, useContext, useEffect, useState } from 'react'
import { content } from './content.js'

const LangContext = createContext(null)
const KEY = 'vuko-xr-lang'

function initialLang() {
  try {
    const saved = localStorage.getItem(KEY)
    if (saved === 'es' || saved === 'en') return saved
  } catch { /* sin almacenamiento disponible */ }
  const nav = (navigator.language || 'es').toLowerCase()
  return nav.startsWith('es') ? 'es' : 'en'
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(initialLang)

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = content[lang].meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', content[lang].meta.description)
    try { localStorage.setItem(KEY, lang) } catch { /* sin almacenamiento disponible */ }
  }, [lang])

  return (
    <LangContext.Provider value={{ lang, setLang, c: content[lang] }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
