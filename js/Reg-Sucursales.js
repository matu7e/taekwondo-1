// ... Código anterior ...

// Obtenemos los elementos necesarios
const branchDropdown = document.getElementById('branchDropdown');
const selectedBranch = document.getElementById('selectedBranch');
const dropdownOptions = branchDropdown.querySelector('.dropdown-options');
const optionsList = dropdownOptions.querySelectorAll('li');

// Añadimos un manejador de eventos para ocultar las opciones al hacer clic fuera del desplegable
document.addEventListener('click', event => {
  if (!branchDropdown.contains(event.target) && event.target !== selectedBranch) {
    dropdownOptions.style.display = 'none';
  }
});

// Añadimos un manejador de eventos para mostrar/ocultar las opciones al hacer clic en el desplegable
selectedBranch.addEventListener('click', () => {
  dropdownOptions.style.display = dropdownOptions.style.display === 'none' ? 'block' : 'none';
});

// Añadimos un manejador de eventos para cada opción del desplegable
optionsList.forEach(option => {
  option.addEventListener('click', () => {
    selectedBranch.textContent = option.textContent;
    dropdownOptions.style.display = 'none';
  });
});

// ... Resto del código ...
