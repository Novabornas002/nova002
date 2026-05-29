const toggle   = document.getElementById('systemToggle');
const sideMenu  = document.getElementById('sideMenu');
const overlay   = document.getElementById('menuOverlay');
const closeBtn  = document.getElementById('sideClose');
const statusTxt = toggle.querySelector('.status-text');

function openMenu() {
  toggle.classList.add('is-open');
  sideMenu.classList.add('is-open');
  overlay.classList.add('is-open');
  sideMenu.setAttribute('aria-hidden', 'false');
  statusTxt.textContent = 'ONLINE';
}

function closeMenu() {
  toggle.classList.remove('is-open');
  sideMenu.classList.remove('is-open');
  overlay.classList.remove('is-open');
  sideMenu.setAttribute('aria-hidden', 'true');
  statusTxt.textContent = 'OFFLINE';
}

toggle.addEventListener('click', () => {
  sideMenu.classList.contains('is-open') ? closeMenu() : openMenu();
});

closeBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

sideMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && sideMenu.classList.contains('is-open')) closeMenu();
});
