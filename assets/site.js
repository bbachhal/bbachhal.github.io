/* Birinder Bachhal - portfolio interactions. Vanilla, no dependencies. */
(function () {
  'use strict';
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine = window.matchMedia && window.matchMedia('(pointer: fine)').matches;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ---- reveal on scroll ---- */
  var rv = $$('.rv');
  if (rv.length) {
    if (!('IntersectionObserver' in window) || reduce) {
      rv.forEach(function (n) { n.classList.add('in'); });
    } else {
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });
      rv.forEach(function (n, i) {
        n.style.transitionDelay = (Math.min(i % 6, 5) * 55) + 'ms';
        io.observe(n);
      });
    }
  }

  /* ---- scroll progress + grid parallax + rail ---- */
  var bar = $('#bar'), grid = $('#grid');
  var railLinks = $$('#rail a');
  var sections = railLinks.map(function (a) { return document.getElementById(a.dataset.sec); })
                          .filter(Boolean);
  var ticking = false;
  function onScroll() {
    var y = window.pageYOffset || document.documentElement.scrollTop;
    var h = document.documentElement.scrollHeight - window.innerHeight;
    if (bar) bar.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
    if (grid && !reduce) grid.style.transform = 'translate3d(0,' + (-y * 0.11) + 'px,0)';
    if (sections.length) {
      var best = 0, mid = y + window.innerHeight * 0.34;
      for (var i = 0; i < sections.length; i++) {
        if (sections[i].offsetTop <= mid) best = i;
      }
      railLinks.forEach(function (a, i) { a.classList.toggle('on', i === best); });
    }
    ticking = false;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; window.requestAnimationFrame(onScroll); }
  }, { passive: true });
  onScroll();

  /* ---- crosshair cursor ---- */
  var ch = $('#chair');
  if (ch && fine && !reduce) {
    var hx = $('.h', ch), vx = $('.v', ch), rd = $('b', ch), shown = false;
    var cx = 0, cy = 0, pending = false;
    function paint() {
      hx.style.top = cy + 'px';
      vx.style.left = cx + 'px';
      rd.style.left = cx + 'px';
      rd.style.top = cy + 'px';
      rd.textContent = 'X ' + String(Math.round(cx)).padStart(4, '0') +
                       '   Y ' + String(Math.round(cy)).padStart(4, '0');
      pending = false;
    }
    document.addEventListener('mousemove', function (e) {
      cx = e.clientX; cy = e.clientY;
      if (!shown) { ch.classList.add('on'); shown = true; }
      if (!pending) { pending = true; window.requestAnimationFrame(paint); }
    }, { passive: true });
    document.addEventListener('mouseleave', function () { ch.classList.remove('on'); shown = false; });
  }

  /* ---- project hover preview ---- */
  var prev = $('#prev');
  if (prev && fine && !reduce) {
    var pimg = $('img', prev), plab = $('.lb', prev), active = null, pend = false, px = 0, py = 0;
    function move() {
      var w = prev.offsetWidth || 290, h = prev.offsetHeight || 230;
      var x = Math.min(Math.max(px + 210, w / 2 + 12), window.innerWidth - w / 2 - 12);
      var y = Math.min(Math.max(py, h / 2 + 12), window.innerHeight - h / 2 - 12);
      prev.style.left = x + 'px';
      prev.style.top = y + 'px';
      pend = false;
    }
    $$('.pj').forEach(function (row) {
      var src = row.dataset.prev, lab = row.dataset.lab || '';
      if (!src) return;
      row.addEventListener('mouseenter', function () {
        active = row;
        if (pimg.getAttribute('src') !== src) pimg.setAttribute('src', src);
        plab.textContent = lab;
        prev.classList.add('on');
      });
      row.addEventListener('mouseleave', function () {
        if (active === row) { prev.classList.remove('on'); active = null; }
      });
      row.addEventListener('mousemove', function (e) {
        px = e.clientX; py = e.clientY;
        if (!pend) { pend = true; window.requestAnimationFrame(move); }
      }, { passive: true });
    });
  }

  /* ---- marquee: duplicate track so the loop is seamless ---- */
  var tr = $('.marq .tr');
  if (tr && !reduce) { tr.innerHTML = tr.innerHTML + tr.innerHTML; }

  /* ---- stamp: build date ---- */
  var ds = $('#dstamp');
  if (ds) {
    var d = new Date(document.lastModified);
    if (!isNaN(d)) {
      ds.textContent = d.getFullYear() + '-' +
        String(d.getMonth() + 1).padStart(2, '0') + '-' +
        String(d.getDate()).padStart(2, '0');
    }
  }
})();
