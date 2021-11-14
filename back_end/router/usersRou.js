const uniqid = require('uniqid'); 
var validator = require("email-validator");
const Joi = require('joi');
const express = require('express')
const users = require('../users')
const fs = require('fs')
let router = express.Router()

//get
router.get('/',  (req, res) => {
    res.send(users);
    console.log('hello')
})
//post /users

router.post('/',  (req, res) => {
   //Joi Liprary
  const schema ={
    name:Joi.string().min(4).required(),
    email:Joi.string().min(4).required(),
    password:Joi.string().min(4).required()
  };

  const result =Joi.validate(req.body, schema);
  if (result.error){
    res.status(400).send(result.error.details[0].message);
    return;
  }
  //
if(validator.validate( req.body.email)){
    const user1 ={
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        id:uniqid()
    }
 
     const nameOfUsers = users.find((nameOfUsers)=>{ 
        return nameOfUsers.email == req.body.email
      })
      if (nameOfUsers){
        res.send("the Email already exists");
      }else{
        users.push(user1); 
        res.send(users);
      }
//send information to json file
      fs.writeFile('users.json', `${JSON.stringify(users)}`, (err) => {
        if (err) {
          console.log(err);
        res.send(users)
        return;
      }
      })
    }  
    
    else{
      res.send("The entry must be valid ex: name@gmail.com")
    }
})


// put users
router.put('/:id',  (req, res) => {
    console.log(req.params.id)
    const nameOfUsers = users.filter((nameOfUsers)=>{ 
    
      return nameOfUsers.id == req.params.id 
    })
    console.log(nameOfUsers)
// validate put

const {error} = validateUser(req.body)
if (error){
  res.status(400).send(error.details[0].message);
  return;
}


function validateUser(users){
  const schema ={
    name:Joi.string().min(4).required()
  };
  
  return Joi.validate(users, schema);
}
//
    console.log(nameOfUsers)
    nameOfUsers[0].name = req.body.name
    nameOfUsers[0].email = nameOfUsers[0].email
    nameOfUsers[0].password = nameOfUsers[0].password

    fs.writeFile('users.json', `${JSON.stringify(users)}`, (err) => {
      if (err) {
        console.log(err);
      
    }
    return res.send(users)
  })
})


// delete users

router.delete('/',  (req, res) => {
    console.log(req.params.id)
const deleteUsers = users.filter((deleteUsers)=>{ 
    return deleteUsers.id == req.body.id
})
console.log(deleteUsers)

const index = users.indexOf(deleteUsers[0])
users.splice(index, 1)
fs.writeFile('users.json', `${JSON.stringify(users)}`, (err) => {
      if (err) throw err;
      res.send(users)
    })
})

// post for Log In

router.post('/login',  (req, res) => {
    
        let email = req.body.email;
        let password= req.body.password;
    

    
    const nameOfUser = users.find((nameOfUser)=>{ 
        return nameOfUser.email == email
      });
    //   console.log(nameOfUser.email);
    //   console.log(email);
    //   console.log(password);
    if(nameOfUser == undefined){ res.send('this user does not exsist!!!');
    }else{

      if (nameOfUser.email==email && nameOfUser.password==password){
        res.send("the user is signed in ");
      }else{
       res.send("the email or password is wrong");
      }
    }
    fs.writeFile('users.json', `${JSON.stringify(users)}`, (err) => {
      if (err) throw err;
      res.send(users)
    })
})

module.exports =router;