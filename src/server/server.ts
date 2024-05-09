import express from "express"

const server = express()

server.use(express.static("dist"))

server.set("view engine", "ejs")

server.use("/", (req, res) => {
    res.render("index")
})

server.listen(4000, () => {
    console.info("express server is listening")
})