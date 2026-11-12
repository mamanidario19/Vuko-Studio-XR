// Íconos SVG propios (sin dependencias). Usan currentColor.
const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

export const IconChart = (p) => (
  <svg {...base} {...p}><path d="M3 3v18h18" /><path d="M7 15l4-4 3 3 5-6" /></svg>
)
export const IconCert = (p) => (
  <svg {...base} {...p}><circle cx="12" cy="9" r="6" /><path d="M9 14.5L8 22l4-2 4 2-1-7.5" /><path d="M9.5 9l1.8 1.8L14.5 7.5" /></svg>
)
export const IconClipboard = (p) => (
  <svg {...base} {...p}><rect x="5" y="4" width="14" height="17" rx="2" /><path d="M9 4V3h6v1" /><path d="M9 11h6M9 15h4" /></svg>
)
export const IconHeadset = (p) => (
  <svg {...base} {...p}><path d="M3 9.5A2.5 2.5 0 015.5 7h13A2.5 2.5 0 0121 9.5v5a2.5 2.5 0 01-2.5 2.5h-3.2a2 2 0 01-1.7-1l-.9-1.5a1 1 0 00-1.7 0l-.9 1.5a2 2 0 01-1.7 1H5.5A2.5 2.5 0 013 14.5v-5z" /></svg>
)
export const IconPlay = (p) => (
  <svg {...base} fill="currentColor" stroke="none" {...p}><path d="M8 5.5v13a1 1 0 001.5.9l10.4-6.5a1 1 0 000-1.8L9.5 4.6A1 1 0 008 5.5z" /></svg>
)
export const IconExternal = (p) => (
  <svg {...base} {...p}><path d="M7 17L17 7" /><path d="M8 7h9v9" /></svg>
)
export const IconPlus = (p) => (
  <svg {...base} {...p}><path d="M12 5v14M5 12h14" /></svg>
)
export const IconMenu = (p) => (
  <svg {...base} {...p}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
)
export const IconClose = (p) => (
  <svg {...base} {...p}><path d="M6 6l12 12M18 6L6 18" /></svg>
)

// Redes (relleno)
const brand = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'currentColor', 'aria-hidden': true }
export const SocialIcons = {
  instagram: (p) => (
    <svg {...brand} fill="none" stroke="currentColor" strokeWidth="1.9" {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4.2" /><circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" /></svg>
  ),
  whatsapp: (p) => (
    <svg {...brand} {...p}><path d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2zm0 18.2a8.2 8.2 0 01-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1112 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 01-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 00-.7.3 3 3 0 00-.9 2.2 5.2 5.2 0 001.1 2.8 11.9 11.9 0 004.6 4c1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.8-1.2.2-.6.2-1.1.1-1.2l-.5-.2z" /></svg>
  ),
  tiktok: (p) => (
    <svg {...brand} {...p}><path d="M16.6 2h-3.3v13.4a2.9 2.9 0 11-2-2.8V9.2a6.3 6.3 0 105.3 6.2V8.6a7.7 7.7 0 004.4 1.4V6.7a4.4 4.4 0 01-4.4-4.4V2z" /></svg>
  ),
  x: (p) => (
    <svg {...brand} {...p}><path d="M17.8 3h3.1l-6.8 7.7L22 21h-6.2l-4.9-6.4L5.3 21H2.2l7.2-8.3L1.8 3h6.4l4.4 5.8L17.8 3zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5z" /></svg>
  ),
  youtube: (p) => (
    <svg {...brand} {...p}><path d="M23 7.2a3 3 0 00-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 001 7.2 31 31 0 00.6 12a31 31 0 00.4 4.8 3 3 0 002.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 002.1-2.1 31 31 0 00.4-4.8 31 31 0 00-.4-4.8zM9.7 15.1V8.9L15.5 12l-5.8 3.1z" /></svg>
  ),
  itch: (p) => (
    <svg {...brand} {...p}><path d="M3.1 2.9C2 3.5 0 5.8 0 6.4v1c0 1.3 1.2 2.4 2.3 2.4 1.3 0 2.4-1.1 2.4-2.4 0 1.3 1.1 2.4 2.4 2.4s2.3-1.1 2.3-2.4c0 1.3 1.1 2.4 2.5 2.4s2.5-1.1 2.5-2.4c0 1.3 1 2.4 2.3 2.4s2.4-1.1 2.4-2.4c0 1.3 1.1 2.4 2.4 2.4S24 8.7 24 7.4v-1c0-.6-2-2.9-3.1-3.5C17.6 2.8 15.3 2.8 12 2.8s-5.6 0-8.9.1zm6.3 6.3a2.7 2.7 0 01-4.7 0 2.7 2.7 0 01-2.3 1.3c-.2 0-.4 0-.6-.1l-.1 9c0 .8 2.4 1.9 10.3 1.9s10.3-1.1 10.3-1.9l-.1-9c-.2.1-.4.1-.6.1a2.7 2.7 0 01-2.3-1.3 2.7 2.7 0 01-4.7 0 2.7 2.7 0 01-2.6 1.4 2.7 2.7 0 01-2.6-1.4zm-1.9 3.3c.9 0 1.7 0 2.6 1 .7-.1 1.5-.1 1.9-.1s1.2 0 1.9.1c.9-1 1.7-1 2.6-1 .4 0 2.2 0 3.4 3.5l1.3 4.7c1 3.5-.3 3.6-1.9 3.6-2.4-.1-3.7-1.8-3.7-3.5-1.3.2-2.8.3-3.6.3s-2.3-.1-3.6-.3c0 1.7-1.3 3.4-3.7 3.5-1.6 0-2.9-.1-1.9-3.6l1.3-4.7c1.2-3.5 3-3.5 3.4-3.5zM12 15.3s-2.5 2.3-3 3.2l1.6-.1v1.4h2.8v-1.4l1.6.1c-.5-.9-3-3.2-3-3.2z" /></svg>
  ),
}
