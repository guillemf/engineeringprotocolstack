// Progressive-enhancement layer for the mobile nav toggle. The menu
// itself works with pure CSS (the #nav-toggle checkbox hack) even if
// this script fails to load — this only adds two things screen-reader
// and keyboard users need that CSS alone can't provide: an
// aria-expanded state that reflects whether the menu is open, and an
// Escape key to close it.
(function () {
  var toggle = document.getElementById("nav-toggle");
  var burger = document.querySelector(".nav-burger");

  if (!toggle || !burger) return;

  function syncExpandedState() {
    burger.setAttribute("aria-expanded", toggle.checked ? "true" : "false");
  }

  toggle.addEventListener("change", syncExpandedState);
  syncExpandedState();

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && toggle.checked) {
      toggle.checked = false;
      syncExpandedState();
      burger.focus();
    }
  });
})();
