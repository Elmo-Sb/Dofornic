document.addEventListener('DOMContentLoaded', function() {
  var navbarItems = document.querySelectorAll('.navbar ul li');
  var submenu = document.querySelector('.submenu');
  var submenuList = document.getElementById('submenu-list');
  var primerLogo = document.getElementById('primerlogo');
  var contentContainer = document.getElementById('content-container');
  
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
        contentContainer.style.display = 'none'; // Hide the content container
      } else {
        options.forEach(function(option) {
          var li = document.createElement('li');
          li.textContent = option;
          li.addEventListener('click', function() {
            // Hide all content sections
            var contentSections = document.querySelectorAll('.content-section');
            contentSections.forEach(function(section) {
              section.style.display = 'none';
            });

            // Show the selected content section
            var selectedSection = document.getElementById(option.toLowerCase());
            selectedSection.style.display = 'block';
          });
          submenuList.appendChild(li);
        });

        submenu.style.display = 'block'; // Show the submenu
        contentContainer.style.display = 'block'; // Show the content container
      }
    });
  });

  primerLogo.addEventListener('click', function() {
    submenu.style.display = 'none'; // Hide the submenu when clicking the first logo
    contentContainer.style.display = 'none'; // Hide the content container
  });
});
