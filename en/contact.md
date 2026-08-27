---
title: Contact
subtitle: Questions about the book, a talk, or the services? Get in touch.
permalink: /en/contact/
lang: en
alt_lang_url: /contact/
---

<div class="contact-grid">
  <div>
    <form action="https://formspree.io/f/xbgrngpz" method="POST">
      <div class="form-field">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" required>
      </div>
      <div class="form-field">
        <label for="email">Email</label>
        <input type="email" id="email" name="_replyto" required>
      </div>
      <div class="form-field">
        <label for="subject">Subject</label>
        <input type="text" id="subject" name="subject" placeholder="Book, talk, services...">
      </div>
      <div class="form-field">
        <label for="message">Message</label>
        <textarea id="message" name="message" rows="6" required></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Send message</button>
    </form>
    <p style="font-size:.82rem; margin-top:1rem; color:var(--text-faint);">
      This form uses <a href="https://formspree.io" target="_blank" rel="noopener">Formspree</a>.
      Replace <code>YOUR_FORM_ID</code> with your own (free) form ID before publishing the site.
    </p>
  </div>

  <div>
    <div class="card">
      <h3 style="margin-top:0;">Other ways to reach me</h3>
      <ul class="contact-list">
        <li><strong>Email</strong> <a href="mailto:{{ site.author.email }}">{{ site.author.email }}</a></li>
        <li><strong>LinkedIn</strong> <a href="{{ site.author.linkedin }}" target="_blank" rel="noopener">gfernandezg</a></li>
        <li><strong>GitHub</strong> <a href="{{ site.author.github }}" target="_blank" rel="noopener">guillemf</a></li>
        <li><strong>Website</strong> <a href="{{ site.author.website }}" target="_blank" rel="noopener">guillem.cat</a></li>
      </ul>
      <p style="margin-top:1.4rem;">
        For consulting and coaching for companies or individuals, check out
        the <a href="{{ '/en/services/' | relative_url }}">services</a> page first.
      </p>
    </div>
  </div>
</div>
