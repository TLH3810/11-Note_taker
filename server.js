const express = require('express');
//const api = require('./routes/apiRoutes');//
//const html = require('./routes/htmlRoutes');
const app = express();
const PORT = process.env.PORT || 3001;
const fs = require('fs');
const { v4: uuidv4 }= require('uuid');
const path = require('path')

app.use(express.json());
//app.use('/api', api);
//app.use('/', html);
app.use(express.urlencoded({ extended: true }));
//app.use(express.static('public'));


//routes
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'./public/index.html'))
});
app.get('/notes', (req,res) => {
       res.sendFile(path.join(__dirname,'./public/notes.html'))
    });  
// get files
app.get("/assets/js/index.js", function(req, res) {
res.sendFile(path.join(__dirname, "./public/assets/js/index.js"));
});
app.get("/assets/css/styles.css", function(req, res) {
res.sendFile(path.join(__dirname, "./public/assets/css/styles.css"));
});
// get, post and delete funciton links
app.get('/api/notes', (req, res) => {res.send(json.parse(fs.readFileSync('./db/db.json')))
});

app.post('/api/notes', (req, res) => {
    req.body[id]=uuidv4();
    JSON.parse.push(req.body[id]=uuidv4());
    let newNote = JSON.stringify((JSON.parse(fs.readFileSync('./db/db.json'))), null, 2);
    fs.writeFile('./db/db.json', newNote, (err) => err ? console.log(err): console.log('Note Added.'))
    res.send(JSON.parse(fs.readFileSync('./db/db.json')))
    });

app.delete('/api/notes/:id', (req,res) => {
    JSON.parse(fs.readFileSync('./db/db.json')).splice(JSON.parse(fs.readFileSync('./db/db.json')));
    res.send("Delete")
});

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`))