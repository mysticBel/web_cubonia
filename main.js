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

// swipper

var carouselWidth = $(".carousel-inner")[0].scrollWidth;
var cardWidth = $(".carousel-item").width();

var scrollPosition = 0;

$(".carousel-control-next").on("click", function () {
    if (scrollPosition < (carouselWidth - cardWidth * 4)) { 
        console.log("next")
        //check if you can go any further
      scrollPosition += cardWidth;  //update scroll position
      $(".carousel-inner").animate({ scrollLeft: scrollPosition },600); //scroll left
    }
  });

  $(".carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
      scrollPosition -= cardWidth;
      $(".carousel-inner").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
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


  //// slider coursos vanilla
  let slideIndex = 0;
  let isDragging = false;
  let startX, currentX;

  $(document).ready(function() {
    $('.next-btn').click(function() {
      moverSlider(1);
    });

    $('.prev-btn').click(function() {
      moverSlider(-1);
    });

    $('.cards-slider').on('mousedown touchstart', function(e) {
      isDragging = true;
      startX = e.pageX || e.originalEvent.touches[0].pageX;
    });

    $(document).on('mouseup touchend', function() {
      isDragging = false;
    });

    $('.cards-slider').on('mousemove touchmove', function(e) {
      if (!isDragging) return;
      e.preventDefault();
      currentX = e.pageX || e.originalEvent.touches[0].pageX;
      const diffX = currentX - startX;
      if (diffX > 50) {
        moverSlider(-1);
        isDragging = false;
      } else if (diffX < -50) {
        moverSlider(1);
        isDragging = false;
      }
    });
  });

  function moverSlider(n) {
    slideIndex += n;
    const maxSlideIndex = $('.card').length - 3; // Definir el máximo índice del slider
    if (slideIndex > maxSlideIndex) {
      slideIndex = maxSlideIndex;
    }
    if (slideIndex < 0) {
      slideIndex = 0;
    }
    mostrarCards();
  }

  function mostrarCards() {
    const slideWidth = $('.card').width();
    const offset = -slideIndex * slideWidth;
    $('.cards-slider').css('transform', 'translateX(' + Math.min(0, Math.max(offset, -($('.card').length - 3) * slideWidth)) + 'px)');
  }


// form 
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
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