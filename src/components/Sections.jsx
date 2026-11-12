import { IconChart, IconCert, IconClipboard, IconHeadset } from './Icons.jsx'
import { config } from '../config.js'
import { useLang } from '../i18n.jsx'

function SectionHead({ title, accent, lead, align = 'center', dark = false }) {
  return (
    <div className={`section__head ${align === 'left' ? 'section__head--left' : ''}`}>
      <h2 className={`section__title ${dark ? 'section__title--dark' : ''}`}>
        {title} <span className="text-brand">{accent}</span>
      </h2>
      {lead && <p className="section__lead">{lead}</p>}
    </div>
  )
}
export { SectionHead }

/* ───────── Por qué VR: comparación ───────── */
export function WhyVR() {
  const { c } = useLang()
  const w = c.why
  return (
    <section className="section" id="por-que">
      <div className="container">
        <SectionHead title={w.title} accent={w.accent} lead={w.lead} />
        <div className="compare" role="table" aria-label={w.tableLabel} style={{ '--old-prefix': `"${w.oldPrefix}"` }}>
          <div className="compare__row compare__row--head" role="row">
            <span role="columnheader" className="compare__aspect"><span className="sr-only">{w.aspect}</span></span>
            <span role="columnheader" className="compare__old">{w.oldHead}</span>
            <span role="columnheader" className="compare__vr">{w.vrHead}</span>
          </div>
          {w.rows.map((r) => (
            <div className="compare__row" role="row" key={r.aspect}>
              <span role="rowheader" className="compare__aspect">{r.aspect}</span>
              <span role="cell" className="compare__old">{r.old}</span>
              <span role="cell" className="compare__vr">{r.vr}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────── Qué aprende ───────── */
export function Learn() {
  const { c } = useLang()
  const l = c.learn
  return (
    <section className="section section--soft" id="aprende">
      <div className="container">
        <SectionHead title={l.title} accent={l.accent} />
        <div className="learn">
          <div className="learn__block">
            <h3 className="learn__title">{l.passTitle}</h3>
            <p className="learn__sub">{l.passSub}</p>
            <ol className="pass">
              {l.pass.map((p, i) => (
                <li key={i}>
                  <span className="pass__key">{p.k}</span>
                  <div>
                    <strong>{p.t}</strong>
                    <span>{p.d}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="learn__block">
            <h3 className="learn__title">{l.classesTitle}</h3>
            <p className="learn__sub">{l.classesSub}</p>
            <div className="classes">
              {l.classes.map((k) => (
                <div className="classes__item" key={k.c}>
                  <span className="classes__badge">{k.c}</span>
                  <strong>{k.t}</strong>
                  <span>{k.d}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ───────── Niveles ───────── */
export function Levels() {
  const { c } = useLang()
  const lv = c.levels
  return (
    <section className="section" id="niveles">
      <div className="container">
        <SectionHead title={lv.title} accent={lv.accent} lead={lv.lead} />
        <div className="levels" data-ignite>
          {lv.items.map((l, i) => (
            <article className={`level level--${i + 1}`} key={l.n} style={{ '--i': i }}>
              <div className="level__top">
                <span className="level__num">{l.n} —</span>
                <span className="chip">{l.tag}</span>
              </div>
              <h3 className="level__name">{l.name}</h3>
              <p className="level__text">{l.text}</p>
              <ul className="level__list">
                {l.points.map((it) => <li key={it}>{it}</li>)}
              </ul>
              <div className="level__meter" role="img" aria-label={lv.difficulty(i + 1)}>
                {[0, 1, 2].map((b) => (
                  <span key={b} className={b <= i ? 'on' : ''} style={{ '--b': b }} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────── Para empresas ───────── */
const featureIcons = [IconClipboard, IconCert, IconChart, IconHeadset]

export function ForCompanies() {
  const { c } = useLang()
  const co = c.companies
  return (
    <section className="section" id="empresas">
      <div className="container companies">
        <div className="companies__intro">
          <h2 className="section__title">{co.title} <span className="text-brand">{co.accent}</span></h2>
          <p className="section__lead">{co.lead}</p>
          <a href="#cotizar" className="btn btn--dark">{co.cta}</a>
          {config.employeePhoto && (
            <figure className="companies__photo">
              <img src={config.employeePhoto} alt={co.photoAlt} loading="lazy" />
            </figure>
          )}
        </div>
        <ul className="features">
          {co.features.map(({ title, text }, i) => {
            const Icon = featureIcons[i]
            return (
              <li className="feature" key={title}>
                <span className="feature__icon"><Icon /></span>
                <div>
                  <h3 className="feature__title">{title}</h3>
                  <p className="feature__text">{text}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

/* ───────── Lanzamiento ───────── */
export function Launch() {
  const { c } = useLang()
  return (
    <section className="launch">
      <div className="container">
        <div className="launch__box">
          <div>
            <h2 className="launch__title">{c.launch.title}</h2>
            <p className="launch__text">{c.launch.text}</p>
          </div>
          <a href="#cotizar" className="btn btn--dark">{c.launch.cta}</a>
        </div>
      </div>
    </section>
  )
}
