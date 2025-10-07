//! ES6 Concepts:
//? ES6 is a major update to JavaScript that includes new features and syntax improvements. Here are some key concepts:

//! Concepts include:
//? 1. let and const: Block-scoped variable declarations.
//? 2. Function with deafult parameters: Allows setting default values for function parameters.
//? 3. Arrow Functions: Concise syntax for writing functions.
//? 4. Template Literals: String literals allowing embedded expressions.
//? 5. Destructuring Assignment: Unpacking values from arrays or properties from objects.
//? 6. Symbols: A new primitive data type for unique identifiers.
//? 7. Promises: For handling asynchronous operations.
//? 8. async/await: Syntactic sugar for working with Promises.
//? 9. modules: Support for modular code with import and export statements.
//? 10. Classes: Syntactic sugar for creating objects and handling inheritance.
//? 11. Rest parameter and Spread operator: For handling function arguments and array/object manipulation.

//? 2 function with default parameters
function greet(name = "guest") {
    console.log(`my name is  ${name}`)
}
greet("john")


//? 5 destructuring
//? destructuring means divide  the big-structure into smaller parts
//? destructuring we can perform in 2 ways:

//?  array destructuring
let arr = [10, 20, 30, 40, 50]
// console.log(arr[1])

let [a, b, c, d, e] = arr
console.log(a)
console.log(b)

//?  object destructuring
let employee = {
    eName: "john",
    eAge: 25,
    eStatus: true,
}
// let [x, y, z] = employee;
// console.log(x)

let { eName, eAge, eStatus } = employee
console.log(eName)

//~ note: when we destructuring the object always use the keyname as a temporary variable

const product = {
    product_id: 581,
    product_name: "wireless headphone",
    product_price: 2999,
    product_manufactuter: {
        company_name: "SoundX",
        comapny_location: {
            city: "banglore",
            country: "india",
        },
    },
    product_features: {
        battery: "20 hours",
        bluetoth: "5.3",
        noisecancellation: true,
    },
    product_ratings: [4.3, 4.5, 4.8]
}

const students = [
    { name: "dhrumil", age: 20, scores: [80, 85, 90] },
    { name: "bhavin", age: 21, scores: [81, 86, 91] },
    { name: "kirtan", age: 22, scores: [83, 87, 99] },

];
const { product_id, product_name, product_price, product_manufactuter, product_features, product_ratings } = product
const { company_name, comapny_location } = product_manufactuter
