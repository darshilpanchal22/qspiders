//! 3. reduce():
//? The reduce() method is inbuilt js functions which is used to reduce the array elements into single value based on certain logic.
//? it does not  modify the original array instead of it will create the new single value.

//? syntax : arr.reduce(callbackfunc, initialValue)
//? final syntax : arr.reduce((accumulator, cvalue, cindex, carray)  => {}, initialValue)

//? accumulator -> it is the value which we will return from the callback function
//? initialValue -> it is the starting value of accumulator

let arr = [10, 20, 30, 40, 50];
let sum = arr.reduce((accumulator, cvalue, cindex, carray) => {
    console.log("accumulator:", accumulator, "cvalue:", cvalue);
    return accumulator + cvalue;
}, 0);

console.log("Sum:", sum);

//! 4. forEach():
//? The forEach() method is inbuilt js functions which is used to iterate each and every array element.
//? it does not  modify the original array instead of it will return undefined.
//? Return Type: undefined

//? syntax : arr.forEach(callbackfunc)
//? final syntax : arr.forEach((cvalue,cindex,carray)  => {})

let randomNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let forEachReturn = randomNums.forEach((num) => {
    console.log(num);
});
console.log(forEachReturn);