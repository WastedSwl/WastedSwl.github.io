/**
 * Variables
 */
const signupButton = document.getElementById('signup-button'),
    loginButton = document.getElementById('login-button'),
    userForms = document.getElementById('user_options-forms'),
    loginForm = document.querySelector('.user_forms-login form'),
    signupForm = document.querySelector('.user_forms-signup form');

/**
 * Add event listener to the "Sign Up" button
 */
signupButton.addEventListener('click', () => {
  userForms.classList.remove('bounceRight');
  userForms.classList.add('bounceLeft');
}, false);

/**
 * Add event listener to the "Login" button
 */
loginButton.addEventListener('click', () => {
  userForms.classList.remove('bounceLeft');
  userForms.classList.add('bounceRight');
}, false);

/**
 * Function to save user data to local storage
 */
function saveUserDataToLocalStorage(userData) {
  localStorage.setItem('userData', JSON.stringify(userData));
}

/**
 * Function to get user data from local storage
 */
function getUserDataFromLocalStorage() {
  const userData = localStorage.getItem('userData');
  return userData ? JSON.parse(userData) : null;
}

/**
 * Add event listener to the login form
 */
loginForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const email = loginForm.querySelector('input[type="email"]').value;
  const password = loginForm.querySelector('input[type="password"]').value;

  // Get stored user data from local storage
  const storedUserData = getUserDataFromLocalStorage();

  // Check if the entered credentials match the stored user data
  if (storedUserData && storedUserData.email === email && storedUserData.password === password) {
    window.location.href = "../cources/courses.html";
  } else {
    alert('Login failed. Please check your credentials.');
  }
});

/**
 * Add event listener to the signup form
 */
signupForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const fullName = signupForm.querySelector('input[name="fullName"]').value;
  const email = signupForm.querySelector('input[name="email"]').value;
  const password = signupForm.querySelector('input[name="password"]').value;

  // Save user data to local storage
  const userData = { fullName, email, password };
  saveUserDataToLocalStorage(userData);

  alert('Registration successful! You can now log in.');
});