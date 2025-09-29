console.log("helo")
//! a collection of charactors is called as string

//! JS String:
//? A Collecction of characterss is called as String.

//! Ways to create string:
//? 1. Single Quote
//? 2. Double Quote
//? 3. String Template Literal (Backticks) (``)

//! Properties of a string:
//? length: It will return the count of the characters.

let festival = "Happy Navaratri";
console.log(festival.length);

//! Instance Methods of Strings:
//1 charAT();
//? syntax:str.chatAT(index)
//? return type charactor
let str1 = "hello"
console.log(str1.charAt)

//2 charCodeAT
//? syntax:str.charCodeAT
//? return type: ascii code
let str2 = "aBye";
console.log(str2.charCodeAt(0))

//3 indexOF()
//? syntax:str.indexOF(searchString, [searchIndex])
//? return type: index value of given search string
let str3 = "garba"
console.log(str3.indexOf("a", 2))

//4 includes
//? syntax:str.includes(searchString,[startIndex])
//? return type :boolean(true or false)
let str4 = "interested"
console.log(str4.includes("sted")) //true
console.log(str4.includes("e", 3))
console.log(str4.indexOf("e")) //3

//!substring()
//? syntax:str.substring(startIndex,endIndex)
//? return type: Extracted string
let str5 = "javascript"
console.log(str5.substring(0, 4))
console.log(str5.substring(4))
console.log(str5.substring(-6, -1))

//~note - substring cannot accepts negative index values
//! 6 slice()
//? syntax: str.slice(startindex, endindex)
//? return type : extracted String

let str6 = "fronted"
console.log(str6.slice(0, 8))
console.log(str6.slice(-9))
console.log(str6.slice(0, -1))

//~ note - slice will accept both positive as weel as negative index values

//! 7. lastIndexOf():
//? Syntax: str.lastIndexOf(searchString)
//? Return Type: Index Value

let str7 = "Center Fruit";
console.log(str7.lastIndexOf("e")); // 4

//! 8.startsWith():
//? Syntax: str.startsWith()
//? Return Type: Boolean (true or false)

let str8 = "Second day of Navratri";
console.log(str8.startsWith("day"));
console.log(str8.startsWith("Second"));

//! 9. endsWith():
//? Syntax: str.endsWith(searchString)
//? Return Type: Boolean (true or false);

console.log(str8.endsWith("Navratri")); // true

//! 10. repeat():
//? Syntax: str.repeat(count)
//? Return Type: Repeated String

let centerFruit = "laplapai ";
console.log(centerFruit.repeat(5));

//! 11. padStart():
//? Syntax: str.padStart(targetLength, fillString)
//? Return Type: Final String with added fill string (pad)

let mobile = "3210";
console.log(mobile.padStart(10, "#"));

//! 12. padEnd():
//? Syntax: str.padEnd(targetLength, fillString)
//? Return Type: Final String with added fill string (pad)

let aadhar = "12345678";
console.log(aadhar.padEnd(12, "$"));

let paddedEnd = aadhar.padEnd(12, "$");
console.log(paddedEnd.padStart(15, "#"));

//! 13. trim():
//? Syntax: str.trim()
//? Return Type: Remove the extra spaces from starting and ending

let str9 = "   You people are not    responding at all!    ";
console.log(str9.length);
console.log(str9.trim().length);

//! 14. trimStart():
//? Syntax: str.trimStart()
//? Return Type: Remove the extra spaces from the starting of the string.

console.log(str9.trimStart().length);

//! 15. trimEnd():
//? Syntax: str.trimEnd()
//? Return Type: Remove the extra spaces from the ending of the string.

console.log(str9.trimEnd().length);
//! 16. toUpperCase():
//? Syntax: str.toUpperCase()
//? Return Type: Convert the given string into uppercase charcaters.

console.log("this is not uppercase".toUpperCase());

//! 17. toLowerCase():
//? Syntax: str.toLowerCase()
//? Return Type: Convert the given string into lowercase charcaters.

console.log("THIS IS NOT LOWERCASE".toLowerCase());

//! 18. split():
//? Syntax: str.split(separator)
//? Return Type: Array

let extension = "document.pdf";
console.log(extension.split(".")); // (2) ['document', 'pdf']
console.log(extension.split(" ")); // ['document.pdf']
console.log(extension.split("")); // (12) ['d', 'o', 'c', 'u', 'm', 'e', 'n', 't', '.', 'p', 'd', 'f']

//! 19. concat():
//? Syntax: str.concat(str)
//? Return Type: Merged String

console.log("String ".concat("Added"));

//! 20. replace():
//? Syntax: str.replace(oldString, NewString)
//? Return Type: Relace the string occurence string

let sub = "Hello Java, How are you Java?";
console.log(sub.replace("Java", "JavaScript"));

//! 21. replaceAll():
//? Syntax: str.replaceAll(oldString, NewString)
//? Return Type: Replace all the occurences

console.log(sub.replaceAll("Java", "JavaScript"));


//~ task : create one function (getfunction) which will accept the filename  as a parameter and return the extention or filename
function getfunction(filename) {
    return filename.slice(filename.lastIndexOf("."))
}
console.log(getfunction("index.html"))

//~ first word make capital
function convertfword(word) {
    // let firstletter = word.charAt(0)
    // let upperfleeter = firstletter.toUpperCase()
    // console.log(upperfleeter)
    // return upperfleeter.concat(word.slice(1))
    return word.charAt(0).toUpperCase() + word.slice(1)
}
console.log(convertfword("hello"))