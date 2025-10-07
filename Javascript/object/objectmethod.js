//? 1 object.keys()
let gadafam = {
    members: 4,
    main: "jethalal",
    spouse: "dayaben",
    child: "tappu",
    father: "chamapak",
}
console.log(Object.keys(gadafam));

//~ 2 object.values()
//~ syntax : object.values(obj)
console.log(Object.values(gadafam))

//~ 3 object.entries()
//? syntax : object.entries(obj)
//? return type : [[key1, value1]], [[key2, values2]]

console.log(Object.entries(gadafam));


//~ 4 object.fromentries()
//? object.fromentries(arr)

let car = [
    ["cName", "porche"],
    ["cModel", "p15"],
    ["cPrice", "50lakh"]
]
console.log("car array:", car)
let carObject = Object.fromEntries(car);
console.log(carObject)


//task
let laptop = {
    brand: "asus",
    model: "f15",
    price: "60000"
}
console.log(laptop)

let convertobj = Object.entries(laptop)

convertobj[2][0] = "laptopprice"

console.log(convertobj)

//! object.assign()
//? syntax : object.assign(targetObj, obj1, obj2.....onjnN)
let obj1 = {
    username: "john",
}
let obj2 = {
    age: "20"
}
let mergeObj = Object.assign(obj1, obj2)
console.log(mergeObj)

console.log(obj1)
console.log(obj2)
let newmergeObj = Object.assign({}, obj1, obj2)
console.log(newmergeObj)

//! 7. Object.seal();
//? A Object.seal() method it will not allow to add, or change the properties but we can modify it.

let login = {
    username: "John",
    password: "123456",
};
console.log(login);
// Object.seal(login);
// login.confirmPassword = "123456";
// console.log(login);

login.password = "1234567890";
console.log(login);
console.log(Object.isSealed(login)); // true

Object.freeze(login);
login.password = "8492858932";
console.log(login);
login.confirmPassword = "qq8472984";
console.log(login);

console.log(Object.isFrozen(login));

//! 10. Object.hasOwn():

console.log(Object.hasOwn(login, "password")); // true
console.log(Object.hasOwn(login, "confirmpassword")); // false