import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import routes from "./routes/index"

const app =  express()

mongoose.connect("mongodb://localhost")

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use((error, req, res, next) => {
    console.log(error.stack)
    res.status(400).send(`Error: ${res.originUrl} not found`)
    next()
})

app.use((error, req, res, next) => {
    console.log(error.stack)
    res.status(500).send(`Error: ${error}`)
    next()
})

routes(app)

export default app