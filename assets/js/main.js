// $(document).ready(function(){
//   $(window).scroll(function() {
//     var top = $(document).scrollTop();
//
//     if (top > 0) {
//       $(".nav--index").removeClass("nav--big");
//       $(".nav__logo--index").removeClass("nav__logo--big");
//       $(".nav__link--index").removeClass("nav__link--big");
//     }
//     else {
//       $(".nav--index").addClass("nav--big");
//       $(".nav__logo--index").addClass("nav__logo--big");
//       $(".nav__link--index").addClass("nav__link--big");
//     }
//   });
// });

function navMenu() {
  var icon = document.getElementById("nav-icon");
  icon.classList.toggle("open");

  if ($(".side-nav").width() == 0) {
    $(".side-nav").addClass("side-nav--open");
    $(".shadow-nav").addClass("shadow-nav--open");
  }
  else {
    $(".side-nav").removeClass("side-nav--open");
    $(".shadow-nav").removeClass("shadow-nav--open");
  }
};

// var slideIndex = 1;
// showSlides(slideIndex);
//
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// };
//
// $(".fotoboek__img").click(function currentSlide() {
//   var number = $(this.parentNode).prevAll().find('.fotoboek__img').length + 1;
//   showSlides(slideIndex = number);
//   $(".modal").css("display", "block");
// });
//
// function showSlides(n) {
//   var slides = $(".modal__slide");
//
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//
//   $(slides).css("display", "none");
//   $(slides[slideIndex-1]).css("display", "block");
// };
//
// $(".modal__close").click(function() {
//   $(".modal").css("display", "none");
// });
//
// function formSubmit() {
//   alert("Bedankt, je bericht is verstuurd.")
// }
