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


// controla el funcionamiento del boton de wpp
document.getElementById("whatsapp-btn").onclick = function() {
  window.location.href = "https://wa.me/3512343686?text=Hola,%20quiero%20info%20sobre%20las%20clases%20de%20taekwondo";
};



const check = document.getElementById("check");
const body = document.getElementById("body");

check.addEventListener("change", function() {
  if (this.checked) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "auto";
  }
});

const loginButton = document.getElementById('loginButton');

loginButton.addEventListener('click', () => {
  window.location.href = '/Docs/login.html';
});
