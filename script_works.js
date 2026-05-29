const panelsWrap = document.getElementById('panels');
    const panels = [...document.querySelectorAll('.panel')];

    function activatePanel(index) {
      panelsWrap.className = 'panels shrink hover-' + index;
      panels.forEach((panel, i) => {
        panel.classList.toggle('active', i === index);
      });
    }

    panels.forEach((panel, index) => {
      panel.addEventListener('mouseenter', () => activatePanel(index));
      panel.addEventListener('focusin', () => activatePanel(index));
    });

    panelsWrap.addEventListener('mouseleave', () => activatePanel(0));