const express = require("express")
const app = express()
const data = require('./feelings.json')
const negative = data.negative
//const positive = data.positive

app.get("/negative", (req, res) => {
    res.json({"negative": negative})
})

app.listen(2000, () => { console.log("Server started on port 2000") })