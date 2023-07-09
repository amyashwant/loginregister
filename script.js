// script.js

// Login Page
const loginPage = document.getElementById('login-page');
const loginForm = document.getElementById('login-form');
const loginEmail = document.getElementById('login-email');
const loginPassword = document.getElementById('login-password');
const registerLink = document.getElementById('register-link');

// Register Page
const registerPage = document.getElementById('register-page');
const registerForm = document.getElementById('register-form');
const registerName = document.getElementById('register-name');
const registerEmail = document.getElementById('register-email');
const registerPassword = document.getElementById('register-password');
const loginLink = document.getElementById('login-link');

// Show login page by default
loginPage.style.display = 'block';
registerPage.style.display = 'none';

// Switch to register page
registerLink.addEventListener('click', (e) => {
  e.preventDefault();
  loginPage.style.display = 'none';
  registerPage.style.display = 'block';
});

// Switch to login page
loginLink.addEventListener('click', (e) => {
  e.preventDefault();
  loginPage.style.display = 'block';
  registerPage.style.display = 'none';
});

// Login form submission
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = loginEmail.value;
  const password = loginPassword.value;
  
  // Implement login logic here
  
  // Clear input fields
  loginEmail.value = '';
  loginPassword.value = '';
});

// Register form submission
registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = registerName.value;
  const email = registerEmail.value;
  const password = registerPassword.value;
  
  // Implement registration logic here
  
  // Clear input fields
  registerName.value = '';
  registerEmail.value = '';
  registerPassword.value = '';
});
