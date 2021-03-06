"use strict";

var navMain = document.querySelector(".navigation");
var navToggle = document.querySelector(".navigation__toggle");
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

// модальное окно
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
    prevArrow: $(".slider-projects__prev"),
    nextArrow: $(".slider-projects__next"),
  });
});

$(document).ready(function(){
  $(".fade2").slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear"
  });
});

// block calculator
$(document).ready(function(){
  $(".fade-calculator").slick({
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    prevArrow: $(".slider-balcony__prev"),
    nextArrow: $(".slider-balcony__next"),
  });
});

// fancybox
$(document).ready(function() {
  $(".gallery a").fancybox(); // выбор всех ссылок с классом gallery
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

// табы - виды остекления теплое/холодное
(function () {
  $("#options-tabs>li>a").click( function () {
    $("#options-tabs>li").removeClass("tabs__item--active"); //Удалить "active" класс
    $("#options-tabs>li").removeClass("tabs__item--right");
    $(this).parent().addClass("tabs__item--active"); //Добавить "active" для выбранной вкладки
    $(this).parent().addClass("tabs__item--right");
    $("#tabs_container>div").hide();
    var t_content=$(this).attr("href");
    $(t_content).show();
    return false;
  });
  $("#options-tabs>li>a:first").trigger("click");
})();

// табы - страница калькулятор
(function () {
  $("#calc-tabs>li>a").click( function () {
    $("#tabs_container>div").hide();
    var t_content=$(this).attr("href");
    $(t_content).show();
    return false;
  });
  $("#calc-tabs>li>a:first").trigger("click");
})();

// табы о компании
(function () {
  $("#tabs-menu>li>a").click( function () {
    $("#tabs_container>div").hide();
    var t_content=$(this).attr("href");
    $(t_content).show();
    return false;
  });
  $("#tabs-menu>li>a:first").trigger("click");
})();

// табы - страница контакты
(function () {
  $("#js-maps>.map__item").click( function () {
    $("#map_container>div").hide();
    var t_content=$(this).attr("href");
    $(t_content).show();
    return false;
  });
  $("#js-maps>.map__item:first").trigger("click");
})();


// плавный скролл по якорным ссылкам на странице
$(document).ready(function(){
  $("a[href*=#]").on("click", function(e){
      var anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: $(anchor.attr('href')).offset().top-110
      }, 877);
      e.preventDefault();
      return false;
  });
});



$(function() {
  //Вешаем обработчики
  var addListeners = function(slider) {
      var $buttons = $('.toggle-slick');
      $buttons.on('click', function() {
        var slide = $(this).attr('data-slide');
        slider.slick('slickGoTo', slide);
      })
  };
  var addGoHash = function(slider) {
      var slide = window.location.hash.replace("#","");
      if (slide) {
        setTimeout(function() {
          slider.slick('slickGoTo', slide, true);
        });
      }
  };

  //Инициализируем слайдер
  var init = function() {
    var $slickContainer = $('.slider-for');
    //Обработчик события init
    $slickContainer.on('init', function(event, slick, currentSlide, nextSlide) {
      var $slider = $(this);
      addListeners($slider);
      addGoHash($slider);
    });

    //Инициализация слайдера
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
      adaptiveHeight: true,
      infinite: true
    });
  };

  init();
});



