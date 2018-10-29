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

$(document).ready(function(){
  $(".fade3").slick({
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    prevArrow: $(".slider-projects__prev--js"),
    nextArrow: $(".slider-projects__next--js"),
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

// табы выполненые работы

(function () {
  $(".tabs__list>li>a").click(function () {
    $("#tabs_container>div").hide();
    var t_content = $(this).attr("href");
    $(t_content).show();
    return false;
  });
  $(".tabs__list>li>a:first").trigger("click");
})();

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


//spincrement - перебор цифр
jQuery(document).ready(function(){
  var show = true;
  var countbox = ".results-work";
  jQuery(window).on("scroll load resize", function(){
    if(!show) return false;                   // Отменяем показ анимации, если она уже была выполнена
    var w_top = jQuery(window).scrollTop();        // Количество пикселей на которое была прокручена страница
    var e_top = jQuery(countbox).offset().top;     // Расстояние от блока со счетчиками до верха всего документа
    var w_height = jQuery(window).height();        // Высота окна браузера
    var d_height = jQuery(document).height();      // Высота всего документа
    var e_height = jQuery(countbox).outerHeight(); // Полная высота блока со счетчиками
    if(w_top + 200 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
      jQuery(".spincrement").spincrement({
        from: 1,
        thousandSeparator: " ",
        duration: 2500
      });
      show = false;
    }
  });
});

// фильтр для блока "выполненные работы" на главной

// var filtered = false;
// $('.filterer').on('click', function(){
//   var whichID = $(this).attr('id');
//   console.log(whichID);
//   if (whichID != 'js-filter-finish') {
//     if ( $('.fade').hasClass('filtered') ) {
//       $('.fade').slick('slickFilter','.filter-finish');
//       $('.fade').slick('slickGoTo',0);
//       filtered = false;
//     } else {
//       $('.fade').addClass('filtered');
//     }
//   } else {
//     $('.fade').removeClass('filtered');
//     $('.fade').slick('slickUnfilter');
//     $('.fade').slick('slickGoTo',0);
//   }

//   if (whichID != 'js-filter-glazing') {
//     if ( $('.fade').hasClass('filtered') ) {
//       $('.fade').slick('slickFilter','.filter-glazing');
//       $('.fade').slick('slickGoTo',0);
//       filtered = false;
//     } else {
//       $('.fade').addClass('filtered');
//     }
//   } else {
//     $('.fade').removeClass('filtered');
//     $('.fade').slick('slickUnfilter');
//     $('.fade').slick('slickGoTo',0);
//   }
// });
