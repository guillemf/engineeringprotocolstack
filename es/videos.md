---
title: Vídeos
subtitle: Charlas, explicaciones y extractos en vídeo del framework del libro
description: >-
  Charlas, explicaciones y extractos en vídeo sobre el framework
  CPU/LAN/WAN de The Engineering Protocol Stack.
permalink: /es/videos/
layout: page
lang: es
alt_lang_url: /videos/
---

<div class="video-grid">
  {% for video in site.data.videos.es %}
  <div class="video-card">
    <div class="ratio">
      <iframe src="https://www.youtube-nocookie.com/embed/{{ video.youtube_id }}"
              title="{{ video.title }}" loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
    </div>
    <div class="video-card__body">
      <h3>{{ video.title }}</h3>
      <p>{{ video.description }}</p>
    </div>
  </div>
  {% endfor %}
</div>

<p class="videos-footnote">
  Más vídeos y contenido gratuito en <a href="{{ site.author.engineeringprotocolstack }}" target="_blank" rel="noopener">engineeringprotocolstack.com</a>.
</p>
