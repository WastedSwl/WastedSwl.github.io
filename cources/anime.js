// Функция для анимации появления текста при загрузке страницы
document.addEventListener("DOMContentLoaded", function() {
    var welcomeTextElement = document.querySelector(".welcometext");
    if (welcomeTextElement) {
        anime({
            targets: welcomeTextElement,
            opacity: [0,   1],
            duration:   500, // Длительность анимации   0.5 секунды
            easing: 'linear' // Линейная скорость анимации
        });
    }
});

// Функция для анимации элементов с классами .mini-block-title:first-child и .mini-block-title:last-child
function animateOnScroll() {
    var unlockTitleElement = document.querySelector(".mini-block-title:first-child");
    var exclusiveTitleElement = document.querySelector(".mini-block-title:last-child");

    if (unlockTitleElement && !unlockTitleElement.classList.contains('animated')) {
        anime({
            targets: unlockTitleElement,
            translateX: ['-100%', '0'],
            opacity: [0,   1],
            duration:   1000,
            easing: 'easeOutExpo',
            complete: function() {
                unlockTitleElement.classList.add('animated');
            }
        });
    }

    if (exclusiveTitleElement && !exclusiveTitleElement.classList.contains('animated')) {
        anime({
            targets: exclusiveTitleElement,
            translateX: ['100%', '0'],
            opacity: [0,   1],
            duration:   1000,
            easing: 'easeOutExpo',
            complete: function() {
                exclusiveTitleElement.classList.add('animated');
            }
        });
    }
}

// Добавление обработчика события scroll
window.addEventListener('scroll', animateOnScroll);