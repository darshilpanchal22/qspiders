console.log("Function in JS");

//! Function:
//? A function is a set of instructions to perform a speicifc task is called as function.

//? Syntax:

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
demo();

//? argument object:
function getnumbers() {
    // console.log(n1)
    // console.log(n2)
    // console.log(n3)
    // console.log(n4)
    // console.log(n5)
    console.log(arguments) // array of arguments
    console.log(Array.isArray(arguments)) //false
}

getnumbers(10, 20, 30, 40, 50)

let arr = [1, 2, 3]
console.log(Array.isArray(arr));

//?'this' keyword inside the function will represent the window object (top most global object)
function thiskeyword() {
    console.log(this); //window 
    // Object -> global Object

}
thiskeyword();


//! arrow function
//? the arrow function is a shorthand syntax to create the function in js
//? the arrow function is introduced in es6 concepts in the yes 2015 
//? syntax () => {}
//? arrow function dont have their own 'this' keyword so they will inherit from parent scope (lexical scope)
//? arrow function dont have 'argument' object

let arrrow = () => {
    console.log("this is arrow function")
    return "helo i ama arrow"
}
arrrow();
console.log(arrrow());

//! argument object
let arg = () => {
    console.log(arguments) //not defined
}

//arg (10,20)

let thiskey = () => {
    console.log(this)
}
thiskey();
//! 1. Implicit return
//? Implicit returns means if there is only one sibgle statement , you can oomit the curly brackets() and return statement.
//? By default JS engine will add the {} and return statement.
let add = (a, b) => a + b;
console.log(add(10, 20));

//! 2. Explicit return
//? Explicit return means there are multiple statemnets and you are using return keyword manually then we have to use {} mandatory.

let sub = (num1, num2) => {
    console.log("Substraction Operation:");
    return num2 - num1;
};

console.log(sub(10, 20));

//! nested function
//? a function which is present inside another function is called as nested function

function outerfun() {
    let outerVar = "john"
    console.log("outer function invoked")

    //! nested function
    function innerfun() {
        console.log("inner function invoked")
        console.log(outerVar)
    }
    innerfun()
}
outerfun();

//? closure function will remember the value of the outer function
//? for exm -> to maintain the data privacy , state management , etc
//? closure will be  created when you are accesing the values from the parent function  or outer function

//? lexical scopre - if you are acessing  the values from outer scope to inner scope that process is called asmlexical scope in js
function fun1() {
    console.log("fun1() started ")
    fun2();
    console.log("fun1() ended")
}
function fun2() {
    console.log("fun2() started")
    fun3();
    console.log("fun2() ended")
}
function fun3() {
    console.log("fun3() started")
    console.log("fun3() ended")
}
fun1();


function addd(a) {
    console.log(a)
    return function (b) {
        console.log(a + b)
        return function (c) {
            console.log(a + b + c)
            return a + b + c
        }
    }
}

console.log(addd(2)(3)(5));