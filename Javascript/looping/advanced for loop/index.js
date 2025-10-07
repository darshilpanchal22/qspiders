console.log("avance for loop in js");

// ! Advance for loops in js:
// ? there are two types of advanced for loops in js:

// ? 1) for -in-loop
// ? 2)for-of-loop

// ! For-in-loop:
// ? for in loop is used to  iterate on the object properties
// ? we can iteraste over an array also
let navratri = {
    task: 'playing garba',
    timing: "9 pm to 5AM",
    nasta: "jalebi fafda",
    miscellaneous: function () {
        console.log("playing garba with fav person");
    },
};

// ! iterating over an object

for (let key in navratri) {
    console.log(key, " ", navratri[key]);
    if (key === "miscellaneous") {
        navratri[key]();
    }
}

// ! iterating over an array

let arr = ["red", "blue", "green"]

for (let colors in arr) {
    console.log(colors, arr[colors])
}



// ! For of loop :
// ? it is used to iterate over the array elements
// ?it will thorw error while iterating over an object bczz  it has key and values pairs in obj

console.log("iterating over  and array")

let names = ["harsh", "farhan", "raja", "julan", "fulan"]

for (let name of names) {
    console.log(name)
}

// ? while iterating over an obj

// for (let obj of navratri){
//     console.log(obj)
// }

// ! error : 
// ! advanceforloopinjs.js:54 Uncaught TypeError: navratri is not iterable

// ~ Summary :
// !1) For-in-loop -> For Objects
// !1) For-of-loop -> For Array



// ! MATH OBJECT:
// ~ The MAth object in Javascript it is used to provide the inbuilt methods and properties to  simplify the calculations

// ! there is no need to create the constructor of the math object without creating we can still access the properties and methods

//  let math = new Math();
// console.log(math);
// ! Error math is not an constructor

// ? Syntax
// ~ Property -> Math.propertyName;
// ~ Function or Method -> Math.methodName();

// ! properties of math object

// !1) Math.PI
console.log(Math.PI);

let piDecimal = Math.PI.toFixed(3);
console.log(piDecimal);
console.log(typeof (piDecimal));

// !2) Math.E 
// ? Here E stands for euler constant
console.log(Math.E);

// ! Methods oF Method Object

// ?  Following are trhe methods of math object:

// ! 1) Math.round()

console.log(Math.round(8.8)) //9
console.log(Math.round(8.2)) //8


// ! 2) Math.floor()

console.log(Math.floor(8.87))//8
console.log(Math.floor(8.99))//8

// ! 3) Math.ceil()

console.log(Math.ceil(8.1))//9
console.log(Math.ceil(8.011))//9


// ! 4) Math.sqrt()  square root returns

console.log(Math.sqrt(25))//5
console.log(Math.sqrt(125))//5


// ! 5) Math.cbrt() returns cube

console.log(Math.cbrt(343))//7

// ! 6) Math.min()

console.log(Math.min(30, 20, 10, 30, 40, 50, 1)) //1

// ! 7) Math.max()

console.log(Math.max(30, 20, 10, 30, 40, 50, 1))

// ! 8) Math.abs() 

console.log(Math.abs(-12));//12


let otpcontent = document.getElementById("otp");

function genrateotp() {
    let otp = Math.random() * 9000 + 1000;
    console.log(Math.floor(otp) + 1000)
    otpcontent.innerText = otp;
}

genrateotp()