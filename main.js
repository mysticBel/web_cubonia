

// swipper

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 5,
     loop: true,
     allowTouchMove: false,
      navigation: {
           nextEl: '#forward',
           prevEl: '#back',
       },
   scrollbar: {
           el: '.swiper-scrollbar',
        
         },
         slidesPerView: 7,
         spaceBetween: 5,
     
         // init: false,
       
         breakpoints: {
           340: {
             slidesPerView: 1,
             spaceBetween: 4,
             allowTouchMove: true,
           },
           640: {
             slidesPerView: 1,
             spaceBetween: 4,
             allowTouchMove: true,
           },
           768: {
             slidesPerView: 3,
             spaceBetween: 4,
             allowTouchMove: true,
           },
           1024: {
             slidesPerView: 5,
             spaceBetween: 5,
           },
           
            1920: {
             slidesPerView: 5,
             spaceBetween: 5,
           },
           2500: {
             slidesPerView: 7,
             spaceBetween: 5,
           },
           
         }
       });
   
   
   
   var $cont = document.querySelector('.cont');
   var $we = document.querySelector('.we');
   var $lib = document.querySelector('.lib');
   var $elsArr = [].slice.call(document.querySelectorAll('.el'));
   
   var $closeBtn = document.querySelector('.outer');
   
   
   document.addEventListener("DOMContentLoaded", function(event){
   setTimeout(function() {
     $cont.classList.remove('s--inactive');
   }, 200);
   
    });
   
   
   $elsArr.forEach(function($el) {
     $el.addEventListener('click', function() {
       if (this.classList.contains('s--active')) return;
       $cont.classList.add('s--el-active');
       $we.classList.add('s--el-active');
       $lib.classList.add('s--el-active');
       this.classList.add('s--active');
       $(".swiper-slide").addClass("dim-2");
       $("body").addClass("dim");
       $("html", "body").addClass("noscroll");
       $(".lib").addClass("dim-3");
       $(".outer").addClass("active");
       
     });
   });
   
   
   
   document.addEventListener("DOMContentLoaded", function(event){
   
   
     $closeBtn.addEventListener('click', function(e) {
       e.stopPropagation();
       $cont.classList.remove('s--el-active');
       $we.classList.remove('s--el-active');
       $lib.classList.remove('s--el-active');
       document.querySelector('.el.s--active').classList.remove('s--active');
       $('body, html').removeClass('no-scroll')
       $('body').removeClass('dim')
       $(".swiper-slide").removeClass("dim-2");
       $(".outer").removeClass("active");
       $(".lib").removeClass("dim-3");
       $('.lib-shot').removeClass('lib-shot-slide');
     });
   
   
   });
   
   
//   