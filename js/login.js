import { authJwtSignPost } from './script.js';

const loginForm = document.getElementById('login-form');
const message = document.getElementById('message');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = loginForm.email.value;
    const password = loginForm.password.value;

    authJwtSignPost(email, password)
    .then(data => {
        if (data.success) {
            message.textContent = 'Login successful!';
            message.classList.add('success');
            message.classList.remove('error');
            localStorage.setItem('jwtToken', data.token);
            window.location.href = 'index.html';
        } else {
            message.textContent = 'Email address or password incorrect.';
            message.classList.add('error');
            message.classList.remove('success');
        }
    })
    .catch(error => {
        message.textContent = `Login failed: ${error.message}`;
        message.classList.add('error');
        message.classList.remove('success');
    });
});
