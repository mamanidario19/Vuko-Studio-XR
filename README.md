# Landing · Capacitación VR en uso del extintor (Vuko Studio)

Landing page en **React + Vite** pensada para publicarse en `xr.vukostudio.com`.

## Probar en tu PC

```bash
npm install
npm run dev
```

Abre la dirección que muestra la terminal (normalmente http://localhost:5173).

## Textos e idiomas (ES / EN)

Todos los textos están en **`src/content.js`**, en español (`es`) y en inglés (`en`).
Si cambias un texto, cámbialo en los dos idiomas. El idioma se elige con el selector ES / EN
del menú, se recuerda en el navegador y, la primera vez, se toma del idioma del navegador.

## Diseño

Alineado con vukostudio.com: fondo blanco, Plus Jakarta Sans y Space Grotesk, degradado de marca
(`#781B8A → #B81B73 → #F46924 → #FFA834`) y botones negros tipo píldora. Los colores están al
principio de `src/styles.css`.

## Lo que vas a querer cambiar

Casi todo se edita en **`src/config.js`**:

| Qué | Dónde |
|---|---|
| Número de WhatsApp | `whatsapp` |
| Foto del empleado (sección empresas) | `employeePhoto` |
| Video publicitario | `videoFile`, `videoPoster` (o `videoUrl` para YouTube) |
| Redes visibles en el footer | `socials` → `enabled: true/false` |

Los textos de cada sección están en `src/components/` (por ejemplo, los 3 niveles están en `Sections.jsx`, en la lista `levels`).

### Agregar la foto del empleado
1. Guarda la imagen en `public/`, por ejemplo `public/empleado-vr.png`.
2. En `src/config.js` pon `employeePhoto: '/empleado-vr.png'`.

La foto aparece en la sección "Para empresas", debajo del botón de cotización.
Recomendaciones: persona con ropa de trabajo y el Meta Quest 3 puesto, en acción
(apuntando con un extintor), luz lateral cálida, mínimo 1200 px de ancho.

### Video
El video está en `public/video/lanzamiento-xr.mp4` (1080p, 23 MB) con su portada
`public/video/lanzamiento-xr-poster.webp`. Solo se descarga cuando alguien lo reproduce.
Para cambiarlo, reemplaza esos archivos con el mismo nombre (o cambia las rutas en `src/config.js`).
Si algún día lo suben a YouTube, pega el link en `videoUrl` dentro de `src/config.js` y tendrá prioridad.

## Publicar en xr.vukostudio.com (Vercel + Cloudflare)

1. Sube esta carpeta a un repositorio nuevo de GitHub (o usa `npx vercel` desde la carpeta).
2. En Vercel: **Add New → Project**, importa el repositorio. Vercel detecta Vite solo
   (build: `npm run build`, salida: `dist`).
3. En el proyecto de Vercel: **Settings → Domains → Add** `xr.vukostudio.com`.
4. En Cloudflare (DNS de vukostudio.com) agrega:
   - Tipo `CNAME`, nombre `xr`, destino `cname.vercel-dns.com`.
   - Proxy: **DNS only** (nube gris) para que Vercel emita el certificado SSL sin problemas.
5. Espera unos minutos a que Vercel marque el dominio como válido.

## Formulario de cotización

No necesita servidor: al enviarlo arma un mensaje con los datos y abre WhatsApp listo para enviar
al número configurado.
