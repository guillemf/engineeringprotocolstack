---
title: Blog
subtitle: Ideas from the CPU · RAM · LAN · WAN framework, applied to everyday work
permalink: /en/posts/
layout: page
lang: en
alt_lang_url: /posts/
---

{% assign en_posts = site.posts | where: "lang", "en" %}
<div class="posts-list">
  {% for post in en_posts %}
  <a class="post-card" href="{{ post.url | relative_url }}">
    <p class="post__meta">
      <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %-d, %Y" }}</time>
      {% if post.layer %}<span class="tag">{{ post.layer }}</span>{% endif %}
    </p>
    <h3>{{ post.title }}</h3>
    <p>{{ post.excerpt | strip_html | truncate: 160 }}</p>
  </a>
  {% endfor %}
</div>

{% if en_posts.size == 0 %}
<p>No posts yet. Check back soon!</p>
{% endif %}
