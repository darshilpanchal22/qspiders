

console.log("type casting in js")

//! type casting
//? typecasting is the process of converting one datatype into another datatype
//? typecasting is divided into 2 main types

//! 1 implicit
console.log(10 + 10); //20
console.log(10 + "10") //1010
console.log(10 + "hello") //10hello
console.log(10 + "true") //10true
console.log(typeof (10 + "10")) //string
console.log(30 - "20") //10
console.log(30 - "hello") //Nan
console.log(10 + true) //11
console.log(10 - false) //10
console.log(true - "10") //-9
console.log(33 + "33" + true) //3332
console.log(33 + "33" + "true") //3333true
console.log(10 - 30 + "false" + "20") //-20false20
console.log(10 + 20 - "true" * false) //Nan
console.log(10 + 20 - true * false) //30

//! problem
// let input = Number(prompt("enter a number"));
// console.log(input) //100
// console.log(typeof input)

//!explicit typecasting
//? (manually or by the programmmer) -> functions or constructors
//? to perform explicit typecasting we will take the help of 3 constructor
//1 number()
//2 string()
//3 boolean()

console.log(10 + Number("10")) //20
console.log(10 + Number("hello")) //nan
console.log(10 + String(10)) //1010
console.log(10 + Number(true)) //11
console.log(10 + Boolean("helo")) //11
// turthy values -> non-empthy string -> true -> 1
console.log(10 + Boolean("")) //10
//? falsy values -> empthy-string or zero -> false -> 8
console.log(10 + Boolean("")) //11

//? combine 3 constructors
console.log(Number(true)) //1
console.log(33 + String(33) + Number(Boolean("true")))
console.log(Boolean(true)) //true