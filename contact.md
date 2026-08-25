---
title: Contacto
subtitle: ¿Preguntas sobre el libro, una charla o los servicios? Escríbeme.
permalink: /contact/
lang: es
alt_lang_url: /en/contact/
---

<div class="contact-grid">
  <div>
    <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
      <div class="form-field">
        <label for="name">Nombre</label>
        <input type="text" id="name" name="name" required>
      </div>
      <div class="form-field">
        <label for="email">Email</label>
        <input type="email" id="email" name="_replyto" required>
      </div>
      <div class="form-field">
        <label for="subject">Asunto</label>
        <input type="text" id="subject" name="subject" placeholder="Libro, charla, servicios...">
      </div>
      <div class="form-field">
        <label for="message">Mensaje</label>
        <textarea id="message" name="message" rows="6" required></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Enviar mensaje</button>
    </form>
    <p style="font-size:.82rem; margin-top:1rem; color:var(--text-faint);">
      Este formulario usa <a href="https://formspree.io" target="_blank" rel="noopener">Formspree</a>.
      Sustituye <code>YOUR_FORM_ID</code> por el ID de tu propio formulario (gratis) antes de publicar el sitio.
    </p>
  </div>

  <div>
    <div class="card">
      <h3 style="margin-top:0;">Otras formas de contactar</h3>
      <ul class="contact-list">
        <li><strong>Email</strong> <a href="mailto:{{ site.author.email }}">{{ site.author.email }}</a></li>
        <li><strong>LinkedIn</strong> <a href="{{ site.author.linkedin }}" target="_blank" rel="noopener">gfernandezg</a></li>
        <li><strong>GitHub</strong> <a href="{{ site.author.github }}" target="_blank" rel="noopener">guillemf</a></li>
        <li><strong>Web</strong> <a href="{{ site.author.website }}" target="_blank" rel="noopener">guillem.cat</a></li>
      </ul>
      <p style="margin-top:1.4rem;">
        Para consultoría y coaching para empresas o profesionales, echa un
        vistazo antes a la página de <a href="{{ '/services/' | relative_url }}">servicios</a>.
      </p>
    </div>
  </div>
</div>
