import { config } from '../config.js'
import { SocialIcons, IconExternal } from './Icons.jsx'
import { useLang } from '../i18n.jsx'

export default function Footer() {
  const { c } = useLang()
  const socials = config.socials.filter((s) => s.enabled)
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href={config.mainSite} aria-label="vukostudio.com" target="_blank" rel="noopener noreferrer">
            <img src="/logo-vuko.png" alt="Vuko Studio" width="140" height="59" loading="lazy" />
          </a>
          <p className="footer__tag">{c.footer.tag}</p>
          <a className="footer__site" href={config.mainSite} target="_blank" rel="noopener noreferrer">
            {c.footer.mainSite} <IconExternal width={14} height={14} />
          </a>
        </div>
        <div className="footer__social">
          {socials.map((s) => {
            const Icon = SocialIcons[s.id]
            return (
              <a key={s.id} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label} title={s.label}>
                {Icon && <Icon />}
              </a>
            )
          })}
        </div>
      </div>
      <div className="container footer__bottom">
        <span>© {year} Vuko Studio. {c.footer.rights}</span>
        <span>{c.footer.trademark}</span>
      </div>
    </footer>
  )
}
