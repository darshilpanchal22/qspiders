//~ Array:
//? Array is a special type of object in JavaScript.
//? Array is a collection of data which may be homogeneous or hetrogeneous type of data.

//! 1. Homogeneous Array:
let hmArr = [10, 20, 30, 40];
let nameArr = ["John", "Jacob", "Michael"];

//! 2. Hetrogeneous Array:

let mixedArr = [
    10,
    "John",
    true,
    null,
    undefined,
    { key: "Value" },
    () => {
        "Hello";
    },
];

//! Ways to create array:
//? 1. By using array constructor.
//? Syntax: new Array()

let arr = new Array(10, 20, 30, 40, 50);
console.log(arr);
console.log(typeof arr);

//? By using Array Literal = []
let arr2 = [10, 20, 30];
console.log(arr2);

//! Length property in Array:

//? 1. Getting the length
console.log(arr2.length);

//? 2. Setting the length
let names = ["Tony", "Steve", "Thor", "Banner"];
names.length = 3;
console.log(names);

//! Array static methods:
//? 1. Array.from()
let str = "Hello";
let arrIterable = Array.from(str);
console.log(arrIterable);

// let paras = document.getElementsByClassName("para");
// console.log(paras);
// console.log(Array.isArray(paras));
// let newArr = Array.from(paras);
// console.log(newArr);
// console.log(Array.isArray(newArr));

//? 2. Array.of()
//^ Array.of() method is used to create array from the given element
let createdArr = Array.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);
console.log(createdArr);

//? 3. Array.isArray()
//^ It is used to check the given array is array or not.
//^ Return Type: Boolean Value (true or false)
console.log(Array.isArray(createdArr));

//~ Array Instance Methods: (Non-Stick methods)

//! 1. pop():
//? The Push() method is used to add the elements from the ending of the array.
//? Syntax: arr.push(e1, e2, e3, ..., en)

let heros = ["Mark Ruffelo", "RDJ", "Chris Evans"];
console.log(heros);
heros.push("Chris Prat", "Florence Pugh", "Scarlett Johnson");
console.log(heros);

//! 2. push():
//? The pop() method is used to remove the single array element from thte ending of the array.
//? Syntax: arr.pop()
console.log(heros.pop());
console.log(heros);

//! 3. unshift():
//? The unshift() method is used to add the elements from the starting of the array.
//? Syntax: arr.unshift(e1, e2, e3, ..., en)

heros.push("Leanrdo Caprio", "Hugh Jackman", "Johnny Depp");
console.log(heros);

//! 4. shift():
//? The shift() method is used to remove the single array element from thte strating of the array.
//? Syntax: arr.shift()

console.log(heros.shift());
console.log(heros);

//! 5. slice():
//? The slice is used to extract the array elements from the given array.
//? Syntax: arr.slice(startIndex, endIndex)

let hobbies = ["Reading", "Writing", "Watching", "Singing", "Dancing"];
let extractedHobbies = hobbies.slice(0, 3);
console.log(extractedHobbies);
console.log(hobbies);

//! 6. splice():
//? THe splice method is used to replace, remoeve or add new element inside the array.
//? Syntax: arr.splice(startIndex, deleteCount, a1, a2, a3,..., an)

let todoList = ["Playing Games", "Coding", "Talking", "Music"];
console.log(todoList);
todoList.splice(2, 1, "Watching Movies", "Sleeping");
console.log(todoList);

//! 7. indexOf():
//? The indeOf() is used to get the index value of the given array element.
//? Syntax: arr.indexOf("search_Element")
console.log(todoList.indexOf("Coding")); // 1
console.log(todoList.indexOf("Bakwas")); // -1

//! 8. includes():
//? The includes()  is used to check the given element is present or not inside the array.
//? Syntax: arr.includes(array_ele)
console.log(todoList.includes("Garba")); // false
console.log(todoList.includes("Playing Garba")); // true

//! 9. reverse():
//?
//? Syntax: arr.reverse()
let nums2 = [1, 2, 3];
console.log(nums2.reverse());

//! 10. join():
//?
//? Syntax: arr.join(separator)
let nums = [1, 2, 3];
console.log(nums.join("-"));

//! 11. keys():
//?
//? Syntax: arr.keys()
console.log(nums2.keys());

//! 12. values():
//?
//? Syntax:

console.log(nums2.values());

//! 13. concat():
//?
//? Syntax:

let arrA = [1, 2, 3];
let arrB = [4, 5];
let mergedArr = arrA.concat(arrB);
console.log(mergedArr);

let newMergedArr = [10, 20, 30];
console.log(newMergedArr.concat(40, 50));

//! 14 flat()
//? the flat method is used to convert the nested array elements into the single array and it depend on the depth (default =1)
//? syntax = arr.flat(deepth)
let nestedarr = [1, 2, 3, [4, 5[6, 7[8]]]]
console.log(nestedarr())
console.log(nestedarr(2))
console.log(nestedarr(3))
console.log(nestedarr([3][2][0]))