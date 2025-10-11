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
// function greet(name = "guest") {
//     console.log(`my name is  ${name}`)
// }
// greet("john")


//? 5 destructuring
//? destructuring means divide  the big-structure into smaller parts
//? destructuring we can perform in 2 ways:

//?  array destructuring
// let arr = [10, 20, 30, 40, 50]
// // console.log(arr[1])

// let [a, b, c, d, e] = arr
// console.log(a)
// console.log(b)

//?  object destructuring
// let employee = {
//     eName: "john",
//     eAge: 25,
//     eStatus: true,
// }
// // let [x, y, z] = employee;
// // console.log(x)

// let { eName, eAge, eStatus } = employee
// console.log(eName, eAge, eStatus)

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
    product_ratings: [4.3, 4.5, 4.8],
};

const students = [
    { name: "dhrumil", age: 20, scores: [80, 85, 90] },
    { name: "bhavin", age: 21, scores: [81, 86, 91] },
    { name: "kirtan", age: 22, scores: [83, 87, 99] },
];

const {
    product_id,
    product_name,
    product_price,
    product_manufactuter: {
        company_name,
        comapny_location: { city, country },
    },
    product_features: { battery, bluetoth, noisecancellation },
    product_ratings: [rating1, rating2, rating3],
} = product;

const [user1, user2, user3] = students;


// console.log("\n---- Product Details ----");
// console.log("ID:", product_id);
// console.log("Name:", product_name);
// console.log("Price:", product_price);
// console.log("Company:", company_name);
// console.log("Location:", city, ",", country);
// console.log("Battery:", battery);
// console.log("Bluetooth:", bluetoth);
// console.log("Noise Cancellation:", noisecancellation);
// console.log("Ratings:", rating1, rating2, rating3);
// console.log("---- Students ----");
// console.log("User1:", user1);
// console.log("User2:", user2);
// console.log("User3:", user3);

//~ nested array destructuring
let nestedArr = [
    "darshil",
    20,
    ,
    true,
    "unmarried",
    ["london", "main street-1", 238329839, ["room-no=101"]]
];

let [v1, v2, v3, v4, v5, [cityy, street, pincode, [room]]] = nestedArr;

console.log(v1, v2);


//!Rest parameter
//? syntax: ...varname
function getNumbers(num1, num2, ...num) {
    //! here ...num => rest parameter -> collecting
    console.log(num1)
    console.log(num2)
    console.log(num)
}
let Numbers = [10, 20, 30, 40, 50]

getNumbers(...Numbers)
//! here ...numbers => spread operator -> spreading
//! 1. array with spread operator:
let arr1 = [10, 20];
let arr2 = [30, 40, 50]
// let mergedArr = arr1.concat(arr2)
// console.log(mergedArr)

//~ spread operator
let mergedArr = [...arr1, ...arr2, , 60, 70, 80, 90, 100]
console.log(mergedArr)

//!object with spread operator
let obj1 = { username: "john", age: 20 }
let newobj = { ...obj1, city: "ahmedabad", pincode: 382418, stare: "gujrat" }
console.log(newobj)

//! rest parameter in destructuring
let players = ["virat", "rohit", "dhoni", "hardik"]
let [p1, p2, ...remaining] = players
console.log(p1)
console.log(p2)
console.log(remaining)

//! optional chaining:
//? the optional chaining aloows us to access the nested deeply objects / properties which may cause error
//? instead of error it will retrun the  undefined or null
//? syntax--
let user = {
    profile: {
        address: {
            city: "ahmedabad",
        },
    },
}
console.log(user.profile.address.city)
// console.log(user.profile.phone.contact)
// Uncaught TypeError: Cannot read properties of undefined (reading 'contact')
console.log(user?.profile?.address?.contact)
console.log(user?.profile?.address?.methodName)
console.log(user?.profile?.address?.[0])