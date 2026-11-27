---
title: Trustline
subtitle: One-to-ones, trust, and career paths for engineering managers
description: >-
  Trustline is a free desktop app for engineering managers — one-to-one
  sessions and a career path canvas where each position carries its trust
  tier, kept as files on your own machine. Download for macOS, Windows, and Linux.
needs_tools: true
permalink: /tools/trustline/
lang: en
alt_lang_url: /es/tools/trustline/
---

{% assign t = site.data.tools.en.trustline %}

{{ t.intro }}

## {{ t.download_title }}

{{ t.download_intro }}

{% include components/download-buttons.html %}

<div class="card">
  <h3>{{ t.unsigned_title }}</h3>
  <p>{{ t.unsigned }}</p>
</div>

<div class="card" style="margin: 1.8rem 0; border-left: 4px solid var(--cyan);">
  <h3>📖 User Guide &amp; LAN Protocol Documentation</h3>
  <p>Trustline is the LAN layer of The Engineering Protocol Stack made into software. Learn how to run one-to-ones, build a career path, and keep a read on team health with our complete guide.</p>
  <p><a class="btn btn--primary" href="{{ '/tools/trustline/docs/' | relative_url }}">Explore Trustline Documentation &rarr;</a></p>
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
