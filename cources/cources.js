document.addEventListener("DOMContentLoaded", function() {
    const burger = document.querySelector('.burger');
    const navbarMenu = document.querySelector('.navbar-menu');

    burger.addEventListener('click', function() {
        navbarMenu.classList.toggle('active');
        burger.classList.toggle('open'); // Добавляем или удаляем класс open
    });
});