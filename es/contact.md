---
title: Contacto
subtitle: ¿Preguntas sobre el libro, una charla o los servicios? Escríbeme.
description: >-
  Escríbeme sobre el libro, una charla, o servicios de coaching y formación
  para tu equipo de ingeniería.
needs_contact: true
permalink: /es/contact/
lang: es
alt_lang_url: /contact/
---

<div class="contact-grid">
  <div>
    {% include components/contact-form.html %}
  </div>

  <div>
    <div class="card">
      <h3>Otras formas de contactar</h3>
      <ul class="contact-list">
        <li><strong>Email</strong> <a href="mailto:{{ site.author.email }}">{{ site.author.email }}</a></li>
        <li><strong>LinkedIn</strong> <a href="{{ site.author.linkedin }}" target="_blank" rel="noopener">gfernandezg</a></li>
        <li><strong>GitHub</strong> <a href="{{ site.author.github }}" target="_blank" rel="noopener">guillemf</a></li>
        <li><strong>Web</strong> <a href="{{ site.author.website }}" target="_blank" rel="noopener">guillem.cat</a></li>
      </ul>
      <p>
        Para consultoría y coaching para empresas o profesionales, echa un
        vistazo antes a la página de <a href="{{ '/es/services/' | relative_url }}">servicios</a>.
      </p>
    </div>
  </div>
</div>
