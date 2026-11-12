import { useEffect, useRef, useState } from 'react'
import { config, youtubeEmbed } from '../config.js'
import { IconPlay } from './Icons.jsx'
import { useLang } from '../i18n.jsx'
import { SectionHead } from './Sections.jsx'

// Evento que dispara el botón "Ver video" del hero para empezar la reproducción.
export const PLAY_VIDEO_EVENT = 'vuko:play-video'

export default function Video() {
  const { c } = useLang()
  const v = c.video
  const embed = youtubeEmbed(config.videoUrl)
  const ref = useRef(null)
  const [started, setStarted] = useState(false)

  const play = () => {
    const el = ref.current
    if (!el) return
    setStarted(true)
    el.play().catch(() => {})
  }

  useEffect(() => {
    window.addEventListener(PLAY_VIDEO_EVENT, play)
    return () => window.removeEventListener(PLAY_VIDEO_EVENT, play)
  }, [])

  let media
  if (embed) {
    media = (
      <iframe
        src={embed}
        title={v.iframeTitle}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    )
  } else if (config.videoFile) {
    media = (
      <>
        <video
          ref={ref}
          src={config.videoFile}
          poster={config.videoPoster}
          preload="none"
          playsInline
          controls={started}
          onPlay={() => setStarted(true)}
          title={v.iframeTitle}
        />
        {!started && (
          <button type="button" className="video__start" onClick={play} aria-label={`${v.play} (1:00)`}>
            <span className="video__pill" aria-hidden="true">
              <span className="video__pill-icon"><IconPlay width={16} height={16} /></span>
              <span className="video__pill-label">{v.play}</span>
              <span className="video__pill-time">1:00</span>
            </span>
          </button>
        )}
      </>
    )
  } else {
    media = (
      <div className="video__placeholder">
        <span className="video__play"><IconPlay width={28} height={28} /></span>
        <p className="video__soon">{v.soon}</p>
        <p className="video__hint">{v.hint}</p>
      </div>
    )
  }

  return (
    <section className="section section--dark" id="video">
      <div className="container">
        <SectionHead title={v.title} accent={v.accent} dark />
        <div className="video">{media}</div>
        {v.note && (embed || config.videoFile) && <p className="video__note">{v.note}</p>}
      </div>
    </section>
  )
}
