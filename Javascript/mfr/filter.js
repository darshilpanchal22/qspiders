
console.log("filter () in js")

//2 filter()  method
//? the filter() method is allow us to filter out the array elements based on certain condition
//? it does not modify the original array instead of it will create the new array

//? condition > true > element added
//? condtion > false > element not added
//? syntax : arr.filter((cValue,cIndex) = > {})
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//let evenNumbers = numbers.filter((num, Index) => {}
// if  num % 2 == 0 ){
// console.log(num)
// return num 
// }
// });
// console.log(evenNumbers)

let evenNumbers = numbers.filter
    ((num) => num % 2 == 0);
console.log(evenNumbers)

let evenNumbers2 = numbers.map
    ((num) => {
        if (num % 2 == 0) {
            return num;
        }
    })
console.log(evenNumbers2)

