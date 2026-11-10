---
title: Threadline
subtitle: Captura, decide y planifica tu día como líder de ingeniería
description: >-
  Threadline es una aplicación de escritorio gratuita para líderes de ingeniería — captura todo lo que te llega, decide qué es y planifica tu día según el tiempo que realmente tienes, todo en una base de datos local en tu propio ordenador. Descarga para macOS, Windows y Linux.
needs_tools: true
permalink: /es/tools/threadline/
lang: es
alt_lang_url: /tools/threadline/
---

{% assign t = site.data.tools.es.threadline %}

<img class="tool-hero" src="{{ '/assets/images/threadline-hero.jpg' | relative_url }}" alt="{{ t.hero_alt }}" width="1376" height="768">

{{ t.intro }}

## {{ t.download_title }}

{{ t.download_intro }}

{% include components/download-buttons.html tool="threadline" %}

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
