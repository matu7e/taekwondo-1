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






const check = document.getElementById("check");
const body = document.getElementById("body");

check.addEventListener("change", function() {
  if (this.checked) {
    body.style.overflow = "hidden";
   
  } else {
    body.style.overflow = "auto";
  }
});









window.onload = function() {
  var historiaSection = document.getElementById("historia");
  var ramasSection = document.getElementById("ramas");

  historiaSection.classList.add("fade-in");
  ramasSection.classList.add("fade-in");
};

const loginButton = document.getElementById('loginButton');

loginButton.addEventListener('click', () => {
  window.location.href = 'login.html';
});