console.log("objicets in js")

// ! Objects : 
// ? An object is a collection of multiple different properties in the form of key value pair

// ~ or

// ? An object is a programmatical representation of real world entity

// ? for example human , car ,bike ,laptop

// ? when we console(print) the object might be it will not follow the same order as we've given at the creation time

// ! why do we need object{}
// let human = {
//     name : "harssh",
//     age : 20,
//     dob : 4-3-2004,
// }
// console.log(human)

// ~ how to create an object in js 

// ? there arre 2 ways to create am object

// ^ 1) by using object constructor : new object()

let personal = new Object();
console.log(personal)

// * how to add proprties inside the object

personal.name = "hii how are you"
console.log(personal)
console.log(personal.age = 39)

// ^ 2) BY using object literal : {}

let human = {
    name: "harsh",
    age: 20,
    sal: 30000,
    status: true,
    address: {
        city: "ahmedabad",
        state: "gujrat",
        area: "vatva",
        street: "mahalaxmi road",
    },
    skills: ["html", "css", "js", ["bootsrap", "tailwind"]],
};


console.log(human)

// ! how to  access object propeerties

console.log(human.name) //harsh
console.log(human.age)//20
console.log(human.address)//it will return an object
console.log(human.address.state)//gujrat
console.log(human.skills)//array
console.log(human.skills[0])//html
console.log(human.skills[3][0])//bootstrap
console.log(human.status)//true

// ! how to modify the object properties

human.sal = 40000;
console.log(human.sal);

// ! how to add new properties inside the existing object:

human.dob = "4-3-2001";
console.log(human)



// ! how to add new prperties inside the exisiting object

human.dob = "4-3-2004"
console.log(human.dob)

// ! how to delete the object property:
// ? delete is the keyword inside the js 
//? syntax : delete object.property.name or object.keyname

delete human.status;
console.log(human)



// ! by using ([]) brackets notation

//! when to use
// when key is dynamic
//when key is numeric
// when key  is separated by two values

//! note : internally keys are stored in the form of the strings in object
let dynamicKey = "username"
let dynamicKey2 = "confirmpassword"
let login = {
    ["username"]: "john",
    password: 12345,
    [dynamicKey2]: 123232,
    7: "thala for a reason",
    "king kholi": "virat",
};

console.log(login["username"])
console.log(login["confirmpassword"])
console.log(login.password)
console.log(login["password"])
console.log(login[7])
console.log(login["king kholi"])