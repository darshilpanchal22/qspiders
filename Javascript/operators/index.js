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