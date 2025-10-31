console.log("timing function in js");
//!timing function in js:
//?the timing fun in js allow us to perform some specific task after certain period of delay or interval
//?timing function provides following function
//^1.setTimeout()
//^2.setInterval()
//^3.clearTimeout()
//^4.clearInterval()

//!1.setTimeout():
//?the setTimeout() function will execute a task after some specified given delay in ms
//?syntax:setTimeout(callback_function,time(ms))

console.log("started");
setTimeout(() => {
    console.log("this is setTimeout function");
}, 3000);
console.log("ended");

//!2.setInterval():
//?the setInterval() function will execute a task repeatedly after some specified given interval in ms
//?syntax:setInterval(callback_function,time(ms))
//?setInterval() will execute again and again after some interval.

setInterval(() => {
    console.log("this is setInterval function");
}
    , 2000);

let count = 10;
let countdown = setInterval(() => {
    console.log(count--);
    if (count === 0) {
        clearInterval(countdown);
        console.log("countdown finished");
    }

})
