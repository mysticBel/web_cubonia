// navbar
$(document).ready(function () {
  $(".slider-cursos").slick({
    dots: true,
    arrows: true,
    autoplay: false,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  $(".slider-instructor").slick({
    dots: false,
    arrows: true,
    autoplay: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 668,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  $(".slider-workdone").slick({
    dots: false,
    arrows: true,
    autoplay: true,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 668,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 100) {
      $("nav").css(
        "background-color",
        "#000"
      ); /* Cambiar a fondo negro al hacer scroll */
    } else {
      $("nav").css(
        "background-color",
        "rgba(0, 0, 0, 0.01)"
      ); /* Restaurar el fondo con transparencia */
    }
  });

  $(".menu-icon").click(function () {
    $("nav ul").toggleClass("show");
  });
  $(".slide").hover(
    function () {
      $(this).find(".hide-hover").hide();
      $(this).find(".show-hover").show();
    },
    function () {
      $(this).find(".hide-hover").show();
      $(this).find(".show-hover").hide();
    }
  );
});

/////////
function mostrarInformacion(numero) {
  // Ocultar todas las informaciones de personas
  document.querySelectorAll(".person-info").forEach((info) => {
    info.style.display = "none";
    document
    .querySelector(".slider img:nth-child(" + 1 + ")")
    .classList.add("active");
  });
  // Mostrar la información de la persona seleccionada
  document.getElementById("info-" + numero).style.display = "flex";

  // Eliminar la clase 'active' de todas las imágenes
  document.querySelectorAll(".slider img").forEach((img) => {
    img.classList.remove("active");
  });
  // Agregar la clase 'active' a la imagen seleccionada
  document
    .querySelector(".slider img:nth-child(" + numero + ")")
    .classList.add("active");
}

function irAEnlace(url) {
   // Evitar el comportamiento predeterminado del evento onclick
   event.preventDefault();
    // Abrir el enlace en otra página
    window.open(url, '_blank');
    return false;
     // Evitar el comportamiento predeterminado del enlace
   
}

// form
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
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



  ///scroll top
  $(document).ready(function() {
    // Desplazamiento suave al hacer clic en el botón de "Subir al Inicio"
    $('.scroll-top').on('click', function(event) {
      // Evitar el comportamiento predeterminado del enlace
      event.preventDefault();
      // Obtener la posición del enlace de destino
      var target = $(this).attr('href');
      var targetOffset = $(target).offset().top;
      // Animar el desplazamiento a la posición del destino
      $('html, body').animate({
        scrollTop: targetOffset
      }, 1000); // Duración de la animación en milisegundos
    });
  });




  //cursos slider
  function irACurso1() {
    window.location.href = 'modelado-personajes-3d.html'; 
  }
  function irACurso2() {
    window.location.href = 'modelado-props.html'; 
  }
  function irACurso3() {
    window.location.href = 'modelado-hardsurface.html'; 
  }
  function irACurso4() {
    window.location.href = 'escultura-personajes-zbrush.html'; 
  }



//instructores template 

function abrirEnlace(url) {
  window.open(url, '_blank');
}


//mostrar informacion de cursos - cursos template
  /////////
  function mostrarInformacionCurso(numero) {
 
    // Ocultar todas las informaciones de personas
    document.querySelectorAll('.course-info').forEach(info => {
      info.style.display = 'none';
 
    });

    // Mostrar la información de la persona seleccionada
    document.getElementById('info-' + numero).style.display = 'flex';
    
    // Eliminar la clase 'active' de todas las imágenes
    document.querySelectorAll('.button-box-dynamic').forEach(button => {
      button.classList.remove('active');
    });
    // Agregar la clase 'active' a la imagen seleccionada
    document.querySelector('.button-box-dynamic:nth-child(' + numero + ')').classList.add('active');
  }


//temario - cursos template
$(document).ready(function () {
  $('.archive_year ul').hide();

  $('.years').on('click', function () {
      $(this).children('ul.archive_month').slideToggle();
      $('.archive_month').not($(this).children('ul.archive_month')).slideUp();
  });

  $('.months').on('click', function (e) {
      $(this).children('ul.archive_posts').slideToggle();
      $('.archive_posts').not($(this).children('ul.archive_posts')).slideUp();
  });
});

//accordion

jQuery(document).ready(function() {
  // run the accordion
var allPanels = jQuery('.accord-content').hide();
var heads = jQuery('.accordion header');
jQuery(heads).on('click', function() {
    $this = jQuery(this);
    $target =  $this.parent().find('div.accord-content');
    if(!$target.hasClass('active')){
        heads.removeClass('selected');
        $this.addClass('selected');
        allPanels.removeClass('active').slideUp();
        $target.addClass('active').slideDown();
    }
});
});

//logo scroll to top
function scrollToTopHeader() {
  window.scrollTo({
      top: 0,
      behavior: "smooth" // Hacer que el desplazamiento sea suave
  });
}
//
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
      section.scrollIntoView({
          behavior: 'smooth'
      });
  }
}
