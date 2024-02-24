
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