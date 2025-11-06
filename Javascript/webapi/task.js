console.log("Web API (Storage) in JS");

//! What is Web API's in JS?
//*  The Web API's is used to store the data on browser side.
//* We can store the data on browser side in the form key-value pair.
//* data -> authentication tokens, JSW tokens, etc.

//! Ways to store the data on browser side:
//? 1. Local Storage
//? 2. Session Strage
//? 3. Cookies

//! 1. Local Storage:
//* The is no expiration date for the data which is stored inside the local storage.
//* key-value pair
//? Syntax: window.localStorage
console.log(window.localStorage);
console.log(localStorage);

//? Local storage will provide the 3 methods to store, to access and remove the data:
//~ 1. setItem("key", "value")
//~ 2. getItem("key")
//~ 3. removeItem("key")

// localStorage.setItem("username", "John");
// localStorage.setItem("password", 123456);

// let storedUsername = localStorage.getItem("username");
// let storedPassword = localStorage.getItem("password");
// console.log(storedUsername);
// console.log(storedPassword);

// document.getElementById("logout").addEventListener("click", () => {
//     localStorage.removeItem("username");
//     localStorage.removeItem("password");
// });



let registerForm = document.getElementById("registerForm");
let loginForm = document.getElementById("loginForm");

let username;
let password;

//! After submission of register form
registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Password does not matched❌");
    } else {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        localStorage.setItem("confirmPassword", confirmPassword);
        alert("Register Successfully✅");
        console.log("Username:", username);
        console.log("Password:", password);
        console.log("Confirm Password:", confirmPassword);
    }
});

//! After register now we will validate the credentials on browser side itself.

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let userlogin = document.getElementById("userlogin").value;
    let userPassword = document.getElementById("userpassword").value;

    let storedUsername = localStorage.getItem("username");
    let storedPassword = localStorage.getItem("password");

    if (userlogin === storedUsername && userPassword === storedPassword) {
        alert("Login Successfully✅");
    } else {
        alert("Invalid Crendtials❌");
    }
});