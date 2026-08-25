---
title: Blog
subtitle: Ideas del framework CPU · RAM · LAN · WAN, aplicadas al día a día
permalink: /posts/
layout: page
lang: es
alt_lang_url: /en/posts/
---

{% assign es_posts = site.posts | where: "lang", "es" %}
<div class="posts-list">
  {% for post in es_posts %}
  <a class="post-card" href="{{ post.url | relative_url }}">
    <p class="post__meta">
      <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%-d %B %Y" }}</time>
      {% if post.layer %}<span class="tag">{{ post.layer }}</span>{% endif %}
    </p>
    <h3>{{ post.title }}</h3>
    <p>{{ post.excerpt | strip_html | truncate: 160 }}</p>
  </a>
  {% endfor %}
</div>

{% if es_posts.size == 0 %}
<p>Todavía no hay publicaciones. ¡Vuelve pronto!</p>
{% endif %}
