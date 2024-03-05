// navbar
$(document).ready(function () {
  $(".slider-cursos").slick({
    dots: true,
    arrows: true,
    autoplay: false,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "10px",
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
    arrows: false,
    autoplay: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  $(".slider-workdone").slick({
    dots: false,
    arrows: false,
    autoplay: true,
    slidesToShow: 5,
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
        "rgba(0, 0, 0, 0.3)"
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
  window.location.href = url;
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
