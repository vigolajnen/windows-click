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


$(document).ready(function() {
    //Действия по умолчанию
    $(".tabs__item:first").addClass("tabs__item--active").show(); //Активировать первую вкладку

    //Событие по клику
    $(".tabs__item").click(function() {
        $(".tabs__item").removeClass("tabs__item--active"); //Удалить "active" класс
        $(".tabs__item").removeClass("tabs__item--right");
        $(this).addClass("tabs__item--active"); //Добавить "active" для выбранной вкладки
        $(this).addClass("tabs__item--right");
        var activeTab = $(this).find("a").attr("href"); //Найти значение атрибута, чтобы определить активный таб + контент
        $(activeTab).fadeIn(); //Исчезновение активного контента
        return false;
    });
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


// фильтр для блока "выполненные работы" на главной

var filtered = false;
$('.filterer').on('click', function(){
  var whichID = $(this).attr('id');
  console.log(whichID);
  if (whichID != 'js-filter-finish') {
    if ( $('.fade').hasClass('filtered') ) {
      $('.fade').slick('slickFilter','.filter-finish');
      $('.fade').slick('slickGoTo',0);
      filtered = false;
    } else {
      $('.fade').addClass('filtered');
    }
  } else {
    $('.fade').removeClass('filtered');
    $('.fade').slick('slickUnfilter');
    $('.fade').slick('slickGoTo',0);
  }

  if (whichID != 'js-filter-glazing') {
    if ( $('.fade').hasClass('filtered') ) {
      $('.fade').slick('slickFilter','.filter-glazing');
      $('.fade').slick('slickGoTo',0);
      filtered = false;
    } else {
      $('.fade').addClass('filtered');
    }
  } else {
    $('.fade').removeClass('filtered');
    $('.fade').slick('slickUnfilter');
    $('.fade').slick('slickGoTo',0);
  }
});


/*----------  Filter  ----------*/
$('.calc-tabs__button--active').click();

$('#slick-buttons button').bind('click', function(e){
  var filter = $(this).val();
  var key = "."+filter;
  
  $('#slick-calc').slick('slickUnfilter');
  $('#slick-calc').slick('slickFilter',key).slick('refresh');
  $('#slick-calc').slick('slickGoTo', 0);


  });

  /*----------  Carousel Slick ----------*/
  $('#slick-calc').slick({
    infinite: false,
    dots: false,
    arrows: false,
    fade: true,
    autoplay: false,
    swipe: false,
    touchMove: false,
    centerMode: true,
    variableWidth: false,
    slidesToShow: 1,
    slidesToScroll: 1
  });

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
