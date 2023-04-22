"use strict"

let swiper = new Swiper('.swiper', {
   // Optional parameters
   // direction: 'vertical',
   slidesPerView: 1,
   spaceBetween: 30,
   // Responsive breakpoints
   breakpoints: {
      // when window width is >= 320px
      480: {
         slidesPerView: 2,
      },
      // when window width is >= 480px
      768: {
         slidesPerView: 3,
      }
   },
   loop: true,

   // If we need pagination
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },
   speed: 800,
   spaceBetween: 20,

});