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

<div class="card" style="margin: 1.8rem 0; border-left: 4px solid var(--cyan);">
  <h3>📖 Guía de Usuario y Documentación del Protocolo CPU</h3>
  <p>Threadline es la capa CPU de The Engineering Protocol Stack hecha software. Aprende a dominar la Captura Rápida, el modo Procesar, los Bloques de Enfoque, la Matriz de Eisenhower y los rituales de Revisión con nuestra guía completa.</p>
  <p><a class="btn btn--primary" href="{{ '/tools/threadline/docs/' | relative_url }}">Explorar la Documentación de Threadline &rarr;</a></p>
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
