// Инициализация GSAP и ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Обработка кликов по ссылкам меню
$(".menu-link, .main-header-link").click(function () {
  $(".menu-link, .main-header-link").removeClass("is-active");
  $(this).addClass("is-active");
});

// Обработка выпадающих меню
const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdowns.forEach((c) => c.classList.remove("is-active"));
    dropdown.classList.add("is-active");
  });
});

// Обработка фокуса и потери фокуса поисковой строки
$(".search-bar input")
  .focus(function () {
    $(".header").addClass("wide");
  })
  .blur(function () {
    $(".header").removeClass("wide");
  });

// Обработка кликов вне выпадающего меню
$(document).click(function (e) {
  var container = $(".status-button");
  var dd = $(".dropdown");
  if (!container.is(e.target) && container.has(e.target).length ===  0) {
    dd.removeClass("is-active");
  }
});

// Обработка кликов по выпадающему меню и добавление/удаление класса overlay
$(".dropdown").on("click", function (e) {
  $(".content-wrapper").addClass("overlay");
  e.stopPropagation();
});
$(document).on("click", function (e) {
  if ($(e.target).closest(".dropdown").length ===  0) {
    $(".content-wrapper").removeClass("overlay");
  }
});

// Обработка кликов по кнопке статуса и открытие/закрытие приложения
$(".status-button:not(.open)").on("click", function () {
  $(".overlay-app").addClass("is-active");
});
$(".pop-up .close").click(function () {
  $(".overlay-app").removeClass("is-active");
});

// Обработка кликов по кнопке статуса и открытие/закрытие всплывающего окна
$(".status-button:not(.open)").click(function () {
  $(".pop-up").addClass("visible");
});
$(".pop-up .close").click(function () {
  $(".pop-up").removeClass("visible");
});

// Анимации при загрузке страницы
$(document).ready(function() {
  // Инициализация GSAP
  gsap.registerPlugin(ScrollTrigger);

  // Анимация для h3
  gsap.from('.img-content', {
    duration:  1.5,
    y: '+=50',
    autoAlpha:  0,
    ease: 'power1.out',
    scrollTrigger: {
      trigger: '.img-content',
      start: 'top center',
      toggleActions: 'play none none reverse'
    }
  });

  // Анимация для текста внутри .content-text
  gsap.from('.content-text', {
    duration:  1.5,
    y: '+=50',
    autoAlpha:  0,
    delay:  0.5,
    ease: 'power1.out',
    scrollTrigger: {
      trigger: '.content-text',
      start: 'top center',
      toggleActions: 'play none none reverse'
    }
  });

  // Изменение прозрачности логотипа
  const logo = document.querySelector('.logotip');
  if (logo) {
    gsap.to(logo, {
      duration:  1.5,
      opacity:  0.5,
      yoyo: true,
      repeat: -1,
      ease: 'power1.out',
    });
  }

  // Плавное появление навигационной панели
  const navItems = $('.header-menu a');
  let delay =  0;
  navItems.each(function() {
    gsap.fromTo($(this), {
      x: '+=30',
      autoAlpha:  0
    }, {
      duration:  1,
      y: '0%',
      autoAlpha:  1,
      delay: delay,
      ease: 'power1.out'
    });
    delay +=  0.4;
  });

});

// Установка начального состояния блока .content-section
gsap.set('.content-section', {
  autoAlpha:  0, // Сделать блок невидимым
  y:  50 // Перемещение блока вниз на  50px
});

// Создание анимации при прокрутке страницы
gsap.from('.content-section', {
  duration:  1.5,
  y: '-=50', // Возвращение блока на исходное место
  autoAlpha:  1, // Сделать блок видимым
  scrollTrigger: {
    trigger: '.content-section', // Блок, который будет триггером
    start: 'top center', // Начало анимации при достижении верхней границы блока
    toggleActions: 'play none none reverse' // Анимация будет играться один раз при прокрутке
  }
});