---
title: Trustline
subtitle: One-to-ones, confianza y planes de carrera para managers de ingeniería
description: >-
  Trustline es una aplicación de escritorio gratuita para managers de
  ingeniería — sesiones one-to-one y un canvas de plan de carrera donde cada posición
  lleva su nivel de confianza, guardados como archivos en tu propio ordenador. Descarga para macOS,
  Windows y Linux.
needs_tools: true
permalink: /es/tools/trustline/
lang: es
alt_lang_url: /tools/trustline/
---

{% assign t = site.data.tools.es.trustline %}

{{ t.intro }}

## {{ t.download_title }}

{{ t.download_intro }}

{% include components/download-buttons.html %}

<div class="card">
  <h3>{{ t.unsigned_title }}</h3>
  <p>{{ t.unsigned }}</p>
</div>

<div class="card" style="margin: 1.8rem 0; border-left: 4px solid var(--cyan);">
  <h3>📖 Guía de Usuario y Documentación del Protocolo LAN</h3>
  <p>Trustline es la capa LAN de The Engineering Protocol Stack hecha software. Aprende a llevar las reuniones uno a uno, construir un plan de carrera y seguir la salud del equipo con nuestra guía completa.</p>
  <p><a class="btn btn--primary" href="{{ '/es/tools/trustline/docs/' | relative_url }}">Explorar la Documentación de Trustline &rarr;</a></p>
</div>

{% if t.screenshots.size > 0 %}
## {{ t.screenshots_title }}

<div class="shots">
  {% for shot in t.screenshots %}
  <figure class="shot">
    <img src="{{ shot.image | relative_url }}" alt="{{ shot.caption }}" loading="lazy">
    <figcaption>{{ shot.caption }}</figcaption>
  </figure>
  {% endfor %}
</div>
{% endif %}

## {{ t.features_title }}

<div class="services-grid">
  {% for feature in t.features %}
  <div class="service-card">
    <h3>{{ feature.title }}</h3>
    <p>{{ feature.text }}</p>
  </div>
  {% endfor %}
</div>

## {{ t.privacy_title }}

{{ t.privacy }}
