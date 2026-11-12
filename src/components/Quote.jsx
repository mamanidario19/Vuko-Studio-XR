import { useState, cloneElement, useId } from 'react'
import { waLink } from '../config.js'
import { SocialIcons } from './Icons.jsx'
import { useLang } from '../i18n.jsx'

const initial = { nombre: '', empresa: '', cargo: '', personas: '', ciudad: '', mensaje: '' }

export default function Quote() {
  const { c } = useLang()
  const q = c.quote
  const F = q.fields
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})
  const [sentLink, setSentLink] = useState(null)

  const set = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }))
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }))
  }

  function validate() {
    const e = {}
    if (!form.nombre.trim()) e.nombre = F.nombre.error
    if (!form.empresa.trim()) e.empresa = F.empresa.error
    if (form.personas === '') e.personas = F.personas.error
    return e
  }

  function onSubmit(ev) {
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length) return

    const m = q.message
    const lines = [
      m.intro,
      '',
      `• ${m.nombre}: ${form.nombre.trim()}`,
      `• ${m.empresa}: ${form.empresa.trim()}`,
      form.cargo.trim() && `• ${m.cargo}: ${form.cargo.trim()}`,
      `• ${m.personas}: ${F.personas.options[Number(form.personas)]}`,
      form.ciudad.trim() && `• ${m.ciudad}: ${form.ciudad.trim()}`,
      form.mensaje.trim() && `• ${m.mensaje}: ${form.mensaje.trim()}`,
    ].filter(Boolean)

    const link = waLink(lines.join('\n'))
    setSentLink(link)
    window.open(link, '_blank', 'noopener')
  }

  // Si cambia el idioma, los errores visibles se traducen.
  const err = (k) => (errors[k] ? F[k].error : undefined)

  return (
    <section className="section quote" id="cotizar">
      <div className="container quote__grid">
        <div className="quote__intro">
          <h2 className="section__title">{q.title} <span className="text-brand">{q.accent}</span></h2>
          <p className="section__lead">{q.lead}</p>
          <a className="quote__direct" href={waLink()} target="_blank" rel="noopener noreferrer">
            <SocialIcons.whatsapp width={22} height={22} />
            {q.direct}
          </a>
        </div>

        <form className="form" onSubmit={onSubmit} noValidate>
          <div className="form__row">
            <Field label={F.nombre.label} error={err('nombre')}>
              <input value={form.nombre} onChange={set('nombre')} autoComplete="name" placeholder={F.nombre.placeholder} />
            </Field>
            <Field label={F.empresa.label} error={err('empresa')}>
              <input value={form.empresa} onChange={set('empresa')} autoComplete="organization" placeholder={F.empresa.placeholder} />
            </Field>
          </div>
          <div className="form__row">
            <Field label={F.cargo.label}>
              <input value={form.cargo} onChange={set('cargo')} autoComplete="organization-title" placeholder={F.cargo.placeholder} />
            </Field>
            <Field label={F.personas.label} error={err('personas')}>
              <select value={form.personas} onChange={set('personas')}>
                <option value="">{F.personas.placeholder}</option>
                {F.personas.options.map((o, i) => <option key={i} value={i}>{o}</option>)}
              </select>
            </Field>
          </div>
          <Field label={F.ciudad.label}>
            <input value={form.ciudad} onChange={set('ciudad')} autoComplete="address-level2" placeholder={F.ciudad.placeholder} />
          </Field>
          <Field label={F.mensaje.label}>
            <textarea rows="4" value={form.mensaje} onChange={set('mensaje')} placeholder={F.mensaje.placeholder} />
          </Field>
          {sentLink && (
            <p className="form__status" role="status">
              {q.status}{' '}
              <a href={sentLink} target="_blank" rel="noopener noreferrer">{q.retry}</a>
            </p>
          )}
          <button type="submit" className="btn btn--dark btn--block">
            <SocialIcons.whatsapp width={20} height={20} />
            {q.submit}
          </button>
        </form>
      </div>
    </section>
  )
}

function Field({ label, error, children }) {
  const errId = useId()
  const control = cloneElement(children, {
    'aria-invalid': error ? true : undefined,
    'aria-describedby': error ? errId : undefined,
  })
  return (
    <label className={`field ${error ? 'field--error' : ''}`}>
      <span className="field__label">{label}</span>
      {control}
      {error && <span className="field__error" id={errId}>{error}</span>}
    </label>
  )
}
