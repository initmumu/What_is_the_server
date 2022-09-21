const express = require("express")
const app = express()

const port = 921

app.listen(port, () => {
    console.log("Server is on");
})

app.get("/", (req, res) => {
    res.send("Hello, World!")
})