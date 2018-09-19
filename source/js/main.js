"use strict";

var navMain = document.querySelector(".navigation");
var navToggle = document.querySelector(".navigation__toggle");
var logo = document.querySelector(".js-logo");

navMain.classList.remove("navigation--nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("navigation--closed")) {
      navMain.classList.remove("navigation--closed");
      navMain.classList.add("navigation--opened");
    } else {
      navMain.classList.add("navigation--closed");
      navMain.classList.remove("navigation--opened");
    }
});

var modalOpen = document.querySelector(".page-header__button");
var modal = document.querySelector(".modal-form");
var modalBtn = document.querySelector(".modal-form__close");

modalOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal-form-show");
});

modalBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal-form-show");
});

// слайдер slick

$(document).ready(function(){
  $(".fade").slick({
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",               
    prevArrow: "Предыдущий",
    nextArrow: "Следующий"
  });
});

$(document).ready(function(){
  $(".fade2").slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear"
  });
});

$(document).ready(function() {
  $(".gallery a").fancybox(); // выбор всех ссылок с классом gallery
});


// табы для формы обратной связи

$('#tabs').tabulous({
  effect: 'scale'
});

 $('#tabs2').tabulous({
  effect: 'slideLeft'
});

 $('#tabs3').tabulous({
  effect: 'scaleUp'
});

$('#tabs4').tabulous({
  effect: 'flip'
});


// Sticky block
$(document).ready(function() {
  // grab the initial top offset of the navigation 
  var stickyNavTop = $('.page-header').offset().top;
    
  // our function that decides weather the navigation bar should have "fixed" css position or not.
  var stickyNav = function(){
    var scrollTop = $(window).scrollTop(); // our current vertical position from the top
         
    // if we've scrolled more than the navigation, change its position to fixed to stick to top,
    // otherwise change it back to relative
    if (scrollTop > stickyNavTop) { 
      $('.page-header').addClass('sticky');
    } else {
      $('.page-header').removeClass('sticky'); 
    }
  };

  stickyNav();
  // and run it again every time you scroll
  $(window).scroll(function() {
    stickyNav();
  });
});


