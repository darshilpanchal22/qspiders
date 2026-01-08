//& callback , Promises, async/await
// function GETSONGS() {
//     setTimeout(function () {
//         console.log("songs")
//     }, 2000)
// }

// function getmoresongs() {
//     setTimeout(function () {
//         console.log("first")
//     }, 4000)
// }
// getmoresongs()
// GETSONGS();

function connect() {
    console.log("connecting")
    setTimeout(function () {
        console.log("connected")
    }, 3000)
}

function fetchcources() {
    console.log("cources")
    setTimeout(() => {
        console.log("helo")
    }, 2000);
}
connect()
fetchcources() 