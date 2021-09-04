const router = require('express').Router();
const dbNotes = require('../db/db');
//const fs = require('fs');
//const { uuidv4 } = require('uuid')

//get notes from Database

router.get('/notes', (req, res) => {
    //console.log("GET/notes");
    //res.status(200).send(data.notes);
    //return fs.readFile(dbNotes);
    //res.sendFile(path.join(__dirname, "../db/db.json"));
    dbNotes
    .getNotes()
    .then((notes)=>{return res.json(notes);})
    .catch((err)=>res.status(500).json(err));
});

router.post("/notes", (req, res) => {
    //console.log("POST/notes");
    //console.log(req.body);
   //let noteList = []
    //let newNote
    //fs.readFile(dbNotes, (err, data) => {
       // if (err) throw err;
        //noteList = JSON.parse(data)
        //newNote = { title: req.body.title, text: req.body.text, id: uuidv4() }
       
        //.then((notes)=> [...notes, noteList.push(newNote)])
        //.then((updateNotes)=> this.write(updateNotes))
        //.then(()=> newNote)
        dbNotes
        .addNote(req.body)
        .then((note)=>res.json(note))
        .catch((err)=>res.status(500).json(err));
    })
/*     noteList.push(newNote)
    fs.writeFile(dbNotes, JSON.stringify(noteList), (err) => {
        if (err) throw err;
        res.json(noteList);
    }); */
//    .delete((req,res) => {
//console.log("DELETE/notes/:id");
//console.log(req.body)
//  const removeNote = res.body/:id
//})


module.exports = router;