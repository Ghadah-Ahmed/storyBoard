const express = require('express')
const users = require('../users')
const fs = require('fs')
let router = express.Router()

router.get('/',  (req, res) => {
    res.send(users);
    console.log('hello')
})
//post /users

router.post('/',  (req, res) => {
    const user1 ={
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        id:users.length +1
    }
    users.push(user1); 
     res.send(users);
})


// put users
router.put('/',  (req, res) => {
    console.log(req.params.id)
    const nameOfUsers = users.filter((nameOfUsers)=>{ 
      return nameOfUsers.id == req.params.id
    })
    console.log(nameOfUsers)
    nameOfUsers[0].name = req.body.name
    nameOfUsers[0].email = req.body.email
    nameOfUsers[0].password = req.body.password

    fs.writeFile('users.json', `${JSON.stringify(users)}`, (err) => {
        if (err) throw err;
        res.send(users)
      })
})


// delete users

router.delete('/',  (req, res) => {
    console.log(req.params.id)
const deleteUsers = users.filter((deleteUsers)=>{ 
    return deleteUsers.id == req.params.id
})
console.log(deleteUsers)

const index = users.indexOf(deleteUsers[0])
users.splice(index, 1)
fs.writeFile('users.json', `${JSON.stringify(users)}`, (err) => {
      if (err) throw err;
      res.send(users)
    })
})

module.exports =router;