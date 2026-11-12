// ─────────────────────────────────────────────────────────────
//  Configuración editable de la landing.
//  Todo lo que vayas a cambiar seguido está aquí.
// ─────────────────────────────────────────────────────────────

export const config = {
  // Número de WhatsApp en formato internacional, sin "+" ni espacios.
  whatsapp: '543884752131',

  // Foto del empleado usando el visor (sección "Para empresas").
  // Cuando la tengas, ponla en /public (ej: /public/empleado-vr.png)
  // y escribe aquí la ruta: '/empleado-vr.png'.
  // Mientras sea null, esa sección se muestra sin foto.
  employeePhoto: null,

  // Video publicitario.
  // Opción 1 (actual): archivo propio dentro de /public/video.
  videoFile: '/video/lanzamiento-xr.mp4',
  videoPoster: '/video/lanzamiento-xr-poster.webp',
  // Opción 2: si algún día lo suben a YouTube, pega aquí el link y tendrá prioridad.
  videoUrl: null,

  // Redes. Cambia "enabled" a true para mostrarlas en el footer.
  socials: [
    { id: 'instagram', label: 'Instagram', url: 'https://instagram.com/vukostudio', enabled: true },
    { id: 'whatsapp', label: 'WhatsApp', url: 'https://wa.me/543884752131', enabled: true },
    { id: 'tiktok', label: 'TikTok', url: 'https://tiktok.com/@vukostudio', enabled: false },
    { id: 'x', label: 'X', url: 'https://x.com/VukoStudio', enabled: false },
    { id: 'youtube', label: 'YouTube', url: 'https://youtube.com/@VukoStudio', enabled: false },
    { id: 'itch', label: 'itch.io', url: 'https://vukostudio.itch.io/', enabled: false },
  ],

  mainSite: 'https://vukostudio.com',
}

export function waLink(text = '') {
  const base = `https://wa.me/${config.whatsapp}`
  return text ? `${base}?text=${encodeURIComponent(text)}` : base
}

export function youtubeEmbed(url) {
  if (!url) return null
  const m = url.match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/)
  return m ? `https://www.youtube-nocookie.com/embed/${m[1]}?rel=0` : null
}
