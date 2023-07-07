document.addEventListener('DOMContentLoaded', function() {
    var navbarItems = document.querySelectorAll('.navbar ul li');
    var submenu = document.querySelector('.submenu');
    var submenuList = document.getElementById('submenu-list');
    var primerLogo = document.getElementById('primerlogo');
  
    var submenuOptions = {
      'Información': ['EMPRESA', 'PLATAFORMA'],
      'Conferencia': ['INICIO', 'CALENDARIO', 'REUNIONES'],
      'Documentación': ['EMPRESAS', 'MENSAJES', 'PROGRESOS']
    };
  
    navbarItems.forEach(function(item) {
      item.addEventListener('click', function(event) {
        var clickedItem = event.target.textContent;
        var options = submenuOptions[clickedItem];
  
        submenuList.innerHTML = ''; // Clear previous submenu options
  
        if (item === primerLogo) {
          submenu.style.display = 'none'; // Hide the submenu
        } else {
          options.forEach(function(option) {
            var li = document.createElement('li');
            li.textContent = option;
            submenuList.appendChild(li);
          });
  
          submenu.style.display = 'block'; // Show the submenu
        }
      });
    });
  
    primerLogo.addEventListener('click', function() {
      submenu.style.display = 'none'; // Hide the submenu when clicking the first logo
      submenu.style.backgroundColor = 'inherit'; // Reset the background color
    });
  });