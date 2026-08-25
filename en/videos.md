---
title: Videos
subtitle: Talks, explanations, and video excerpts from the book's framework
permalink: /en/videos/
layout: page
lang: en
alt_lang_url: /videos/
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

<p style="margin-top:2.2rem; text-align:center; color:var(--text-faint); font-size:.9rem;">
  More videos and free content at <a href="{{ site.author.boosterskills }}" target="_blank" rel="noopener">myboosterskills.com</a>.
</p>
