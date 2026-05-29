 const cards = document.querySelectorAll('.card');

  function animateCard(card) {
    const percent = Number(card.dataset.percent || 0);
    const ring = card.querySelector('.ring-fill');
    const bar = card.querySelector('.meter span');
    const angle = 270 * (percent / 100);
    ring.style.setProperty('--deg', angle + 'deg');
    requestAnimationFrame(() => {
      bar.style.width = percent + '%';
    });
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCard(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.25 });

  cards.forEach((card) => observer.observe(card));