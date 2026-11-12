import { useLang } from '../i18n.jsx'

export default function LangSwitch({ className = '' }) {
  const { lang, setLang, c } = useLang()
  return (
    <div className={`lang ${className}`} role="group" aria-label={c.nav.language}>
      {['es', 'en'].map((l) => (
        <button
          key={l}
          type="button"
          className={lang === l ? 'is-active' : ''}
          aria-pressed={lang === l}
          lang={l}
          onClick={() => setLang(l)}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
