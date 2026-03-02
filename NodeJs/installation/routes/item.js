
const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
    res.sendFile("d.html", { root: __dirname })
});

router.post("/", (req, res) => {
    res.json({ x: 1, y: 2, z: 3 });
});

router.put("/:id", (req, res) => {
    res.send(`Got a PUT request for id ${req.params.id}`);
});

router.delete("/:id", (req, res) => {
    res.send(`Got a DELETE request for id ${req.params.id}`);
});

module.exports = router;