import { verifyToken } from './script.js';

async function updateNavLinks() {
    const navLinks = document.getElementById('nav-links');

    try {
        const { success } = await verifyToken();

        if (success) {
            navLinks.innerHTML = `
        <li><a href="index.html">Home</a></li>
        <li><a href="to-do.html">To-doList</a></li>
        <li><a href="#">Logout</a></li>
      `;
        } else {
            navLinks.innerHTML = `
        <li><a href="index.html">Home</a></li>
        <li><a href="login.html">Login</a></li>
      `;
        }
    } catch (error) {
        console.error(error);
    }
}

updateNavLinks();
