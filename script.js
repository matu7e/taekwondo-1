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



// bloquear scrol vertical al hacer clik en el menu de hambiurguesa
var scrollEnabled = true;
var label = document.querySelector(".checkbtn");

label.addEventListener("click", function() {
  scrollEnabled = !scrollEnabled;
  
  if (scrollEnabled) {
    document.body.style.overflow = "auto";  // Habilitar el scroll
  } else {
    document.body.style.overflow = "hidden";  // Deshabilitar el scroll
  }
});