// Функция для анимации блоков при их появлении в области видимости
function animateBlocksOnView() {
    const miniBlocks = document.querySelectorAll('.mini-block');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Генерируем случайное направление для анимации
                const direction = Math.random() >  0.5 ? '-100%' : '100%';
                anime({
                    targets: entry.target,
                    translateX: [direction, '0'],
                    opacity: [0,   1],
                    duration:   1000,
                    easing: 'easeOutQuad'
                }).finished.then(() => {
                    // После завершения анимации прекращаем наблюдение за элементом
                    observer.unobserve(entry.target);
                });
            }
        });
    }, { threshold:   0.1 }); // Начинаем анимацию, когда блок становится видимым на   10%

    miniBlocks.forEach((block) => {
        observer.observe(block);
    });
}

// Вызов функции анимации после загрузки страницы
animateBlocksOnView();