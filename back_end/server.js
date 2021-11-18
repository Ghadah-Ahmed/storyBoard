const express = require('express')
const cors = require("cors");
const app = express()
const fs = require('fs')
const usersRou = require('./router/usersRou')
const libraryRou =  require('./router/library')
const users = require('./users')
const library = require('./library')


app.use(express.json({limit: "50mb"}))
app.use(cors({origin: 'http://localhost:8080'}))
// for file in router
app.use('/users',usersRou)
app.use('/library',libraryRou)




const POTR = process.env.POTR || '8080';
app.listen(POTR, function () {
    console.log(`Example app listening on port 8080! ${POTR}`)
    })