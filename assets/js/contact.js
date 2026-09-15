/*
 * The Engineering Protocol Stack — contact form.
 *
 * Submits the contact form to the contact_svc microservice (reached
 * through router_svc at window.EPS_PLATFORM_API_BASE_URL + "/contact/...").
 * contact_svc is the source of truth for what counts as a valid
 * submission — the checks here are just enough to avoid an obviously
 * pointless round trip and to show a friendly message.
 *
 * The hidden "company_website" field (see contact-form.html) is a
 * honeypot: a real visitor never sees or fills it in, so it is always
 * submitted as-is, whatever it contains.
 */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    var dataEl = document.getElementById("contact-data");
    var form = document.getElementById("contact-form");
    var submitBtn = document.getElementById("contact-submit");
    var errorEl = document.getElementById("contact-form-error");
    var successEl = document.getElementById("contact-success");

    if (!dataEl || !form || !submitBtn || !errorEl || !successEl) return;

    var copy = JSON.parse(dataEl.textContent);
    var apiBase = (window.EPS_PLATFORM_API_BASE_URL || "").replace(/\/+$/, "");

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var name = document.getElementById("contact-name").value.trim();
      var email = document.getElementById("contact-email").value.trim();
      var subject = document.getElementById("contact-subject").value.trim();
      var message = document.getElementById("contact-message").value.trim();
      var honeypotField = document.getElementById("contact-company-website");
      var honeypot = honeypotField ? honeypotField.value : "";

      if (!name || !email || email.indexOf("@") === -1 || !message) {
        errorEl.textContent = copy.validationErrorMessage;
        errorEl.hidden = false;
        return;
      }

      submitBtn.disabled = true;
      submitBtn.textContent = copy.submittingButton;
      errorEl.hidden = true;

      fetch(apiBase + "/contact/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name,
          email: email,
          subject: subject,
          message: message,
          company_website: honeypot,
        }),
      })
        .then(function (res) {
          if (res.ok) {
            form.hidden = true;
            errorEl.hidden = true;
            successEl.hidden = false;
            successEl.scrollIntoView({ behavior: "smooth", block: "start" });
            return;
          }
          if (res.status === 429) {
            errorEl.textContent = copy.rateLimitMessage;
            errorEl.hidden = false;
            return;
          }
          errorEl.textContent = copy.genericErrorMessage;
          errorEl.hidden = false;
        })
        .catch(function () {
          errorEl.textContent = copy.genericErrorMessage;
          errorEl.hidden = false;
        })
        .finally(function () {
          submitBtn.disabled = false;
          submitBtn.textContent = copy.submitButton;
        });
    });
  });
})();
