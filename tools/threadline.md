---
title: Threadline
subtitle: Capture, decide, and plan your day as an engineering leader
description: >-
  Threadline is a free desktop app for engineering leaders — capture everything that lands on you, decide what it is, and plan your day around the time you actually have, all in one local database on your own machine. Download for macOS, Windows, and Linux.
needs_tools: true
permalink: /tools/threadline/
lang: en
alt_lang_url: /es/tools/threadline/
---

{% assign t = site.data.tools.en.threadline %}

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
