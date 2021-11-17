const express = require('express')
const cors = require("cors");
const app = express()
const fs = require('fs')
const usersRou = require('./router/usersRou')
const libraryRou =  require('./router/library')
const users = require('./users')
const library = require('./library')


app.use(express.json({limit: "50mb"}))
app.use(cors())
// for file in router
app.use('/users',usersRou)
app.use('/library',libraryRou)





app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
    })