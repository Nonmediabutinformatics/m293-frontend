import { authJwtSignPost } from './script.js';

const loginForm = document.getElementById('login-form');
const message = document.getElementById('message');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = loginForm.email.value;
    const password = loginForm.password.value;

    authJwtSignPost(email, password)
        .then(data => {
            message.textContent = 'Login successful!';
            localStorage.setItem('jwtToken', data.token);
            window.location.href = 'index.html';
        })
        .catch(error => {
            message.textContent = `Login failed: ${error.message}`;
        });
});
