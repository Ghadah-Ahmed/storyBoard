const express = require('express')
const cors = require("cors");
const app = express()
const fs = require('fs')
const usersRou = require('./router/usersRou')
const libraryRou =  require('./router/library')
const users = require('./users')
const library = require('./library')

// ** MIDDLEWARE ** //
const whitelist = ['http://localhost:3000', 'http://localhost:8080', 'https://shrouded-journey-38552.herokuapp.com']
const corsOptions = {
  origin: function (origin, callback) {
    console.log("** Origin of request " + origin)
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log("Origin acceptable")
      callback(null, true)
    } else {
      console.log("Origin rejected")
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(corsOptions))


app.use(express.json({limit: "50mb"}))
app.use(cors({origin: 'http://localhost:8080'}))
// for file in router
app.use('/users',usersRou)
app.use('/library',libraryRou)

const path = require('path');
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
// Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}




const POTR = process.env.POTR || '8080';
app.listen(POTR, function () {
    console.log(`Example app listening on port 8080! ${POTR}`)
    })