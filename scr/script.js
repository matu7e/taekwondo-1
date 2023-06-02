// Obtener el elemento del botón
const checkBtn = document.querySelector('.checkbtn');

// Obtener el elemento del menú
const contenedorMenu = document.querySelector('.contenedor-menu');

// Agregar un evento de clic al botón
checkBtn.addEventListener('click', function() {
  // Verificar si el menú está oculto o visible
  const menuVisible = contenedorMenu.style.left === '0px';

  // Aplicar la propiedad 'left' correspondiente
  contenedorMenu.style.left = menuVisible ? '-100%' : '0';
});