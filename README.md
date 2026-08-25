# The Engineering Protocol Stack — sitio del libro (ES/EN)

Sitio Jekyll bilingüe (español/inglés) para promocionar el libro
*The Engineering Protocol Stack* de Guillem Fernandez: página de venta,
blog, vídeos, servicios, contacto y biografía del autor. Diseño oscuro con
acentos cian/ámbar, a juego con la portada del libro.

El español vive en la raíz (`/`, `/book/`, `/posts/`...) y el inglés bajo
`/en/` (`/en/`, `/en/book/`, `/en/posts/`...). Cada página tiene un botón
de idioma (ES/EN) en la cabecera que lleva a su traducción exacta.

## Requisitos

- Ruby 3.x
- Bundler (`gem install bundler`)

## Poner el sitio en marcha en local

```bash
bundle install
bundle exec jekyll serve
```

Abre `http://localhost:4000` para la versión en español y
`http://localhost:4000/en/` para la versión en inglés. Con `jekyll serve`
los cambios se recargan automáticamente.

## Cómo funciona el bilingüismo

No usa ningún plugin de internacionalización (no todos están soportados en
GitHub Pages) — es Jekyll estándar con una convención simple:

- **`_data/i18n.yml`** — textos fijos de la interfaz (menú, pie de página,
  botones) en `es:` y `en:`. Los layouts los leen con
  `site.data.i18n[page.lang]`.
- **`page.lang`** — cada página/post declara `lang: es` o `lang: en` en su
  frontmatter (las páginas en español lo heredan por defecto desde
  `_config.yml`, así que solo hace falta declararlo explícito en las
  páginas en inglés).
- **`page.alt_lang_url`** — cada página apunta a la URL exacta de su
  traducción. El botón de idioma del menú usa este campo.
- **Contenido**: cada página existe **dos veces**, una por idioma, como
  archivos Markdown/HTML independientes (no hay traducción automática ni
  en tiempo de build). Así el contenido de cada idioma es 100% editable
  por separado.
- **Posts**: viven todos juntos en `_posts/` (Jekyll solo reconoce esa
  carpeta en la raíz), diferenciados por `lang:` en el frontmatter. Los
  posts en inglés fuerzan su URL con `permalink: /en/posts/AAAA/MM/DD/slug/`
  para caer bajo `/en/`.

## Estructura

```
_config.yml         Configuración del sitio (idioma por defecto, autor, enlace de compra...)
_data/i18n.yml       Textos de interfaz en es/en (menú, pie, botones)
_data/videos.yml     Vídeos mostrados en /videos/ y /en/videos/, con claves es/en
_layouts/            Plantillas: default, home, page, post
_includes/           head (incluye hreflang), header (nav + selector de idioma), footer
_posts/              Entradas del blog ES y EN mezcladas, diferenciadas por `lang:`
assets/css/          Hoja de estilos (main.scss)
assets/images/        Portada del libro y foto de autor

index.html           Portada ES (/)
book.md, about.md, services.md, contact.md, posts.md, videos.md   Páginas ES
404.md               Página 404 ES

en/index.html        Portada EN (/en/)
en/book.md, en/about.md, en/services.md, en/contact.md, en/posts.md, en/videos.md   Páginas EN
en/404.md            Página 404 EN
```

## Qué tienes que personalizar antes de publicar

1. **Formulario de contacto** (`contact.md` y `en/contact.md`): reemplaza
   `YOUR_FORM_ID` por el ID de tu cuenta gratuita en
   [formspree.io](https://formspree.io) (u otro proveedor de formularios
   estáticos) en ambos archivos.
2. **Vídeos** (`_data/videos.yml`): sustituye `TU_ID_DE_VIDEO_AQUI` /
   `YOUR_YOUTUBE_ID_HERE` por los IDs reales de YouTube (la parte final de
   la URL del vídeo) en las dos listas (`es:` y `en:`).
3. **Enlace de compra**: está en `_config.yml`, clave `book.buy_url`
   (ya apunta a tu Leanpub, es el mismo para ambos idiomas).
4. **Dominio**: en `_config.yml`, `url:` — cámbialo si el sitio no vive en
   `myboosterskills.com`.
5. Revisa los posts de ejemplo en `_posts/` — están escritos con contenido
   real del libro a modo de muestra, en ambos idiomas; edítalos, bórralos
   o añade los tuyos.

## Publicar en GitHub Pages

1. Crea un repositorio y sube esta carpeta.
2. En **Settings → Pages**, elige la rama `main` y la carpeta raíz.
3. Si usas un dominio propio, añade un archivo `CNAME` con el dominio y
   configura el DNS.

GitHub Pages soporta `jekyll-feed`, `jekyll-sitemap` y `jekyll-seo-tag`
de forma nativa, así que no necesitas configuración adicional para esos
plugins. El sitemap y el feed incluirán automáticamente las páginas de
ambos idiomas.

## Añadir una entrada al blog

**En español**, crea un archivo en `_posts/` con el nombre
`AAAA-MM-DD-titulo-slug.md`:

```markdown
---
title: "Título del post"
layer: CPU   # CPU, RAM, LAN o WAN (opcional, se muestra como etiqueta)
excerpt: "Resumen corto que aparece en el listado."
alt_lang_url: /en/posts/AAAA/MM/DD/slug-en-ingles/   # opcional, si tiene traducción
---

Contenido del post en Markdown.
```

**En inglés**, crea otro archivo en `_posts/` (misma carpeta) forzando su
URL bajo `/en/`:

```markdown
---
title: "Post title"
layer: CPU
excerpt: "Short summary shown in the listing."
lang: en
permalink: /en/posts/AAAA/MM/DD/slug-in-english/
alt_lang_url: /posts/AAAA/MM/DD/slug-en-espanol/
---

Post content in Markdown.
```

Un post sin traducción es perfectamente válido: simplemente no lleves
`alt_lang_url`, y el botón de idioma de esa página caerá de vuelta a la
home del otro idioma.

## Qué ampliaría primero

- **Newsletter**: capturar emails en la home o al final de cada post
  (Buttondown/ConvertKit tienen buenas integraciones estáticas), con
  formularios separados por idioma.
- **Extracto descargable**: un PDF de muestra (ya tienes el preview) enlazado
  desde `/book/` y `/en/book/` a cambio del email, para generar leads antes
  de la compra.
- **Página de testimonios/reseñas** una vez el libro tenga lectores, también
  en ambos idiomas.
- **Analítica** (Plausible o Fathom, respetuosas con la privacidad) para ver
  qué páginas e idiomas convierten mejor hacia el botón de compra.
