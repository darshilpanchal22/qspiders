console.log("Function in JS");

//! Function:
//? A function is a set of instructions to perform a speicifc task is called as function.

//? Syntax:
function identifier() {
    //code
}

identifier(); // Function Call statement

//! Function Call Statement: A statement which is reponsible to call or invoke the function
//!                         is called as function call statement.

//? Syntax: identifier()

function greet() {
    console.log("Hello, Everyone!");
}

// call or invoke the function greet
greet();

//! Types of Function:
//? 1. Named Function
//? 2. Anonymous Function
//? 3. Function as an Expression
//? 4. IIFE
//? 5. Arrow Function
//? 6. Callback Function
//? 7. HOF
//? 8. Nested Function
//? 9. Closure Function
//? 10. Function Currying
//? 11. Generator Function

//! 1. Named Function:
//? A function which has a name is called as Named Function.
function getUsername(username) {
    console.log(`My username is ${username}!`);
}

// calling or invoking the function
getUsername("Rohit");

//! 2. Anonymous Function:
//? A function which don't have any name is called as Anonymous Function.

//? Ways to call the anonymous function:
//~ 1. By storing it inside one variable and call that variable.
let fun = function () {
    console.log("this is anonymous function");
};
fun();

//~ 2. By Wrapping entire function inside the () and call inside with empty ();

(function () {
    console.log("This function is invoked by using empty ()");
})();

//! 3. Function as an Expression:
//? Storing a entire function inside one variable is called as function as an expression.

let demo = function () {
    console.log("This is function as an expression");
};

demo();