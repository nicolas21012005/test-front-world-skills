// === Menú desplegable ===
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('abierto'); // Abre o cierra el menú
});
