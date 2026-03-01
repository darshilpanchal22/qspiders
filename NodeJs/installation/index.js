const express = require("express")
const app = express()
const port = 3000


//! reguest 


app.use(express.json());

app.get("/", (req, res) => {
    // res.send("helo")
    res.sendFile("dummy.html", { root: __dirname });
});

app.post("/items", (req, res) => {
    // res.send("Got a POST request");
    res.json({ x: 1, y: 2, z: 3 })
});

app.put("/items/:id", (req, res) => {
    res.send(`Got a PUT request for id`);
});

app.delete("/items/:id", (req, res) => {
    res.send(`Got a DELETE request for id`);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});