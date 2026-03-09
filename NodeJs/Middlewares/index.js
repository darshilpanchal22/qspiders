//&loading middleware into the app
//& inbuilt middleware
const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

const login = function (req, res, next) {
    console.log("login kr raha hu")
    next()
}
app.use(login)

const auth = function (req, res, next) {
    console.log("auth kr raha hu")
    next()
}
app.use(auth)

const valid = function (req, res, next) {
    console.log("valid kr raha hu")
    next()
}
app.use(valid)

app.get('/', (req, res) => {
    console.log("route handler")
    console.log(req.body)
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})