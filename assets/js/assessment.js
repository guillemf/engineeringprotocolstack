/*
 * The Engineering Protocol Stack — self-assessment scoring.
 * Pure client-side: nothing is sent anywhere, no analytics, no storage.
 * Reads its copy (statements' bands, recommendations, service links) from
 * the JSON blob rendered by _includes/components/assessment-quiz.html,
 * which in turn comes from _data/assessment.yml.
 */
(function () {
  "use strict";

  function band(avg) {
    if (avg < 3) return "low";
    if (avg < 4) return "mid";
    return "high";
  }

  function withBaseUrl(path) {
    var base = window.SITE_BASEURL || "";
    if (!path) return base + "/";
    return base + path;
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("assessment-form");
    var dataEl = document.getElementById("assessment-data");
    var resultsEl = document.getElementById("assessment-results");
    var errorEl = document.getElementById("assessment-error");
    var retakeBtn = document.getElementById("assessment-retake");

    if (!form || !dataEl || !resultsEl) return;

    var data = JSON.parse(dataEl.textContent);

    function renderResults(layerScores, overallAvg) {
      var overallBand = band(overallAvg);
      var overall = data.overall[overallBand];
      var html = "";

      html += '<div class="assessment-overall assessment-band--' + overallBand + '">';
      html += '<span class="assessment-overall__score">' + overallAvg.toFixed(1) + " / 5</span>";
      html += "<h3>" + escapeHtml(overall.label) + "</h3>";
      html += "<p>" + escapeHtml(overall.text) + "</p>";
      html += "</div>";

      html += '<h3 class="assessment-results__heading">' + escapeHtml(data.layersHeading) + "</h3>";
      html += '<div class="assessment-layers-results">';

      data.layers.forEach(function (layer) {
        var avg = layerScores[layer.id] || 0;
        var b = band(avg);
        var info = layer[b];
        var pct = Math.max(4, Math.min(100, (avg / 5) * 100));

        html += '<div class="assessment-layer-result assessment-band--' + b + '">';
        html += '<div class="assessment-layer-result__head">';
        html += '<span class="tag">' + escapeHtml(layer.tag) + "</span>";
        html += '<span class="assessment-layer-result__name">' + escapeHtml(layer.name) + "</span>";
        html += '<span class="assessment-layer-result__score">' + avg.toFixed(1) + "/5 · " + escapeHtml(info.label) + "</span>";
        html += "</div>";
        html += '<div class="assessment-bar"><div class="assessment-bar__fill" style="width:' + pct + '%"></div></div>';
        html += "<p>" + escapeHtml(info.text) + "</p>";
        if (layer.service_label && layer.service_url) {
          html += '<a class="assessment-layer-result__link" href="' + withBaseUrl(layer.service_url) + '">' + escapeHtml(layer.service_label) + " →</a>";
        }
        html += "</div>";
      });

      html += "</div>";

      html += '<div class="assessment-final-cta card">';
      html += "<p>" + escapeHtml(data.final_cta.text) + "</p>";
      html += '<a class="btn btn-primary" href="' + withBaseUrl(data.final_cta.url) + '">' + escapeHtml(data.final_cta.button) + "</a>";
      html += "</div>";

      resultsEl.innerHTML = html;
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var layerScores = {};
      var allAnswered = true;
      var overallSum = 0;
      var overallCount = 0;

      data.layers.forEach(function (layer) {
        var sum = 0;
        var count = 0;
        for (var i = 0; i < layer.count; i++) {
          var checked = form.querySelector('input[name="q_' + layer.id + "_" + i + '"]:checked');
          if (!checked) {
            allAnswered = false;
            continue;
          }
          sum += parseInt(checked.value, 10);
          count++;
        }
        layerScores[layer.id] = count ? sum / count : 0;
        overallSum += sum;
        overallCount += count;
      });

      if (!allAnswered) {
        errorEl.hidden = false;
        errorEl.scrollIntoView({ behavior: "smooth", block: "center" });
        return;
      }

      errorEl.hidden = true;
      var overallAvg = overallCount ? overallSum / overallCount : 0;

      renderResults(layerScores, overallAvg);

      form.hidden = true;
      resultsEl.hidden = false;
      if (retakeBtn) retakeBtn.hidden = false;
      resultsEl.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    if (retakeBtn) {
      retakeBtn.addEventListener("click", function () {
        form.reset();
        form.hidden = false;
        resultsEl.hidden = true;
        resultsEl.innerHTML = "";
        retakeBtn.hidden = true;
        errorEl.hidden = true;
        form.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  });
})();
