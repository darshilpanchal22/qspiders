// const { Children } = require("react")

async function fetchUsers(params) {
    let response = await fetch("http://localhost:5001/employee")
    console.log(response)
    let data = await response.json()
    console.log(data)
}
fetchUsers();