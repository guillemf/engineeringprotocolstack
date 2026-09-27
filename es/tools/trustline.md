---
title: Trustline
subtitle: One-to-ones, confianza y planes de carrera para managers de ingeniería
description: >-
  Trustline es una aplicación de escritorio gratuita para managers de
  ingeniería — sesiones one-to-one, niveles de confianza y un canvas de plan de
  carrera, guardados como archivos en tu propio ordenador. Descarga para macOS,
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
