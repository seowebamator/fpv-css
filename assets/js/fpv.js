/**
 * FPV CSS - Navigation
 *
 * Handles mobile hamburger menu toggle and desktop hover for dropdowns.
 *
 * @package FPV CSS
 */

if (window.matchMedia('(max-width: 768px)').matches) {
  document.getElementById('nav-toggle').addEventListener('click', () => {
    const expanded = document.getElementById('nav-toggle').getAttribute('aria-expanded') === 'true';
    document.getElementById('nav-toggle').setAttribute('aria-expanded', !expanded);
  });
}

if (window.matchMedia('(min-width: 769px)').matches) {
  document.querySelectorAll('nav details').forEach(d => {
    d.addEventListener('mouseenter', () => d.open = true);
    d.addEventListener('mouseleave', () => d.open = false);
  });
}
