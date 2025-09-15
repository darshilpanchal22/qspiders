//! if statement
let status = true;
let name = "john"

if (name) {
    console.log("my name is john")
}
if (status) {
    console.log("status is true")
}

//? nested if statement
let age = 20;
if (age >= 18) {
    console.log("age is verified")
    let dob = 2004;
    if (dob == 2005) {
        console.log("DOB also verified")
    }
}

//! if-else
let flag = "failu"
if (flag === "failure") {
    console.log("you are now independent person!")
} else {
    console.log("dont loose hope believe in gods plan")
}

//! else-if
// // let round;
// // let round = prompt("enter the round name");

// if (round === "aptitude") {
//     console.log("congrats cleared aptitude")
// } else if (round === "technical") {
//     console.log("congrats cleared technical")
// } else if (round === "technomgr") {
//     console.log("congrats just one step ahead")
// } else if (round === "hr") {
//     console.log("congratualations how much your salary exceptations ?")
// } else {
//     console.log("we will inform you")
// }

//! switch case

let num = 11
switch (num % 2) {
    case 0:
        console.log("num is even")
        break;
    case 1:
        console.log("num is odd")
        break;
    default:
        console.log("num is not a  number")
}