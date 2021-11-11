const express = require('express')
const cors = require("cors");
const app = express()
const fs = require('fs')
const usersRou = require('./router/usersRou')
const users = require('./users')

app.use(express.json())
app.use(cors({origin: 'http://localhost:8080'}))
// for file in router
app.use('/users',usersRou)











app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
    })