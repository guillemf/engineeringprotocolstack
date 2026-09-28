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

{% assign videos = site.data.videos[page.lang].items %}

{% if videos and videos.size > 0 %}
<div class="video-grid">
  {% for video in videos %}
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
  Todos los vídeos se publican en el <a href="{{ site.author.youtube }}" target="_blank" rel="noopener">canal de YouTube</a>. Suscríbete para no perderte el contenido nuevo sobre las capas CPU, LAN y WAN.
</p>
{% else %}
{% include components/channel-cta.html %}
{% endif %}
