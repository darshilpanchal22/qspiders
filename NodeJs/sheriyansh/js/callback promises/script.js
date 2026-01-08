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

// function connect() {
//     console.log("connecting")
//     setTimeout(function () {
//         console.log("connected")
//     }, 3000)
// }

// function fetchcources() {
//     console.log("cources")
//     setTimeout(() => {
//         console.log("helo")
//     }, 2000);
// }
// connect()
// fetchcources() 

function connectserver() {
    console.log("connecting to server");

    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("connected...")
        }, 2000);
    })
}

function getcources() {
    console.log("getting cources")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("cource1", "cource2", "cource3")
        }, 2000);
    })
}
connectserver()
    .then(function (response) {
        console.log(response)
        return getcources()
    })

    .then(function (response) {
        console.log(response)
    })