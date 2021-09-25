const fs = require('fs');
const { networkInterfaces } = require('os');
const { v4: uuidv4 } = require('uuid')
module.exports = function (app) {
  app.get('/api/notes', function (req, res) {
    fs.readFile('./db/db.json', (err, data) => {
      if (err) throw err;
      dbData = JSON.parse(data);
      res.send(dbData);
    });
  });
  app.post('/api/notes', function (req, res) {
    const newNote = { title: req.body.title, text: req.body.text, id: uuidv4() }
    console.log(newNote.id);
    console.log(req);
    fs.readFile('./db/db.json', (err, data) => {
      if (err) throw err;
      dbData = JSON.parse(data);
      dbData.push(newNote);
      dbData.forEach((element, index) => {
        console.log(element);
        element.id = uuidv4;
        return element
      });
      fs.writeFile('./db/db.json', JSON.stringify(dbData), (err, data) => {
        if (err) throw err;
        res.send(newNote);
      });
    });
  });
  app.delete('/api/notes/:id', function (req, res) {
    
    const removeNote = dbData[req.body.id];
    fs.readFile('./db/db.json', (err, data) => {
      if (err) throw err;
      dbData = JSON.parse(data);
      delete removeNote;
      console.log(data);
    });
    fs.writeFile('./db/db.json', JSON.stringify(dbData), (err, data) => {
      if (err) throw err;
      res.send(dbData);
    });
  });
}