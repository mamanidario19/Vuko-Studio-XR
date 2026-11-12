import { useState } from 'react'
import { IconPlus } from './Icons.jsx'
import { useLang } from '../i18n.jsx'

export default function FAQ() {
  const { c } = useLang()
  const f = c.faq
  const [open, setOpen] = useState(0)

  return (
    <section className="section section--soft" id="faq">
      <div className="container faq">
        <div className="section__head section__head--left">
          <h2 className="section__title">{f.title} <span className="text-brand">{f.accent}</span></h2>
        </div>
        <div className="faq__list">
          {f.items.map((item, i) => {
            const isOpen = open === i
            return (
              <div className={`faq__item ${isOpen ? 'is-open' : ''}`} key={i}>
                <button
                  className="faq__q"
                  aria-expanded={isOpen}
                  aria-controls={`faq-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  {item.q}
                  <IconPlus className="faq__icon" width={20} height={20} />
                </button>
                <div className="faq__a" id={`faq-${i}`} role="region">
                  <div><p>{item.a}</p></div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
