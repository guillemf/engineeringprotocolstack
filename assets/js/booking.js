/*
 * The Engineering Protocol Stack — book-a-consultation widget.
 *
 * Fetches open slots from the calendar_svc microservice (reached through
 * router_svc at window.EPS_PLATFORM_API_BASE_URL + "/calendar/..."), lets
 * the visitor pick one, and submits a request with their contact details.
 * There is no automatic booking confirmation — a human (the site owner)
 * reviews each request and replies by email. Nothing is stored client-side
 * across page loads: availability is always fetched fresh, since it can
 * change at any moment as other visitors request slots.
 */
(function () {
  "use strict";

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function groupByLocalDate(slots) {
    var groups = [];
    var byKey = {};
    slots.forEach(function (slot) {
      var date = new Date(slot.starts_at);
      var key = date.toDateString();
      if (!byKey[key]) {
        byKey[key] = { key: key, date: date, slots: [] };
        groups.push(byKey[key]);
      }
      byKey[key].slots.push(slot);
    });
    return groups;
  }

  function formatDateHeading(date) {
    try {
      return date.toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" });
    } catch (e) {
      return date.toDateString();
    }
  }

  function formatTime(date) {
    try {
      return date.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" });
    } catch (e) {
      return date.toTimeString();
    }
  }

  function formatSelected(date) {
    try {
      return date.toLocaleString(undefined, {
        weekday: "long",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
      });
    } catch (e) {
      return date.toString();
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    var dataEl = document.getElementById("booking-data");
    var loadingEl = document.getElementById("booking-loading");
    var networkErrorEl = document.getElementById("booking-network-error");
    var retryBtn = document.getElementById("booking-retry");
    var emptyEl = document.getElementById("booking-empty");
    var slotsEl = document.getElementById("booking-slots");
    var form = document.getElementById("booking-form");
    var selectedTimeEl = document.getElementById("booking-selected-time");
    var backBtn = document.getElementById("booking-back");
    var submitBtn = document.getElementById("booking-submit");
    var formErrorEl = document.getElementById("booking-form-error");
    var successEl = document.getElementById("booking-success");

    if (!dataEl || !loadingEl || !slotsEl || !form) return;

    var copy = JSON.parse(dataEl.textContent);
    var apiBase = (window.EPS_PLATFORM_API_BASE_URL || "").replace(/\/+$/, "");
    var selectedSlot = null;

    function setState(state) {
      loadingEl.hidden = state !== "loading";
      networkErrorEl.hidden = state !== "network-error";
      emptyEl.hidden = state !== "empty";
      slotsEl.hidden = state !== "slots";
      form.hidden = state !== "form";
      successEl.hidden = state !== "success";
    }

    function fetchAvailability() {
      return fetch(apiBase + "/calendar/availability", { headers: { Accept: "application/json" } }).then(function (res) {
        if (!res.ok) throw new Error("Request failed with status " + res.status);
        return res.json();
      });
    }

    function renderSlots(slots) {
      var available = slots.filter(function (s) {
        return s.available;
      });

      if (available.length === 0) {
        setState("empty");
        return;
      }

      var groups = groupByLocalDate(available);
      var html = "";
      groups.forEach(function (group) {
        html += '<div class="booking-day">';
        html += '<h3 class="booking-day__heading">' + escapeHtml(formatDateHeading(group.date)) + "</h3>";
        html += '<div class="booking-day__times">';
        group.slots.forEach(function (slot) {
          html +=
            '<button type="button" class="booking-time" data-starts-at="' +
            escapeHtml(slot.starts_at) +
            '">' +
            escapeHtml(formatTime(new Date(slot.starts_at))) +
            "</button>";
        });
        html += "</div></div>";
      });

      slotsEl.innerHTML = html;
      setState("slots");
    }

    function boot() {
      setState("loading");
      fetchAvailability()
        .then(renderSlots)
        .catch(function () {
          setState("network-error");
        });
    }

    slotsEl.addEventListener("click", function (event) {
      var button = event.target.closest(".booking-time");
      if (!button) return;

      selectedSlot = button.getAttribute("data-starts-at");
      selectedTimeEl.textContent = copy.selectedLabel + ": " + formatSelected(new Date(selectedSlot));
      formErrorEl.hidden = true;
      setState("form");
      form.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    if (backBtn) {
      backBtn.addEventListener("click", function () {
        setState("slots");
      });
    }

    if (retryBtn) {
      retryBtn.addEventListener("click", boot);
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var name = document.getElementById("booking-name").value.trim();
      var email = document.getElementById("booking-email").value.trim();
      var company = document.getElementById("booking-company").value.trim();
      var message = document.getElementById("booking-message").value.trim();

      if (!name || !email || email.indexOf("@") === -1) {
        formErrorEl.textContent = copy.formErrorMessage;
        formErrorEl.hidden = false;
        return;
      }

      submitBtn.disabled = true;
      submitBtn.textContent = copy.submittingButton;
      formErrorEl.hidden = true;

      fetch(apiBase + "/calendar/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          starts_at: selectedSlot,
          name: name,
          email: email,
          company: company || null,
          message: message || null,
        }),
      })
        .then(function (res) {
          if (res.status === 201) {
            setState("success");
            successEl.scrollIntoView({ behavior: "smooth", block: "start" });
            return;
          }
          if (res.status === 404 || res.status === 409) {
            formErrorEl.textContent = copy.conflictMessage;
            formErrorEl.hidden = false;
            boot();
            return;
          }
          formErrorEl.textContent = copy.genericErrorMessage;
          formErrorEl.hidden = false;
        })
        .catch(function () {
          formErrorEl.textContent = copy.genericErrorMessage;
          formErrorEl.hidden = false;
        })
        .finally(function () {
          submitBtn.disabled = false;
          submitBtn.textContent = copy.submitButton;
        });
    });

    boot();
  });
})();
