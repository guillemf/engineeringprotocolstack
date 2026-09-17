---
title: Contact
subtitle: Questions about the book, a talk, or the services? Get in touch.
description: >-
  Get in touch about the book, a speaking engagement, or coaching and
  training services for your engineering team.
needs_contact: true
permalink: /contact/
lang: en
alt_lang_url: /es/contact/
---

<div class="contact-grid">
  <div>
    {% include components/contact-form.html %}
  </div>

  <div>
    <div class="card">
      <h3>Other ways to reach me</h3>
      <ul class="contact-list">
        <li><strong>Email</strong> <a href="mailto:{{ site.author.email }}">{{ site.author.email }}</a></li>
        <li><strong>LinkedIn</strong> <a href="{{ site.author.linkedin }}" target="_blank" rel="noopener">gfernandezg</a></li>
        <li><strong>GitHub</strong> <a href="{{ site.author.github }}" target="_blank" rel="noopener">guillemf</a></li>
        <li><strong>Website</strong> <a href="{{ site.author.website }}" target="_blank" rel="noopener">guillem.cat</a></li>
      </ul>
      <p>
        For consulting and coaching for companies or individuals, check out
        the <a href="{{ '/services/' | relative_url }}">services</a> page first.
      </p>
    </div>
  </div>
</div>
