// Функция для сохранения данных пользователя в локальном хранилище
function saveUserDataToLocalStorage(userData) {
    localStorage.setItem('userData', JSON.stringify(userData));
  }
  
  // Функция для получения данных пользователя из локального хранилища
  function getUserDataFromLocalStorage() {
    const userData = localStorage.getItem('userData');
    return userData ? JSON.parse(userData) : null;
  }
