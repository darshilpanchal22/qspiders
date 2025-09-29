//! Array Iteration Methods:
//? Array iteration methods are the inbuilt js functions which allows us to iterate on each and every element present inside the array.

//? There are mainly 3 types of array-iteration methods:
//? 1. map()  
//? 2. filter() 
//? 3. reduce()

//? These above methods also called as advanced array methods in JS.

//! 1. map():
//? The map() method is inbuilt js functions which is used to iterate and transform each and every array element.

//? map() will return new array.
//? Return Type: New Array
//? it does not  modify the original array instead of it will create the nef array
//? syntax : arr.map(callbackfunc)
//? final syntax : arr.map((cvalue,cindex,carray)  => {})
let arr = [10, 20, 30, 40, 50]
arr.map((Cvalue, Cindex, Carray) => {
    console.log("cvalue:", Cvalue, "cindex:", Cindex);
});

let addedArr = arr.map((num, index) => {
    // console.log(num + 5)
    return num + 5
})
console.log(addedArr)
console.log(arr)

let squareArr = arr.map((num) => {
    return num * num;
});
console.log(squareArr);

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let evenOdd = nums.map((num, key) => {
    if ((key + 1) % 2 == 0) {
        return num ** 2;
    } else {
        return num ** 3;
    }
});
console.log(evenOdd);

let evenNums = [2, 4, 6];
let notReturnAny = evenNums.map((num) => {
    console.log(num);
});
console.log(notReturnAny)