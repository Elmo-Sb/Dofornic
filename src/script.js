document.addEventListener('DOMContentLoaded', function() {
  var navbarItems = document.querySelectorAll('.navbar ul li');
  var submenu = document.querySelector('.submenu');
  var submenuList = document.getElementById('submenu-list');
  var primerLogo = document.getElementById('primerlogo');
  var contentContainer = document.getElementById('content-container');
  var bienvenidaDiv = document.querySelector('.bienvenida');
  
  var submenuOptions = {
    'Información': ['EMPRESA', 'PLATAFORMA'],
    'Conferencia': ['INICIO', 'CALENDARIO', 'REUNIONES'],
    'Documentación': ['EMPRESAS', 'MENSAJES', 'PROGRESO']
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

      if (item !== primerLogo) {
        bienvenidaDiv.style.display = 'none'; // Hide the "bienvenida" div
      }
    });
  });

  primerLogo.addEventListener('click', function() {
    submenu.style.display = 'none'; // Hide the submenu when clicking the first logo
    contentContainer.style.display = 'none'; // Hide the content container
    bienvenidaDiv.style.display = 'block'; // Show the "bienvenida" div
  });
});
document.addEventListener('DOMContentLoaded', function() {
    var calendario = document.getElementById('calendario');
    var mesAnioElement = document.getElementById('mes-anio');
    var diasElement = document.getElementById('calendario-dias');
    var botonAnterior = document.getElementById('anterior');
    var botonSiguiente = document.getElementById('siguiente');
    var notas = {}; // Objeto para almacenar las notas de cada fecha

    // Variables globales
    var fechaActual = new Date();
    var mesActual = fechaActual.getMonth();
    var anioActual = fechaActual.getFullYear();

    // Renderizar el calendario
    renderizarCalendario(mesActual, anioActual);

    // Agregar eventos a los botones de navegación
    botonAnterior.addEventListener('click', function() {
        cambiarMes(-1);
    });

    botonSiguiente.addEventListener('click', function() {
        cambiarMes(1);
    });

    // Función para renderizar el calendario
    function renderizarCalendario(mes, anio) {
        // Limpiar el contenido anterior
        diasElement.innerHTML = '';

        // Obtener el número de días en el mes y el día de la semana del primer día
        var numDias = new Date(anio, mes + 1, 0).getDate();
        var primerDiaSemana = new Date(anio, mes, 1).getDay();

        // Actualizar el título del mes y año
        mesAnioElement.textContent = obtenerNombreMes(mes) + ' ' + anio;

        // Calcular la cantidad de celdas necesarias en la tabla
        var totalCeldas = 7 * Math.ceil((numDias + primerDiaSemana) / 7);

        // Crear las celdas del calendario
        for (var i = 0; i < totalCeldas; i++) {
            var fila = Math.floor(i / 7);
            var columna = i % 7;

            // Crear una nueva celda
            var td = document.createElement('td');
            td.addEventListener('click', function() {
                var dia = this.textContent;
                var fecha = new Date(anio, mes, dia);
                var nota = prompt('Ingresa una nota para el ' + dia + ' de ' + obtenerNombreMes(mes) + ':');
                if (nota) {
                    // Almacenar la nota en el objeto de notas usando la fecha como clave
                    notas[fecha.toISOString()] = nota;
                }
            });

            // Calcular el día correspondiente
            var dia = i - primerDiaSemana + 1;

            // Verificar si el día está dentro del mes actual
            if (dia > 0 && dia <= numDias) {
                td.textContent = dia;

                // Resaltar el día actual
                if (mes === mesActual && anio === anioActual && dia === fechaActual.getDate()) {
                    td.classList.add('actual');
                }
            }

            // Agregar la celda a la fila correspondiente
            var filaElement;
            if (columna === 0) {
                filaElement = document.createElement('tr');
                diasElement.appendChild(filaElement);
            } else {
                filaElement = diasElement.lastChild;
            }
            filaElement.appendChild(td);
        }
    }

    // Función para cambiar de mes
    function cambiarMes(delta) {
        // Calcular el nuevo mes y año
        mesActual += delta;
        if (mesActual < 0) {
            mesActual = 11;
            anioActual--;
        } else if (mesActual > 11) {
            mesActual = 0;
            anioActual++;
        }

        // Renderizar el calendario con el nuevo mes y año
        renderizarCalendario(mesActual, anioActual);
    }

    // Función para obtener el nombre del mes
    function obtenerNombreMes(mes) {
        var nombresMeses = [
            'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
            'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
        ];
        return nombresMeses[mes];
    }
});
document.addEventListener('DOMContentLoaded', function() {
  const opciones = document.querySelectorAll('.toggle-option');

  opciones.forEach(function(opcion) {
    opcion.addEventListener('click', function() {
      if (opcion.classList.contains('active')) {
        return;
      }

      opciones.forEach(function(opcion) {
        opcion.classList.remove('active');
      });

      opcion.classList.add('active');
    });
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const opciones = document.querySelectorAll('.toggle-option');
  const listaProx = document.getElementById('listaprox');
  const listaGrab = document.getElementById('listagrab');

  opciones.forEach(function(opcion) {
    opcion.addEventListener('click', function() {
      opciones.forEach(function(opcion) {
        opcion.classList.remove('active');
      });

      opcion.classList.add('active');

      if (opcion.id === 'opcion1') {
        listaProx.style.display = 'block';
        listaGrab.style.display = 'none';
      } else if (opcion.id === 'opcion2') {
        listaProx.style.display = 'none';
        listaGrab.style.display = 'block';
      }
    });
  });
});

// Ocultar los divs inicialmente
document.getElementById('listaprox').style.display = 'none';
document.getElementById('listagrab').style.display = 'none';

document.addEventListener('DOMContentLoaded', function() {
  const opciones = document.querySelectorAll('.toggle-option');
  const cronogramaDiv = document.getElementById('crono');
  const mensajesDiv = document.getElementById('mens');
  const documentosDiv = document.getElementById('docs');
  const consultasDiv = document.getElementById('cons');

  opciones.forEach(function(opcion) {
    opcion.addEventListener('click', function() {
      opciones.forEach(function(opcion) {
        opcion.classList.remove('active');
      });

      opcion.classList.add('active');

      // Mostrar el div correspondiente a la opción seleccionada
      if (opcion.id === 'opcion3') {
        cronogramaDiv.style.display = 'block';
        mensajesDiv.style.display = 'none';
        documentosDiv.style.display = 'none';
        consultasDiv.style.display = 'none';
      } else if (opcion.id === 'opcion4') {
        cronogramaDiv.style.display = 'none';
        mensajesDiv.style.display = 'block';
        documentosDiv.style.display = 'none';
        consultasDiv.style.display = 'none';
      } else if (opcion.id === 'opcion5') {
        cronogramaDiv.style.display = 'none';
        mensajesDiv.style.display = 'none';
        documentosDiv.style.display = 'block';
        consultasDiv.style.display = 'none';
      } else if (opcion.id === 'opcion6') {
        cronogramaDiv.style.display = 'none';
        mensajesDiv.style.display = 'none';
        documentosDiv.style.display = 'none';
        consultasDiv.style.display = 'block';
      }
    });
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const opciones = document.querySelectorAll('.toggle-option2');

  opciones.forEach(function(opcion) {
    opcion.addEventListener('click', function() {
      if (opcion.classList.contains('active')) {
        return;
      }

      opciones.forEach(function(opcion) {
        opcion.classList.remove('active');
      });

      opcion.classList.add('active');
    });
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const opciones = document.querySelectorAll('.toggle-option2');
  const recepDiv = document.getElementById('recep');
  const absoDiv = document.getElementById('abso');

  opciones.forEach(function(opcion) {
    opcion.addEventListener('click', function() {
      opciones.forEach(function(opcion) {
        opcion.classList.remove('active');
      });

      opcion.classList.add('active');

      // Mostrar el div correspondiente a la opción seleccionada
      if (opcion.id === 'opcion7') {
        recepDiv.style.display = 'block';
        absoDiv.style.display = 'none';
      } else if (opcion.id === 'opcion8') {
        recepDiv.style.display = 'none';
        absoDiv.style.display = 'block';
    }});
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const opciones = document.querySelectorAll('.toggle-option');
  const descpDiv = document.getElementById('descp');
  const actDiv = document.getElementById('act');
  const confDiv = document.getElementById('conf');
  

  opciones.forEach(function(opcion) {
    opcion.addEventListener('click', function() {
      opciones.forEach(function(opcion) {
        opcion.classList.remove('active');
      });

      opcion.classList.add('active');

      // Mostrar el div correspondiente a la opción seleccionada
      if (opcion.id === 'opcion9') {
        descpDiv.style.display = 'block';
        actDiv.style.display = 'none';
        confDiv.style.display = 'none';
      } else if (opcion.id === 'opcion10') {
          descpDiv.style.display = 'none';
          actDiv.style.display = 'block';
          confDiv.style.display = 'none';
      }  else if (opcion.id === 'opcion11') {
          descpDiv.style.display = 'none';
          actDiv.style.display = 'none';
          confDiv.style.display = 'block';
      }
    });
  });
});
const logoDiv = document.getElementById("logomenu");
const menuDiv = document.getElementById("menuusuario");

logoDiv.addEventListener("click", function(event) {
  event.stopPropagation(); // Evita que el clic se propague al documento
  if (menuDiv.style.display === "block") {
    // Si el div2 está abierto, lo cerramos
    menuDiv.style.display = "none";
  } else {
    // Si el div2 está cerrado, lo abrimos
    menuDiv.style.display = "block";
  }
});

document.addEventListener("click", function(event) {
  // Oculta el div2 si se hace clic fuera de él
  if (!menuDiv.contains(event.target) && event.target !== logoDiv) {
    menuDiv.style.display = "none";
  }
});