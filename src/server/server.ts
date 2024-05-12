import express from "express"
import os from "os"
import config, { PORT } from "./config"
import apiRouter from "./api-router"

const server = express()

server.use(express.static("dist"))

server.set("view engine", "ejs")

server.get("/", (req, res) => {
    res.render("index", {
        content: "Loading..."
    })
})

server.use("/api", apiRouter)

server.listen(PORT, () => {
    console.info("express server is listening",
    `Free Mem: ${os.freemem() / 1024 / 1024}`)
})