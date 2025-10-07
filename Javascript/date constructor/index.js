console.log("Date Object in JS");

//! Date Object:
//? The Date Object in Javascript is a inbuilt object which is used to get or set the date related properties
//? The date object is used to manipulate the date.

//? Syntax:
let myDate = new Date();
console.log(myDate); // current time and date, day, month, year, hour, minute, second, millisecond

console.log(Date());

//! Date.now():
// console.log(myDate.now());
console.log(Date.now()); // returns the number of milliseconds since January 1, 1970 00:00:00 UTC

//! Date.properties:
let date = new Date();
console.log(date);
console.log(Date.length); // 7

//! Getting date methods:
//? 1. getFullYear():
console.log(date.getFullYear()); // 2025

//? 2. getMonth(): 0-11
console.log(date.getMonth()); // 0-11 (0-January, 1-February, 2-March, 3-April, 4-May, 5-June, 6-July, 7-August, 8-September, 9-October, 10-November, 11-December)

//? 3. getDate(): 1-31
console.log(date.getDate()); // 1-31 (returns the day of the month)

//? 4. getDay(): 0-6
console.log(date.getDay()); // 0-6 (0-Sunday, 1-Monday, 2-Tuesday, 3-Wednesday, 4-Thursday, 5-Friday, 6-Saturday)

//? 5. getHours(): 0-23
console.log(date.getHours()); // 0-23 (returns the hour of the day)

//? 6. getMinutes(): 0-59
console.log(date.getMinutes()); // 0-59 (returns the minutes)

//? 7. getSeconds(): 0-59
console.log(date.getSeconds()); // 0-59 (returns the seconds)

//? 8. getMilliseconds(): 0-999
console.log(date.getMilliseconds()); // 0-999 (returns the milliseconds)