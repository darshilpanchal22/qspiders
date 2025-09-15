//! operators



//~ unary operator
console.log(+5);
console.log(+"5")
console.log(+"hello")
console.log(-"5")
console.log(+true)
console.log(+false)
console.log(+null)
console.log(+undefined)
console.log(-true)
console.log(-false)

//~ increment operator

//?increment
//? decrement
//? there are two type of increment and decrement 
//? 1 post increment / decrement
// -> after the variable -> suffix to the variable
let a = 10;
console.log(a++)
console.log(a)

let b = 10;
console.log(b--)
console.log(b)
console.log(b--)
console.log(b)

let c = 5;
console.log(c++)
console.log(c--)
console.log(c++)
console.log(c)

//? pre increment / decrement -> before the variable -> prefix to the variable
let num = 10;
console.log(++num);
console.log(--num)

//~  arithmetic operator
//? addition(+)
console.log(5 + 25)

//? substraction(-)
console.log(5 - 25)

//? multiplication(*)
console.log(10 * 2)

//? divition(/)  return quotient
console.log(10 / 2)

//? modules (%) return remainder
console.log(10 % 2)

//? exponentation operator(**)
console.log(5 ** 2)

//~  logical operator
//? logical and operator (&&)
console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)
console.log(1 && 0)

//? logical or operator
console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)
console.log(1 || 0)

//? logical not operator
console.log(!true)
console.log(!false)

//~ comparison operator
//? return type : true or flase (boolean value)

console.log(5 > 10)
console.log(5 < 10)
console.log(5 >= 5)
console.log(5 <= 5)
console.log(5 <= 6)
console.log(5 == 5)

//? double  equalse to operator = it will check only value not datatype
console.log("5" == 5)
//? strict equals to the opearator it will check both value and  datatype
console.log("5" === 5)

//~ not  equals to operator
console.log(5 !== 5)
console.log(5 !== 6)


//~ string concentation opearator (+)
let name = "ayush";
console.log(name + " patel");

//~ ternaray operator
//? condition  statement 1  statement2
let age = 20
let result =
    age >= 18 ? "you are eligible" : "you are not eligible"
console.log(result)


//! write a logic for  max numbers among 3 values
let num1 = 10
let num2 = 20
let num3 = 30
let max = num1 > num2 ? (num1 > num3 ? num1 : num3) : num2 > num3 ? num2 : num3;
console.log("maxnum is", max)

//~nullish coleascing operator
//? to prevent the null or undefined value we have to use  nullish collescing operator in js
// let username = null
// let username = undefined
let username = "john"
console.log(`my name is ${username ?? "quest"}`);

function getusername(username) {
    return `my username is  ${username ?? "guest"}`
}
console.log(getusername())