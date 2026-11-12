(() => {
  if (!window.gsap || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const { gsap } = window;
  gsap.timeline({ defaults: { ease: 'power2.out' } })
    .from('.hero-copy', { autoAlpha: 0, y: 24, duration: .62 })
    .from('.hero-note', { autoAlpha: 0, y: 12, duration: .38 }, '-=.25')
    .from('.hero-cta', { autoAlpha: 0, y: -8, duration: .32 }, '<');
  const observer = new IntersectionObserver((entries, instance) => entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    gsap.from(entry.target, { autoAlpha: 0, y: 22, duration: .52, ease: 'power2.out' });
    instance.unobserve(entry.target);
  }), { threshold: .12 });
  document.querySelectorAll('.story-grid figure,.detail-rail > *,.drawing,.contact-grid').forEach((node) => observer.observe(node));
})();
