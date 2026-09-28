---
title: Videos
subtitle: Talks, explanations, and video excerpts from the book's framework
description: >-
  Talks, explanations, and video excerpts covering the CPU/LAN/WAN
  framework from The Engineering Protocol Stack.
permalink: /videos/
layout: page
lang: en
alt_lang_url: /es/videos/
---

<div class="video-grid">
  {% for video in site.data.videos.en %}
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
  Every video is published on the <a href="{{ site.author.youtube }}" target="_blank" rel="noopener">YouTube channel</a>. Subscribe there for new material on the CPU, LAN and WAN layers.
</p>
