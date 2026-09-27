---
title: Tools
subtitle: Free software built on the layers the book describes
description: >-
  Free software built on the CPU/LAN/WAN framework from The Engineering
  Protocol Stack — Trustline, for one-to-ones, trust, and career paths, and
  a two-minute self-assessment of the stack itself.
needs_tools: true
permalink: /tools/
lang: en
alt_lang_url: /es/tools/
---

{{ site.data.tools.en.index.intro }}

<div class="tools-grid">
  {% for tool in site.data.tools.en.index.items %}
  <div class="service-card tool-card">
    <span class="layer-tag">{{ tool.layer }}</span>
    <h3>{{ tool.name }}</h3>
    <p class="tool-card__tagline">{{ tool.tagline }}</p>
    <ul>
      {% for point in tool.points %}<li>{{ point }}</li>{% endfor %}
    </ul>
    <a class="btn btn-primary" href="{{ tool.url | relative_url }}">{{ tool.cta }}</a>
  </div>
  {% endfor %}
</div>
