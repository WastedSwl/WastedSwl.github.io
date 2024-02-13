// Инициализация GSAP и ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

$(function () {
  $(".menu-link").click(function () {
   $(".menu-link").removeClass("is-active");
   $(this).addClass("is-active");
  });
 });
 
 $(function () {
  $(".main-header-link").click(function () {
   $(".main-header-link").removeClass("is-active");
   $(this).addClass("is-active");
  });
 });
 
 const dropdowns = document.querySelectorAll(".dropdown");
 dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", (e) => {
   e.stopPropagation();
   dropdowns.forEach((c) => c.classList.remove("is-active"));
   dropdown.classList.add("is-active");
  });
 });
 
 $(".search-bar input")
  .focus(function () {
   $(".header").addClass("wide");
  })
  .blur(function () {
   $(".header").removeClass("wide");
  });
 
 $(document).click(function (e) {
  var container = $(".status-button");
  var dd = $(".dropdown");
  if (!container.is(e.target) && container.has(e.target).length === 0) {
   dd.removeClass("is-active");
  }
 });
 
 $(function () {
  $(".dropdown").on("click", function (e) {
   $(".content-wrapper").addClass("overlay");
   e.stopPropagation();
  });
  $(document).on("click", function (e) {
   if ($(e.target).is(".dropdown") === false) {
    $(".content-wrapper").removeClass("overlay");
   }
  });
 });
 
 $(function () {
  $(".status-button:not(.open)").on("click", function (e) {
   $(".overlay-app").addClass("is-active");
  });
  $(".pop-up .close").click(function () {
   $(".overlay-app").removeClass("is-active");
  });
 });
 
 $(".status-button:not(.open)").click(function () {
  $(".pop-up").addClass("visible");
 });
 
 $(".pop-up .close").click(function () {
  $(".pop-up").removeClass("visible");
 });
 
 var line = $('.line');

var tl = new TimelineLite({
      onComplete: function(){
        tl.restart();
      }
    });

 
TweenLite.defaultEase = Circ.easeInOut;

var time = 0.9;
var y = 100;

tl
  .add ( TweenMax.staggerFromTo (
    line, time,
      {
        opacity: 0,
        y:y,
      },
      { 
        opacity: 1,
        y: 0,
      },
    2 ))
  .add ( TweenMax.staggerTo (
    line, time,
      {
        delay: time,
        opacity: 0,
        y: -y,
      },
    2 ), 3.0)

    $(document).ready(function() {
      // Инициализация GSAP
      gsap.registerPlugin(ScrollTrigger);
    
      // Анимация для h3
      gsap.from('.img-content', {
        duration:   1.5,
        y: '+=50', // Вылет из-под картинки
        autoAlpha:   0, // Сначала полностью прозрачный
        ease: 'power1.out',
        scrollTrigger: {
          trigger: '.img-content',
          start: 'top center', // Начало анимации, когда верхний край элемента достигает центра окна просмотра
          toggleActions: 'play none none reverse' // Воспроизводить, останавливать, не возобновлять, возвращать
        }
      });
    
      // Анимация для текста внутри .content-text
      gsap.from('.content-text', {
        duration:   1.5,
        y: '+=50', // Вылет из-под картинки
        autoAlpha:   0, // Сначала полностью прозрачный
        delay:   0.5, // Задержка перед началом анимации
        ease: 'power1.out',
        scrollTrigger: {
          trigger: '.content-text',
          start: 'top center', // Начало анимации, когда верхний край элемента достигает центра окна просмотра
          toggleActions: 'play none none reverse' // Воспроизводить, останавливать, не возобновлять, возвращать
        }
      });
    
      // Изменение прозрачности логотипа
      const logo = document.querySelector('.logotip');
      if (logo) {
        gsap.to(logo, {
          duration:   1.5,
          opacity:   0.5,
          yoyo: true,
          repeat: -1,
          ease: 'power1.out',
        });
      }
    });

    // Плавное появление навигационной панели
$(document).ready(function() {
  const navItems = $('.header-menu a'); // Селектор для элементов навигационной панели
  let delay =   0;

  navItems.each(function() {
    gsap.fromTo($(this), {
      x: '+=30', // Вылет из-под крана
      autoAlpha:  0 // Сначала полностью прозрачный
    }, {
      duration:  1,
      y: '0%', // Вернуться на исходное положение
      autoAlpha:  1, // Полностью видимый
      delay: delay,
      ease: 'power1.out'
    });
    delay +=  0.4; // Увеличиваем задержку для каждого следующего элемента
  });
});
// Инициализация GSAP и ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Анимация для "All Apps"
gsap.from('.menu-link-main', {
  duration:  1,
  y: '+=50', // Вылет из-под крана
  autoAlpha:  0, // Сначала полностью прозрачный
  scrollTrigger: {
    trigger: '.menu-link-main',
    start: 'top center', // Начало анимации, когда верхний край элемента достигает центра окна просмотра
    toggleActions: 'play none none reverse' // Воспроизводить, останавливать, не возобновлять, возвращать
  }
});

// Анимация для "Languages"
gsap.from('.menu-link-languages', {
  duration:  1,
  y: '+=50', // Вылет из-под крана
  autoAlpha:  0, // Сначала полностью прозрачный
  scrollTrigger: {
    trigger: '.menu-link-languages',
    start: 'top center', // Начало анимации, когда верхний край элемента достигает центра окна просмотра
    toggleActions: 'play none none reverse' // Воспроизводить, останавливать, не возобновлять, возвращать
  }
});

// Анимация для "Teachers"
gsap.from('.menu-link-teachers', {
  duration:  1,
  y: '+=50', // Вылет из-под крана
  autoAlpha:  0, // Сначала полностью прозрачный
  scrollTrigger: {
    trigger: '.menu-link-teachers',
    start: 'top center', // Начало анимации, когда верхний край элемента достигает центра окна просмотра
    toggleActions: 'play none none reverse' // Воспроизводить, останавливать, не возобновлять, возвращать
  }
});