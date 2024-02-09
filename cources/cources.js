document.addEventListener("DOMContentLoaded", function() {
    const burger = document.querySelector('.burger');
    const navbarMenu = document.querySelector('.navbar-menu');

    burger.addEventListener('click', function() {
        navbarMenu.classList.toggle('active');
        burger.classList.toggle('open'); // Добавляем или удаляем класс open
    });
});
// Функция для выхода из системы
function signOut() {
    localStorage.removeItem('userData');
    document.getElementById('signOutLi').style.display = 'none';
    document.getElementById('signInLi').style.display = 'block';
    var event = new Event('userSignedOut');
    window.dispatchEvent(event);
  }
  
  window.addEventListener('userSignedOut', function() {
    // Обновляем интерфейс здесь, если это необходимо
  });
  
  const userData = getUserDataFromLocalStorage();
  if (userData) {
    document.getElementById('signOutLi').style.display = 'block';
    document.getElementById('signOutLink').addEventListener('click', signOut);
  } else {
    document.getElementById('signInLi').style.display = 'block';
  }