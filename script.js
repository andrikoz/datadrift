(function () {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var sheets = document.querySelectorAll(".sheet");

  sheets.forEach(function (sheet) {
    sheet.querySelectorAll(".tile").forEach(function (t, i) { t.style.setProperty("--i", i); });
  });

  if (reduce || !("IntersectionObserver" in window)) {
    sheets.forEach(function (s) { s.classList.add("in"); });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.2 });
  sheets.forEach(function (s) { io.observe(s); });
})();
