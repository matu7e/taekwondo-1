const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const registerLink = document.getElementById('registerLink');
const loginLink = document.getElementById('loginLink');
const forgotPasswordLink = document.getElementById('forgotPasswordLink');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // Implementar la lógica para enviar los datos del formulario de inicio de sesión al servidor.
});

registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // Implementar la lógica para enviar los datos del formulario de registro al servidor.
});

registerLink.addEventListener('click', (e) => {
  e.preventDefault();
  loginForm.style.display = 'none';
  registerForm.style.display = 'block';
});

loginLink.addEventListener('click', (e) => {
  e.preventDefault();
  loginForm.style.display = 'block';
  registerForm.style.display = 'none';
});

function closeModal() {
  const modal = document.getElementById('forgotPasswordModal');
  modal.style.display = 'none';
}

// Cerrar el modal cuando se hace clic fuera de él
window.addEventListener('click', (event) => {
  const modal = document.getElementById('forgotPasswordModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

forgotPasswordLink.addEventListener('click', (e) => {
  e.preventDefault();
  const modal = document.getElementById('forgotPasswordModal');
  modal.style.display = 'block';
});

const forgotPasswordForm = document.getElementById('forgotPasswordForm');

forgotPasswordForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // Implementar la lógica para enviar el código de recuperación al email ingresado.
  closeModal();
});
// ... Código anterior ...

forgotPasswordLink.addEventListener('click', (e) => {
    e.preventDefault();
    const modal = document.getElementById('forgotPasswordModal');
    modal.style.display = 'block';
  });
  
  // ... Resto del código ...
  