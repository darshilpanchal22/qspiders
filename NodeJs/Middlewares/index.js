//&loading middleware into the app
//& inbuilt middleware


const express = require('express')
const app = express()
const port = 3000

app.use(express.json())


//&createion of a middleware
// const login = function (req, res, next) {
//     console.log("login kr raha hu")
//     next()
// }
// app.use(login)

// //& loading middleware into application
// const auth = function (req, res, next) {
//     console.log("auth kr raha hu")
//     next()
// }
// app.use(auth)


// const valid = function (req, res, next) {
//     console.log("valid kr raha hu")
//     next()
// }
// app.use(valid)

const route = require('./routes/routes.js')
app.use('/api', route)
app.get('/', (req, res) => {
    console.log("route handler")
    console.log(req.body)
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
