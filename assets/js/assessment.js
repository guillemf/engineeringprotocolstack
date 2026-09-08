/*
 * The Engineering Protocol Stack — self-assessment quiz.
 *
 * Fetches 10 random multiple-choice questions (3 CPU, 4 LAN, 3 WAN) from
 * the questions_svc microservice (base URL configured in _config.yml as
 * `assessment_service.base_url`, injected as window.EPS_ASSESSMENT_SERVICE_BASE_URL),
 * scores the answers entirely client-side, and renders a layer-by-layer
 * result. Nothing is sent anywhere except the initial GET for questions.
 *
 * Caching: the fetched question set is cached in sessionStorage, keyed by
 * language, so revisiting or reloading the page within the same browser
 * session reuses the same 10 questions instead of drawing a new set. A
 * fresh set is only ever fetched: (a) the first time in a new session, or
 * (b) when the user clicks "retake". Copy (i18n text, band labels,
 * service links) comes from the JSON blob rendered by
 * _includes/components/assessment-quiz.html, which in turn comes from
 * _data/assessment.yml.
 */
(function () {
  "use strict";

  var SECTION_ORDER = ["CPU", "LAN", "WAN"];

  function band(correct, total) {
    if (total <= 0) return "low";
    var pct = (correct / total) * 100;
    if (pct < 50) return "low";
    if (pct < 80) return "mid";
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

  function groupBySection(questions) {
    var grouped = [];
    SECTION_ORDER.forEach(function (section) {
      questions.forEach(function (q) {
        if (q.section === section) grouped.push(q);
      });
    });
    // Any section not in SECTION_ORDER (shouldn't happen) still gets shown.
    questions.forEach(function (q) {
      if (SECTION_ORDER.indexOf(q.section) === -1) grouped.push(q);
    });
    return grouped;
  }

  document.addEventListener("DOMContentLoaded", function () {
    var dataEl = document.getElementById("assessment-data");
    var loadingEl = document.getElementById("assessment-loading");
    var networkErrorEl = document.getElementById("assessment-network-error");
    var retryBtn = document.getElementById("assessment-retry");
    var form = document.getElementById("assessment-form");
    var questionsEl = document.getElementById("assessment-questions");
    var errorEl = document.getElementById("assessment-error");
    var resultsEl = document.getElementById("assessment-results");
    var retakeBtn = document.getElementById("assessment-retake");

    if (!dataEl || !loadingEl || !form || !questionsEl || !resultsEl) return;

    var copy = JSON.parse(dataEl.textContent);
    var lang = copy.lang || "en";
    var storageKey = "eps_assessment_quiz_v1_" + lang;
    var serviceBase = (window.EPS_ASSESSMENT_SERVICE_BASE_URL || "").replace(/\/+$/, "");

    // The flat, section-grouped list of questions currently rendered in
    // the form, in the same order as the radio groups (`q_0`, `q_1`, ...).
    var renderedQuestions = [];

    function setState(state) {
      loadingEl.hidden = state !== "loading";
      networkErrorEl.hidden = state !== "network-error";
      form.hidden = state !== "form";
      resultsEl.hidden = state !== "results";
      retakeBtn.hidden = state !== "results";
    }

    function readCache() {
      try {
        var raw = window.sessionStorage.getItem(storageKey);
        if (!raw) return null;
        var parsed = JSON.parse(raw);
        if (parsed && Array.isArray(parsed.questions) && parsed.questions.length === 10) {
          return parsed;
        }
      } catch (e) {
        /* corrupted cache — ignore and refetch */
      }
      return null;
    }

    function writeCache(quiz) {
      try {
        window.sessionStorage.setItem(storageKey, JSON.stringify(quiz));
      } catch (e) {
        /* sessionStorage unavailable (private mode, quota, etc.) — degrade gracefully */
      }
    }

    function fetchQuiz() {
      var url = serviceBase + "/questions?lang=" + encodeURIComponent(lang);
      return fetch(url, { headers: { Accept: "application/json" } }).then(function (res) {
        if (!res.ok) throw new Error("Request failed with status " + res.status);
        return res.json();
      });
    }

    function loadQuiz(forceNew) {
      if (!forceNew) {
        var cached = readCache();
        if (cached) return Promise.resolve(cached);
      }
      return fetchQuiz().then(function (quiz) {
        writeCache(quiz);
        return quiz;
      });
    }

    function renderQuestion(q, index) {
      var html = '<div class="assessment-mcq">';
      html += '<p class="assessment-mcq__statement">' + escapeHtml(q.question.statement) + "</p>";
      html += '<div class="assessment-mcq-options" role="radiogroup">';
      q.question.options.forEach(function (opt) {
        html += '<label class="assessment-mcq-option">';
        html += '<input type="radio" name="q_' + index + '" value="' + opt.option + '" required>';
        html += "<span>" + escapeHtml(opt.answer) + "</span>";
        html += "</label>";
      });
      html += "</div></div>";
      return html;
    }

    function renderQuiz(quiz) {
      renderedQuestions = groupBySection(quiz.questions);

      var html = "";
      SECTION_ORDER.forEach(function (section) {
        var sectionQuestions = [];
        renderedQuestions.forEach(function (q, idx) {
          if (q.section === section) sectionQuestions.push({ q: q, idx: idx });
        });
        if (sectionQuestions.length === 0) return;

        var layerInfo = copy.layers.filter(function (l) {
          return l.tag === section;
        })[0];

        html += '<fieldset class="assessment-layer">';
        html += '<legend class="assessment-layer__legend">';
        html += '<span class="tag">' + escapeHtml(section) + "</span>";
        if (layerInfo) {
          html += '<span class="assessment-layer__name">' + escapeHtml(layerInfo.name) + "</span>";
        }
        html += "</legend>";

        sectionQuestions.forEach(function (item) {
          html += renderQuestion(item.q, item.idx);
        });

        html += "</fieldset>";
      });

      questionsEl.innerHTML = html;
      errorEl.hidden = true;
      setState("form");
    }

    function renderResults(perSectionScores, overallCorrect, overallTotal) {
      var overallBand = band(overallCorrect, overallTotal);
      var overall = copy.overall[overallBand];
      var html = "";

      html += '<div class="assessment-overall assessment-band--' + overallBand + '">';
      html += '<span class="assessment-overall__score">' + overallCorrect + " / " + overallTotal + "</span>";
      html += "<h3>" + escapeHtml(overall.label) + "</h3>";
      html += "<p>" + escapeHtml(overall.text) + "</p>";
      html += "</div>";

      html += '<h3 class="assessment-results__heading">' + escapeHtml(copy.layersHeading) + "</h3>";
      html += '<div class="assessment-layers-results">';

      copy.layers.forEach(function (layer) {
        var score = perSectionScores[layer.tag] || { correct: 0, total: 0 };
        var b = band(score.correct, score.total);
        var info = layer[b];
        var pct = score.total ? Math.max(4, Math.min(100, (score.correct / score.total) * 100)) : 4;

        html += '<div class="assessment-layer-result assessment-band--' + b + '">';
        html += '<div class="assessment-layer-result__head">';
        html += '<span class="tag">' + escapeHtml(layer.tag) + "</span>";
        html += '<span class="assessment-layer-result__name">' + escapeHtml(layer.name) + "</span>";
        html +=
          '<span class="assessment-layer-result__score">' +
          score.correct +
          "/" +
          score.total +
          " correct · " +
          escapeHtml(info.label) +
          "</span>";
        html += "</div>";
        html += '<div class="assessment-bar"><div class="assessment-bar__fill" style="width:' + pct + '%"></div></div>';
        html += "<p>" + escapeHtml(info.text) + "</p>";
        if (layer.service_label && layer.service_url) {
          html +=
            '<a class="assessment-layer-result__link" href="' +
            withBaseUrl(layer.service_url) +
            '">' +
            escapeHtml(layer.service_label) +
            " →</a>";
        }
        html += "</div>";
      });

      html += "</div>";

      html += '<div class="assessment-final-cta card">';
      html += "<p>" + escapeHtml(copy.final_cta.text) + "</p>";
      html += '<a class="btn btn-primary" href="' + withBaseUrl(copy.final_cta.url) + '">' + escapeHtml(copy.final_cta.button) + "</a>";
      html += "</div>";

      resultsEl.innerHTML = html;
    }

    function scoreAndShowResults() {
      var perSection = {};
      var overallCorrect = 0;
      var allAnswered = true;

      renderedQuestions.forEach(function (q, index) {
        var section = q.section;
        if (!perSection[section]) perSection[section] = { correct: 0, total: 0 };
        perSection[section].total++;

        var checked = form.querySelector('input[name="q_' + index + '"]:checked');
        if (!checked) {
          allAnswered = false;
          return;
        }
        if (parseInt(checked.value, 10) === q.question.answer) {
          perSection[section].correct++;
          overallCorrect++;
        }
      });

      if (!allAnswered) {
        errorEl.hidden = false;
        errorEl.scrollIntoView({ behavior: "smooth", block: "center" });
        return;
      }

      renderResults(perSection, overallCorrect, renderedQuestions.length);
      setState("results");
      resultsEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function boot(forceNew) {
      setState("loading");
      loadQuiz(forceNew)
        .then(renderQuiz)
        .catch(function () {
          setState("network-error");
        });
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      scoreAndShowResults();
    });

    if (retryBtn) {
      retryBtn.addEventListener("click", function () {
        boot(false);
      });
    }

    if (retakeBtn) {
      retakeBtn.addEventListener("click", function () {
        try {
          window.sessionStorage.removeItem(storageKey);
        } catch (e) {
          /* ignore */
        }
        boot(true);
        form.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }

    boot(false);
  });
})();
