/* Pietro Mantovani — Portfolio
   Lightweight enhancements: active nav, mobile menu, scroll reveals */

(() => {
  // ---- Active nav link by URL ----
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-list a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path) a.classList.add('is-active');
  });

  // ---- Mobile menu toggle ----
  const toggle = document.querySelector('.nav-toggle');
  const list = document.querySelector('.nav-list');
  if (toggle && list) {
    toggle.addEventListener('click', () => {
      const open = list.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.textContent = open ? 'Chiudi' : 'Menu';
    });
    // Close on link click
    list.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        list.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.textContent = 'Menu';
      });
    });
  }

  // ---- Reveal on scroll ----
  const targets = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && targets.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    targets.forEach(t => io.observe(t));
  } else {
    targets.forEach(t => t.classList.add('is-in'));
  }

  // ---- Portfolio filter (only on portfolio page) ----
  const tags = document.querySelectorAll('[data-filter]');
  const items = document.querySelectorAll('[data-cats]');
  if (tags.length && items.length) {
    tags.forEach(tag => {
      tag.addEventListener('click', () => {
        const f = tag.dataset.filter;
        tags.forEach(t => t.classList.toggle('is-on', t === tag));
        items.forEach(it => {
          const cats = (it.dataset.cats || '').split(/\s+/);
          const show = f === 'all' || cats.includes(f);
          it.style.display = show ? '' : 'none';
        });
      });
    });
  }

  // ---- Dynamic year in footer ----
  const y = document.querySelector('[data-year]');
  if (y) y.textContent = new Date().getFullYear();
})();
