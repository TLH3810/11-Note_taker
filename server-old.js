const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const fs = require('fs');
const { uuidv4 } = require('uuid')
let dataStore = ('./db.db.json');




app.use(express.json());
app.use('/api', api);
app.use('/', html);
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


api
app.get('/api/notes',(req,res)=> {res.send(JSON.parse(fs.readFileSync('./db/db.json')))})
const read = util.promisify(fs.readFile);
const write = util.promisify(fs.writeFile);
const addNote = req.body;

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`))