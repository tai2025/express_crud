import express from "express"
import os from "os"
import config, { PORT } from "./config"

const server = express()

server.use(express.static("dist"))

server.set("view engine", "ejs")

server.use("/", (req, res) => {
    res.render("index", {
        content: "EJS is cool"
    })
})

server.listen(PORT, () => {
    console.info("express server is listening",
    `Free Mem: ${os.freemem() / 1024 / 1024}`)
})