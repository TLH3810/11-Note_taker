const router = require('express').Router();
const dbNotes = require('../db/db.json')

//get notes from Database
router.route("/notes")
    .get((req,res) => {
        console.log("GET/notes");
        res.status(200).send(data.notes);
    })
    .post((req,res) => {
        console.log("POST/notes");
        console.log(req.body);
        const newNote = req.body;
        data.push(newNote);
        res.json(newNote);
    })
//    .delete((req,res) => {
        //console.log("DELETE/notes/:id");
        //console.log(req.body)
      //  const removeNote = res.body/:id
    //})
    

    module.exports = router;