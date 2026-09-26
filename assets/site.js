/* Birinder Bachhal. Small and deliberate, no libraries.
   Nothing here is required for content to be visible. */
(function () {
  'use strict';
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine = matchMedia('(pointer: fine)').matches;
  var $$ = function (s) { return [].slice.call(document.querySelectorAll(s)); };

  /* marker highlights swipe in */
  var marks = $$('mark');
  if (!('IntersectionObserver' in window) || reduce) {
    marks.forEach(function (n) { n.classList.add('lit'); });
  } else {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add('lit');
        io.unobserve(e.target);
      });
    }, { threshold: 0.4 });
    marks.forEach(function (n) { io.observe(n); });
  }

  /* peek: pulled-out photo on the compact project list */
  var peek = document.getElementById('peek');
  if (peek && fine && !reduce) {
    var img = peek.querySelector('img'), live = null, queued = false, mx = 0, my = 0;
    function place() {
      var w = peek.offsetWidth || 250, h = peek.offsetHeight || 200;
      peek.style.left = Math.min(Math.max(mx + 190, w / 2 + 14), innerWidth - w / 2 - 14) + 'px';
      peek.style.top = Math.min(Math.max(my, h / 2 + 14), innerHeight - h / 2 - 14) + 'px';
      queued = false;
    }
    $$('[data-peek]').forEach(function (row) {
      var src = row.getAttribute('data-peek');
      row.addEventListener('mouseenter', function () {
        live = row;
        if (img.getAttribute('src') !== src) img.setAttribute('src', src);
        peek.classList.add('on');
      });
      row.addEventListener('mouseleave', function () {
        if (live === row) { peek.classList.remove('on'); live = null; }
      });
      row.addEventListener('mousemove', function (e) {
        mx = e.clientX; my = e.clientY;
        if (!queued) { queued = true; requestAnimationFrame(place); }
      }, { passive: true });
    });
  }

  /* nav: mark the section you're in */
  var links = $$('.nav ul a[href^="#"]');
  var secs = links.map(function (a) { return document.querySelector(a.getAttribute('href')); });
  if (secs.filter(Boolean).length) {
    var busy = false;
    addEventListener('scroll', function () {
      if (busy) return;
      busy = true;
      requestAnimationFrame(function () {
        var mid = scrollY + innerHeight * 0.3, cur = -1;
        secs.forEach(function (s, i) { if (s && s.offsetTop <= mid) cur = i; });
        links.forEach(function (a, i) { a.classList.toggle('now', i === cur); });
        busy = false;
      });
    }, { passive: true });
  }
})();
