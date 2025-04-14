// Form Elements
const registerForm = document.getElementById("register-form");
const loginForm = document.getElementById("login-form");
const logoutButton = document.getElementById("logout-button");

// Input Fields
const registerUsername = document.getElementById("register-username");
const registerPassword = document.getElementById("register-password");
const loginUsername = document.getElementById("login-username");
const loginPassword = document.getElementById("login-password");

// Sections
const registerSection = document.getElementById("register-section");
const loginSection = document.getElementById("login-section");
const securedSection = document.getElementById("secured-section");

// Messages
const registerMessage = document.getElementById("register-message");
const loginMessage = document.getElementById("login-message");

// Toggle Elements
const switchToLogin = document.getElementById("switch-to-login");
const switchToRegister = document.getElementById("switch-to-register");

// Event Listener for Switching to Login
switchToLogin.addEventListener("click", function () {
    registerSection.style.display = "none";
    loginSection.style.display = "block";
    loginForm.reset();
});

// Event Listener for Switching to Register
switchToRegister.addEventListener("click", function () {
    loginSection.style.display = "none";
    registerSection.style.display = "block";
    registerForm.reset();
});

// Registration
registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = registerUsername.value.trim();
    const password = registerPassword.value.trim();

    if (localStorage.getItem(username)) {
        registerMessage.textContent = "User already exists!";
    } else {
        localStorage.setItem(username, password);
        registerMessage.textContent = "Registration successful!";
        registerForm.reset(); // Clears input fields
    }
});

// Login
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = loginUsername.value.trim();
    const password = loginPassword.value.trim();

    if (localStorage.getItem(username) === password) {
        document.getElementById("user").textContent = username;
        securedSection.style.display = "block";
        loginSection.style.display = "none";
        registerSection.style.display = "none";
        loginMessage.textContent = "";

        // Clear login fields after successful login
        loginForm.reset();
    } else {
        loginMessage.textContent = "Invalid credentials!";
    }
});

// Logout
logoutButton.addEventListener("click", () => {
    securedSection.style.display = "none";
    loginSection.style.display = "block";
    registerSection.style.display = "none"; // Show only login section

    // Clear all input fields on logout
    registerForm.reset();
    loginForm.reset();
    registerMessage.textContent = "";
    loginMessage.textContent = "";
});