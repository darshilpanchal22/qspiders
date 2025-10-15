console.log("Types of event in js")

//!types of event:
//?1. Mouse events
//?2.keyboard events
//?3.form events
//?4.window events
//?5.clipboard events
//?6.focus events

//!what is event(e) object:
// window.addEventListener("click",(e)=>{
//     console.log(e)//pointer event
// })
// document.getElementById("btn").addEventListener("click",(e)=>{
// console.log(e.currentTarget)
// console.log(e.target)
// })

document.getElementById("myinput").addEventListener("input", (e) => {
    console.log(e.target.value)
})

//!2.keyboard events:
// document.getElementById("myinput").addEventListener("keyup",(e)=>{
//   console.log(e.key)
// })
document.getElementById("myinput").addEventListener("keydown", (e) => {
    console.log(e.key)
})

//!3. form event:
//? submit event:
document.getElementById("myform").addEventListener("submit", (e) => {
    e.preventDefault()//to prevent the default behaviour of the form
    console.log("form is submitted")
})

//?change event:
document.getElementById("course").addEventListener("change", (e) => {
    console.log(e.target.value)
})

//? input event:
document.getElementById("username").addEventListener("input", (e) => {
    console.log("input giving real time data")
    document.getElementById('result').innerHTML = `written text will be displayed here:${e.target.value}`
})

//?focus event:

let username = document.getElementById("username").addEventListener('focus', () => {
    console.log("input field is focused")
})

//?blur event:
document.getElementById("username").addEventListener('blur', () => {
    console.log("input field lost is focus")
    document.getElementById("username").style.backgroundColor = "red"
})

//! clipboard events
document.getElementById("mytext").addEventListener("paste", () => {
    alert("text copied to clipboard")
})