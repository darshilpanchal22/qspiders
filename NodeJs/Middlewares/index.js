const express = require('express')
const app = express()
const port = 3000

//&loading middleware into the app
//& inbuilt middleware

app.use(express.json())

//! middleware - logging auth validation

const login = function (reg, res, next) {
    console.log("login kr raha hu")
    next()
}
app.use(login)

const auth = function (reg, res, next) {
    console.log("auth kr raha hu ")
    next()
}
app.use(auth)

const valid = function (re1, res, next) {
    console.log("valid kr raha hu")
    next()
}
app.use(valid)

app.get('/', (req, res) => {
    console.log(req.body)
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
