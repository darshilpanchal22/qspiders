const express = require('express')
const router = express.Router()

//& Auth middleware
const auth = function (req, res, next) {
    console.log("i am inside auth middleware")

    //& dummy user
    req.user = {
        userId: 1,
        role: "student"
    }

    if (req.user) {
        next()
    } else {
        res.json({
            success: false,
            message: "not a valid user"
        })
    }
}

//& student middleware
const isstudent = function (req, res, next) {
    console.log("i am inside student middleware")

    if (req.user.role === "student") {
        next()
    } else {
        res.json({
            success: false,
            message: "sorry! you are not student"
        })
    }
}

//& admin middleware
const isadmin = function (req, res, next) {
    console.log("i am inside admin middleware")

    if (req.user.role === "admin") {
        next()
    } else {
        res.json({
            success: false,
            message: "sorry you are not admin"
        })
    }
}

//& Routes
router.get("/student", auth, isstudent, (req, res) => {
    console.log("i am inside student route")
    res.send("student specific page")
})

router.get("/admin", auth, isadmin, (req, res) => {
    console.log("i am inside admin route")
    res.send("admin specific page")
})

module.exports = router