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

//! LIFE
//? LIFE stands for immediate invoking function expression 
//? LIFE function will be executed only once just after the declaration of the function

(function () {
    console.log("this is LIFE function")
    console.log("execute only once")
})

//! return statement inside the function
function sum(num1, num2) {
    // console.log( num1 + num2)
    return num1 + num2;
}

sum(10, 20)

//! if a function is returning  a value to the function caller  we can use that value in two values

//? 1 to store the function call statement inside  the varible

let result = sum(10, 20)
console.log(result);


//? 2 directly call the function call statement inside the clg
console.log(sum(10, 20))

//!what if  function is not returning anything
//? output = undeifned
function greet() {
    console.log("heloo how are you")
    //? return "bye"
}

console.log(greet()) //undefined
let demoo = greet();
console.log(demoo); //undefined
