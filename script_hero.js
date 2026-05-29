(function () {
  const heroSection = document.querySelector('.hero-wrap');
  const heroCursor = document.getElementById('heroCursor');
  const invertCircle = document.getElementById('heroInvertCircle');

  if (!heroSection || !heroCursor) return;

  const RADIUS = 58; // matches SVG outer circle r="58"

  let targetX = 0, targetY = 0;
  let curX = 0, curY = 0;
  let rafId = null;

  function animate() {
    curX += (targetX - curX) * 0.14;
    curY += (targetY - curY) * 0.14;

    heroCursor.style.transform = `translate(${curX}px, ${curY}px) translate(-50%, -50%)`;

    if (invertCircle) {
      invertCircle.style.clipPath = `circle(${RADIUS}px at ${curX}px ${curY}px)`;
    }

    rafId = requestAnimationFrame(animate);
  }

  document.addEventListener('mousemove', (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
  });

  heroSection.addEventListener('mouseenter', () => {
    heroCursor.classList.add('visible');
    if (invertCircle) invertCircle.style.clipPath = `circle(${RADIUS}px at ${curX}px ${curY}px)`;
    if (!rafId) rafId = requestAnimationFrame(animate);
  });

  heroSection.addEventListener('mouseleave', () => {
    heroCursor.classList.remove('visible');
    if (invertCircle) invertCircle.style.clipPath = 'circle(0px at -200px -200px)';
    if (rafId) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
  });
})();
