'use strict';

const header = document.querySelector('header');
const nav = document.querySelector('nav');
const navbarMenuBtn = document.querySelector('.navbar-menu-btn');

const navbarForm = document.querySelector('.navbar-form');
const navbarFormCloseBtn = document.querySelector('.navbar-form-close');
const navbarSearchBtn = document.querySelector('.navbar-search-btn');

function navIsActive() {
    header.classList.toggle('active');
    nav.classList.toggle('active');
    navbarMenuBtn.classList.toggle('active');
}

navbarMenuBtn.addEventListener('click', navIsActive);

const searchBarIsActive = () => navbarForm.classList.toggle('active');

navbarSearchBtn.addEventListener('click', searchBarIsActive);
navbarFormCloseBtn.addEventListener('click', searchBarIsActive);

const signInLink = document.querySelector('.navbar-signin');
const registerBox = document.getElementById('registerBox');
const closeBtn = registerBox.querySelector('.close');

signInLink.addEventListener('click', (e) => {
  e.preventDefault(); 
  registerBox.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  registerBox.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === registerBox) {
    registerBox.style.display = 'none';
  }
});

  const passwordInput = document.getElementById('password');
  const message = document.getElementById('passwordMessage');

  passwordInput.addEventListener('input', () => {
    const value = passwordInput.value;


    const hasUppercase = /[A-Z]/.test(value);
    const hasNumber = /\d/.test(value);
    const hasLength = value.length >= 8;
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);

    if (hasUppercase && hasNumber && hasLength && hasSpecialChar) {
      message.textContent = "Strong password ";
      message.classList.remove('invalid');
      message.classList.add('valid');
    } else {
      message.textContent = "Password must have: 8+ chars, 1 uppercase, 1 number, 1 symbol ";
      message.classList.remove('valid');
      message.classList.add('invalid');
    }
  })

