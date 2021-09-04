const util = require('util');
const fs = require('fs');
const uuidv1 = require('uuid/v1');

const read = util.promisify(fs.readFile);
const write = util.promisify(fs.writeFile);

class Notes{
    read(){
        return read('db/db.json','utf8');
    }
    write(note){
        return write('db/db.json', JSON.stringify(note));
    }
   //getNote(){}
   addNote(note){
       const {title, text} = note;
       const newNote = {title, text, id: uuidv1()};
       return this.getNotes()
       .then((notes)=>[...notes, newNote])
       .then((newNoteList)=> this.write(newNoteList))
       .then(()=>newNote);
   }
   // deleteNote(){}
}
module.exports = new Notes();