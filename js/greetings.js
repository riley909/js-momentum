const loginForm = document.getElementById('login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.getElementById('greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function handleLoginBtnClick(e) {
  e.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.textContent = `Hello ${username}`;
}

const loginUser = localStorage.getItem(USERNAME_KEY);

if (!loginUser) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', handleLoginBtnClick);
} else {
  paintGreetings(loginUser);
}
