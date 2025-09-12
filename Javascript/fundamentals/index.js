//~ console.log("fundamental in js");

//! fundamental in js
//? tokens:smallest unit of any pl is called tokens.
//? browser will parse our code into small tokens called tokenizastion.
//? types:keywords,identifiers,literals,operator,separators,comments

//! keywords:are prefidened reserved words in any pl is called. internally keywords has a special meaning, we cant use this as identifier or variables,we cant change or modify meaning of kw,always in lower case,es updated or added keywordsin js:sync,await,let ,const

//?identifire:a name given to variable funciton or class is called as identiifier,,

//! rules1:should not be used as keyeords
//! rule2:identifier should be used as keywords
//! rule3:identifier should not start with digit or number but it can be alpha numeric
//!rule4:in identifier there willnot be space
//! rule5:special charcters are not allowed except _ and $

// ~ literals
// !number = integar floating decimal  
let num1 = 10;

// ! string = true(yes/1) or false(no/0)
let str = "hello"

// !boolean = true or false
let status = true
let state = false

// !array literal = :[]square brackets
const colors = ["red", "green", "blue"];

console.log(colors[0]); // Output: "red"
console.log(colors); // Output: ["red", "yellow", "blue"]

//! operators= operators are used to perform the operations on the operand with the help of operators
let n1 = 10
let n2 = 2
let result = n1 + n2
console.log("sum:", result)

//~ separators

//? comma ,
//? colon :
//? semi-colon ;
//? brackets ({})
//? array ([])
//? paranthesis ()

//~ commnents
//single line 
/*   this is
    multiline comments */


//! scopes
//~ global
//~ block
//~ local
//~ modules 
//~ script

//? global scope you can acces variables which has global scope in the program from anywhere
//debugger is the inbuilt keyword provided by the javascript to debug the js code without manually selecting the breakpoint
var num = 10;
console.log(num)

var username = "john"
console.log(username)

//! scopes of let and const variables
//? script scope
//~ if variables declared with let and const is not present inside any block or function the scope of the let and consy will be considered as script scope
//? not present inside block , function  -> js > script > > script scope

let name1 = "rajkumar";
const name2 = "vinay";

console.log(name1)
console.log(name2)

//? block scope
{
    var user = "viraj"
    let user1 = "meet"
    const user2 = "purv"

    console.log(user)
    console.log(user1)
    console.log(user2)
}
//? local scope (function)

function sum() {
    let n1 = 10;
    const n2 = 10;
    console.log(n1)
    console.log(n2)
    var result = n1 + n2;
    console.log(result)
    return result;
}
sum();
//! not accesible outside of the function

//~hoisting

//? js allows us to access the member or varible before its declaration is known as hoisting
//? js will move the varibles declaration at the top  of the scope

console.log(num)
var num;

// console.log(num2)
// let num2;

// console.log(num3)
// const num3;

//~ summary :
//? var hoisting possible
//? let hoisting possible (tdz)
//? const hoisting possible (tdz)