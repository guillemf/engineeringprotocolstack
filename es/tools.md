---
title: Herramientas
subtitle: Software gratuito construido sobre las capas que describe el libro
description: >-
  Software gratuito construido sobre el framework CPU/LAN/WAN de The
  Engineering Protocol Stack — Trustline, para one-to-ones, confianza y planes
  de carrera, y una autoevaluación de dos minutos del propio stack.
needs_tools: true
permalink: /es/tools/
lang: es
alt_lang_url: /tools/
---

{{ site.data.tools.es.index.intro }}

<div class="tools-grid">
  {% for tool in site.data.tools.es.index.items %}
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
