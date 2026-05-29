const radarScreen = document.querySelector('.radar-screen');
const radarCoords = document.querySelector('.radar-coords');

if (radarScreen && radarCoords) {
  const xSpan = radarCoords.children[0];
  const ySpan = radarCoords.children[1];

  radarScreen.addEventListener('mousemove', (e) => {
    xSpan.textContent = `x: ${e.clientX}`;
    ySpan.textContent = `y: ${e.clientY}`;
  });

  radarScreen.addEventListener('mouseleave', () => {
    xSpan.textContent = 'x: 00';
    ySpan.textContent = 'y: 00 ';
  });
}
