const express = require('express')
const library = require('../library')
const fs = require('fs')
let router = express.Router()



//get 
router.get('/',  (req, res) => {
    res.send(library);
    //console.log("hello")
})

//post 

router.post('/',  (req, res) => {
    const librarys ={
        pages: req.body.pages,
        title: req.body.title,
        userName: req.body.userName,
        body: req.body.body,
        id:library.length +1
    }

    library.push(librarys);
    fs.writeFile('library.json', `${JSON.stringify(library)}`, (err) => {
        if (err) {
          console.log(err);
      }
      })
      res.send(library)

})

//Delete
router.delete('/:id',  (req, res) => {
    console.log(req.params.id)
const deleteLibrary = library.filter((deleteLibrary)=>{ 
    return deleteLibrary.id == req.params.id
})
console.log(deleteLibrary)

const index = library.indexOf(deleteLibrary[0])
library.splice(index, 1)
fs.writeFile('library.json', `${JSON.stringify(library)}`, (err) => {
      if (err) throw err;
      res.send(library)
    })
    
})



module.exports =router;
