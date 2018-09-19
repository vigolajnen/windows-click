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

// слайдер slick

$(document).ready(function(){
  $(".fade").slick({
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear"
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


// var modalOpen = document.querySelector(".information__button");
// var modal = document.querySelector(".feedback");
// var modalBtn = document.querySelector(".feedback__close");

// modalOpen.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   modal.classList.add("feedback-show");
// });

// modalBtn.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   modal.classList.remove("feedback-show");
// });


// Sticky block
$(document).ready(function() {
  // grab the initial top offset of the navigation 
  var stickyNavTop = $('.line-block').offset().top;
    
  // our function that decides weather the navigation bar should have "fixed" css position or not.
  var stickyNav = function(){
    var scrollTop = $(window).scrollTop(); // our current vertical position from the top
         
    // if we've scrolled more than the navigation, change its position to fixed to stick to top,
    // otherwise change it back to relative
    if (scrollTop > stickyNavTop) { 
      $('.line-block').addClass('sticky');
    } else {
      $('.line-block').removeClass('sticky'); 
    }
  };

  stickyNav();
  // and run it again every time you scroll
  $(window).scroll(function() {
    stickyNav();
  });
});

//spincrement - перебор цифр
jQuery(document).ready(function(){
  var show = true;
  var countbox = ".guarantees";
  jQuery(window).on("scroll load resize", function(){
    if(!show) return false;                   // Отменяем показ анимации, если она уже была выполнена
    var w_top = jQuery(window).scrollTop();        // Количество пикселей на которое была прокручена страница
    var e_top = jQuery(countbox).offset().top;     // Расстояние от блока со счетчиками до верха всего документа
    var w_height = jQuery(window).height();        // Высота окна браузера
    var d_height = jQuery(document).height();      // Высота всего документа
    var e_height = jQuery(countbox).outerHeight(); // Полная высота блока со счетчиками
    if(w_top + 200 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
      jQuery(".spincrement").spincrement({
        from: 0,
        thousandSeparator: " ",
        duration: 2500
      });
      show = false;
    }
  });
});
