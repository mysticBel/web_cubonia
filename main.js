// navbar
$(document).ready(function() {
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll > 100) {
        $("nav").css("background-color", "#000"); /* Cambiar a fondo negro al hacer scroll */
      } else {
        $("nav").css("background-color", "rgba(0, 0, 0, 0.3)"); /* Restaurar el fondo con transparencia */
      }
    });

    $(".menu-icon").click(function() {
      $("nav ul").toggleClass("show");
    });
  });



  /////////
  function mostrarInformacion(numero) {
    // Ocultar todas las informaciones de personas
    document.querySelectorAll('.person-info').forEach(info => {
      info.style.display = 'none';
    });

    // Mostrar la información de la persona seleccionada
    document.getElementById('info-' + numero).style.display = 'flex';
    
    // Eliminar la clase 'active' de todas las imágenes
    document.querySelectorAll('.slider img').forEach(img => {
      img.classList.remove('active');
    });
    // Agregar la clase 'active' a la imagen seleccionada
    document.querySelector('.slider img:nth-child(' + numero + ')').classList.add('active');
  }

  function irAEnlace(url) {
    window.location.href = url;
  }


  
// form 
document.getElementById("contactForm").addEventListener("submit", function(event) {
    //event.preventDefault();
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;

    if (nombre && email && mensaje) {
        alert("Mensaje enviado con éxito.");
        // Aquí podrías enviar los datos del formulario a tu servidor o realizar alguna otra acción
    } else {
        alert("Completa los campos.");
    }
});

  /////////
  function mostrarInformacionCurso(numero) {
    // Ocultar todas las informaciones de personas
    document.querySelectorAll('.course-info').forEach(info => {
      info.style.display = 'none';
    });

    // Mostrar la información de la persona seleccionada
    document.getElementById('info-' + numero).style.display = 'flex';
    
    // Eliminar la clase 'active' de todas las imágenes
    document.querySelectorAll('.slider img').forEach(img => {
      img.classList.remove('active');
    });
    // Agregar la clase 'active' a la imagen seleccionada
    document.querySelector('.slider img:nth-child(' + numero + ')').classList.add('active');
  }



