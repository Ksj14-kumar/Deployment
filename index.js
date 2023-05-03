const express = require("express")
const { default: mongoose } = require("mongoose")
require("dotenv").config()
const app = express()
const port = process.env.PORT || 7000
const URI = process.env.URI_DB

async function db() {
    try {
        await mongoose.connect(URI)
        console.log("db is connecte")
    } catch (err) {
        console.log(err)
    }
}
db()
app.get("/", async (req, res) => {
    return  res.send("<h1>Welcome to Deployment</h1>")
})

mongoose.connection.once("open", (err) => {
    app.listen(port, (err) => {
        if (err) {
            console.log("port is not running", port)
        }
        else {
            console.log("server is running at port", port)
        }
    })
})