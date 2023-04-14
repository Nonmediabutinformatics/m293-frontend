import { verifyToken } from './script.js';

async function updateLoginNow() {
    const loginNow = document.getElementById('login-now');

    try {
        const { success } = await verifyToken();

        if (success) {
            loginNow.style = "display: none";
        } else {
            loginNow.style = "display: block";
        }
    } catch (error) {
        console.error(error);
    }
}

updateLoginNow();
