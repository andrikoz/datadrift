(function () {
  var root = document.documentElement;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  root.classList.add("ready");

  /* hero staging, after factory.com: the mark spins in, letters scramble into place, the rest arrives last */
  var CHARS = "0123456789!<>-_/[]{}=+*^?#%&$@|~;:";
  function letters(el) {
    var text = el.textContent, frag = document.createDocumentFragment();
    el.textContent = "";
    for (var i = 0; i < text.length; i++) {
      if (text[i] === " ") { frag.appendChild(document.createTextNode(" ")); continue; }
      var s = document.createElement("span");
      s.className = "sc"; s.dataset.c = text[i]; s.textContent = text[i];
      frag.appendChild(s);
    }
    el.appendChild(frag);
    return Array.prototype.slice.call(el.querySelectorAll(".sc"));
  }
  function scramble(list, startDelay, stagger, ms, tick) {
    var t0 = performance.now(), last = list.map(function () { return NaN; });
    list.forEach(function (s) { s.classList.add("wait"); });
    function done(s) { s.classList.remove("wait", "on"); s.style.removeProperty("--sg"); s.style.removeProperty("--sgf"); }
    function step(now) {
      var c = now - t0 - startDelay, more = false;
      list.forEach(function (s, i) {
        if (last[i] === -1) return;
        var r = i * stagger;
        if (c < r) { more = true; return; }
        if (c >= r + ms) { last[i] = -1; done(s); return; }
        more = true;
        var k = Math.floor((c - r) / tick);
        if (last[i] === k) return;
        last[i] = k;
        s.classList.remove("wait"); s.classList.add("on");
        s.style.setProperty("--sg", '"' + ((c - r) > 0.72 * ms ? s.dataset.c : CHARS[(Math.random() * CHARS.length) | 0]) + '"');
        s.style.setProperty("--sgf", k % 2 === 0 ? "var(--mono)" : "inherit");
      });
      if (more) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  var hero = document.querySelector(".hero");
  if (hero && !reduce && root.classList.contains("pre")) {
    var mark = hero.querySelector(".hero-mark"), h1 = hero.querySelector("h1"), sub = hero.querySelector(".sub");
    var rest = [hero.querySelector(".act"), hero.querySelector(".cap"), document.querySelector(".frame")];
    var fade = function (el, delay, dur) { return el.animate([{ opacity: 0 }, { opacity: 1 }], { duration: dur, delay: delay, easing: "ease-out", fill: "both" }); };
    var lines = h1.querySelectorAll(".ln");
    h1.setAttribute("aria-label", h1.textContent);
    var l1 = letters(lines[0]), l2 = letters(lines[1]);
    var sl = letters(sub);
    lines.forEach(function (l) { l.setAttribute("aria-hidden", "true"); });
    fade(mark, 0, 500);
    mark.animate([{ transform: "rotate(-540deg)" }, { transform: "rotate(0deg)" }], { duration: 1600, easing: "cubic-bezier(0.165, 0.84, 0.44, 1)", fill: "both" });
    fade(h1, 100, 400);
    fade(sub, 200, 400);
    rest.forEach(function (el) { fade(el, 1250, 600); });
    scramble(l1, 180, 20, 340, 40);
    scramble(l2, 180 + 20 * Math.round(l1.length / 2), 20, 340, 40);
    scramble(sl, 900, 12, 300, 34);
    root.classList.remove("pre");
  }

  /* ruled lines and headings arrive with their section */
  var targets = document.querySelectorAll(".rows, .cols3, .close");
  if (reduce || !("IntersectionObserver" in window)) {
    targets.forEach(function (t) { t.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.15 });
    targets.forEach(function (t) { io.observe(t); });
  }

  /* the system: requests flow through services, one fails, traffic reroutes, it recovers.
     A synthetic illustration of reliability work, drawn on a canvas. */
  var cv = document.querySelector(".sys");
  if (!cv || !cv.getContext) return;
  var ctx = cv.getContext("2d");
  var INK = "#0A0A0A", MID = "#5F5F5F", WHITE = "#FFFFFF";
  var MONO = '"Geist Mono", ui-monospace, Menlo, monospace';

  /* nodes in flow space: u runs with the flow, v across it */
  var NODES = [
    { id: "client", label: "CLIENT", u: 0, v: 0.5 },
    { id: "edge", label: "EDGE", u: 0.17, v: 0.5 },
    { id: "apia", label: "API A", u: 0.37, v: 0.2 },
    { id: "apib", label: "API B", u: 0.37, v: 0.8 },
    { id: "queue", label: "QUEUE", u: 0.57, v: 0.5 },
    { id: "wa", label: "WORKER A", u: 0.78, v: 0.2 },
    { id: "wb", label: "WORKER B", u: 0.78, v: 0.8 },
    { id: "db", label: "DATABASE", u: 1, v: 0.5 }
  ];
  var EDGES = [["client", "edge"], ["edge", "apia"], ["edge", "apib"], ["apia", "queue"], ["apib", "queue"], ["queue", "wa"], ["queue", "wb"], ["wa", "db"], ["wb", "db"]];
  var byId = {};
  NODES.forEach(function (n) { n.t = 0; n.flash = -1e9; byId[n.id] = n; });

  var W, H, vert, bw, bh, fs, start = null, last = 0, running = false;
  var packets = [], nextSpawn = 0, cycle0 = null, status = "healthy", down = null;
  var DELAY = 1500, CYCLE = 12000;

  function pos(n) {
    var padU = bw / 2 + 14, padV = bh / 2 + 14, top = 56, bottom = 34;
    if (vert) return { x: padU + n.v * (W - 2 * padU), y: top + bh / 2 + n.u * (H - top - bottom - bh) };
    return { x: padU + n.u * (W - 2 * padU), y: top + bh / 2 + n.v * (H - top - bottom - bh) };
  }
  function build() {
    var r = cv.getBoundingClientRect();
    W = Math.round(r.width); H = Math.round(r.height);
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    cv.width = W * dpr; cv.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    vert = W < 560;
    bw = vert ? 92 : 118; bh = vert ? 28 : 34; fs = vert ? 10 : 11;
    NODES.forEach(function (n) { var p = pos(n); n.x = p.x; n.y = p.y; });
    EDGES.forEach(function (e) {
      var a = byId[e[0]], b = byId[e[1]], pts;
      if (vert) { var ym = (a.y + b.y) / 2; pts = [[a.x, a.y], [a.x, ym], [b.x, ym], [b.x, b.y]]; }
      else { var xm = (a.x + b.x) / 2; pts = [[a.x, a.y], [xm, a.y], [xm, b.y], [b.x, b.y]]; }
      e.pts = pts; e.len = 0; e.seg = [];
      for (var k = 1; k < pts.length; k++) { var l = Math.abs(pts[k][0] - pts[k - 1][0]) + Math.abs(pts[k][1] - pts[k - 1][1]); e.seg.push(l); e.len += l; }
      e.a = a; e.b = b;
    });
  }
  function edge(a, b) { for (var i = 0; i < EDGES.length; i++) if (EDGES[i][0] === a && EDGES[i][1] === b) return EDGES[i]; }
  function at(e, d) {            /* point at distance d along an edge */
    for (var k = 0; k < e.seg.length; k++) {
      if (d <= e.seg[k] || k === e.seg.length - 1) {
        var f = e.seg[k] ? Math.min(1, d / e.seg[k]) : 1, p0 = e.pts[k], p1 = e.pts[k + 1];
        return [p0[0] + (p1[0] - p0[0]) * f, p0[1] + (p1[1] - p0[1]) * f];
      }
      d -= e.seg[k];
    }
  }
  function route() {             /* a request: client to database, avoiding what is down */
    var api = down === "apib" ? "apia" : (down === "apia" ? "apib" : (Math.random() < 0.5 ? "apia" : "apib"));
    var wk = Math.random() < 0.5 ? "wa" : "wb";
    var ids = ["client", "edge", api, "queue", wk, "db"], legs = [];
    for (var i = 1; i < ids.length; i++) legs.push(edge(ids[i - 1], ids[i]));
    return legs;
  }
  function spawn(now) { packets.push({ legs: route(), i: 0, d: 0, speed: vert ? 110 : 190 }); }

  function roundRect(x, y, w, h) { ctx.beginPath(); ctx.rect(Math.round(x) + 0.5, Math.round(y) + 0.5, w, h); }

  function drawNode(n, now, t) {
    var a = n.t; if (a <= 0) return;
    var isDown = down === n.id, flash = now - n.flash < 160;
    var w = bw * (0.85 + 0.15 * a), h = bh * (0.85 + 0.15 * a);
    ctx.globalAlpha = a;
    roundRect(n.x - w / 2, n.y - h / 2, w, h);
    ctx.fillStyle = flash && !isDown ? INK : WHITE; ctx.fill();
    if (isDown) {
      ctx.save(); ctx.clip(); ctx.strokeStyle = "rgba(10,10,10,.28)"; ctx.lineWidth = 1;
      for (var k = -h; k < w + h; k += 6) { ctx.beginPath(); ctx.moveTo(n.x - w / 2 + k, n.y + h / 2); ctx.lineTo(n.x - w / 2 + k + h, n.y - h / 2); ctx.stroke(); }
      ctx.restore();
      ctx.setLineDash([4, 3]);
    }
    roundRect(n.x - w / 2, n.y - h / 2, w, h);
    ctx.strokeStyle = INK; ctx.lineWidth = 1; ctx.stroke(); ctx.setLineDash([]);
    ctx.font = "400 " + fs + "px " + MONO; ctx.textAlign = "center"; ctx.textBaseline = "middle";
    ctx.fillStyle = isDown ? MID : (flash ? WHITE : INK);
    if (a > 0.6) ctx.fillText(n.label, n.x, n.y + 0.5);
    ctx.globalAlpha = 1;
  }

  function draw(now, t, live) {
    ctx.clearRect(0, 0, W, H);
    /* faint dot grid */
    ctx.fillStyle = "rgba(10,10,10,.13)";
    for (var gx = 12; gx < W; gx += 24) for (var gy = 12; gy < H; gy += 24) ctx.fillRect(gx, gy, 1, 1);
    /* appearance: nodes arrive left to right, edges draw toward them */
    NODES.forEach(function (n) { n.t = live ? Math.max(0, Math.min(1, (t - n.u * 900) / 400)) : 1; });
    EDGES.forEach(function (e) {
      var f = live ? Math.max(0, Math.min(1, (t - e.a.u * 900 - 150) / 500)) : 1;
      if (f <= 0) return;
      var dead = down && (e.a.id === down || e.b.id === down);
      ctx.strokeStyle = dead ? "rgba(10,10,10,.3)" : "rgba(10,10,10,.55)"; ctx.lineWidth = 1;
      ctx.setLineDash(dead ? [3, 4] : []);
      ctx.beginPath();
      var drawn = 0, lim = e.len * f;
      ctx.moveTo(e.pts[0][0] + 0.5, e.pts[0][1] + 0.5);
      for (var k = 1; k < e.pts.length && drawn < lim; k++) {
        var l = e.seg[k - 1], take = Math.min(l, lim - drawn), p0 = e.pts[k - 1], p1 = e.pts[k], g = l ? take / l : 1;
        ctx.lineTo(p0[0] + (p1[0] - p0[0]) * g + 0.5, p0[1] + (p1[1] - p0[1]) * g + 0.5);
        drawn += l;
      }
      ctx.stroke(); ctx.setLineDash([]);
    });
    /* packets */
    packets.forEach(function (p) {
      var e = p.legs[p.i], pt = at(e, p.d);
      ctx.fillStyle = WHITE; ctx.fillRect(pt[0] - 4.5, pt[1] - 4.5, 9, 9);
      ctx.fillStyle = INK; ctx.fillRect(pt[0] - 3.5, pt[1] - 3.5, 7, 7);
    });
    NODES.forEach(function (n) { drawNode(n, now, t); });
    /* status, top left; honest label, bottom right */
    var txt = status === "healthy" ? "ALL SERVICES HEALTHY" : status === "down" ? "API B DOWN. TRAFFIC REROUTED" : "API B RECOVERED";
    ctx.font = "400 " + (vert ? 10 : 11) + "px " + MONO; ctx.textAlign = "left"; ctx.textBaseline = "middle";
    ctx.fillStyle = INK;
    if (status === "down") { ctx.strokeStyle = INK; ctx.lineWidth = 1; ctx.strokeRect(16.5, 20.5, 8, 8); } else ctx.fillRect(16, 20, 9, 9);
    ctx.fillText(txt, 34, 25);
    ctx.fillStyle = MID; ctx.textAlign = "right"; ctx.fillText("ILLUSTRATION", W - 16, H - 16);
  }

  function frame(now) {
    if (!running) return;
    if (start === null) start = now + DELAY;
    if (now - last >= 33) {
      var dt = Math.min(64, now - last); last = now;
      var t = now - start;
      if (t > 0) {
        /* incident cycle begins once everything has arrived */
        var arrived = t > 1700;
        if (arrived) {
          if (cycle0 === null) cycle0 = now;
          var c = (now - cycle0) % CYCLE;
          var nd = c > 4500 && c < 8500 ? "apib" : null;
          if (nd !== down) {
            down = nd;
            status = nd ? "down" : "recovered";
            if (nd) packets = packets.filter(function (p) { return p.legs.every(function (l) { return l.a.id !== nd && l.b.id !== nd; }); });
          }
          if (!down && c > 8500 && c < 11200) status = "recovered"; else if (!down && (c >= 11200 || c < 4500)) status = "healthy";
          if (now >= nextSpawn) { spawn(now); nextSpawn = now + 650 + Math.random() * 350; }
        }
        packets.forEach(function (p) {
          p.d += p.speed * dt / 1000;
          var e = p.legs[p.i];
          if (p.d >= e.len) {
            e.b.flash = now; p.d = 0; p.i++;
          }
        });
        packets = packets.filter(function (p) { return p.i < p.legs.length; });
      }
      draw(now, Math.max(0, t), true);
    }
    requestAnimationFrame(frame);
  }

  build();
  if (reduce) draw(0, 0, false);

  var resizeT;
  window.addEventListener("resize", function () {
    clearTimeout(resizeT);
    resizeT = setTimeout(function () { build(); packets = []; if (reduce) draw(0, 0, false); }, 150);
  });

  if (!reduce) {
    var onView = function (v) {
      if (v && !running) { running = true; requestAnimationFrame(frame); }
      if (!v) running = false;
    };
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (entries) { onView(entries[0].isIntersecting); }, { threshold: 0.05 }).observe(cv);
    } else { onView(true); }
  }
})();
