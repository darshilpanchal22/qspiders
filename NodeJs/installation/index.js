const express = require("express");
const app = express();
const port = 3000;

const item = require("./routes/item.js");

app.use(express.json());
app.use("/item", item);

app.listen(port, () => {
    console.log(`Server running on port ${port}`, port);
});