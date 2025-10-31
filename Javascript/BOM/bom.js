//! bom in js
//? bom stands for browser object model in js
//? bom it is used to interact or manipulate the browser screen or window

//^ window object
//? window is a global object in js which is provided by the browser
//? for each and every browser there is window object

//! window properties
//& document
//& navigator
//& location
//& screen
//& history
//& console

//? 1 document
//* syntax : window.document or document
console.log(window.document)
console.log(document)

//? 2 navigator
//* the window.navigator tells the information about the users browser
console.log(navigator)
console.log(navigator.appVersion)
console.log(navigator.language)
console.log(navigator.onLine)

//?3 location
console.log(location)
console.log(location.origin)
console.log(location.href)


document.getElementById("btn").addEventListener("click", () => {
    // window.location.reload();
    window.location.assign("https://www.google.com/");
    // window.location.href = "https://www.google.com/"
}) 