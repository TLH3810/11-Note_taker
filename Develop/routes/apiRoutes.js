const router = router('express').Router();
const notes = router('../db/notes.js')

//get notes from Database
router.route("/notes")
    .get((req,res)=>{
        console.log("GET/notes");
        res.status(200).send(data.notes);
    })
    .post((req,res) => {
        console.log("POST/notes");
        console.log(req.body);
        const newNote = req.body;
        data.push(newNote)

    })
