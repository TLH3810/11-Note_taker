const util = require('util');
const fs = require('fs');
const { uuidv4 } = require('uuid')

const read = util.promisify(fs.readFile);
const write = util.promisify(fs.writeFile);

class Notes{
    read(){
        return read('db/db.json','utf8');
    }
    write(note){
        return write('db/db.json', JSON.stringify(note));
    }
   getNote(){
       return this.read().then((notes)=>{
           let noteParse;
           try{noteParse=[].concat(JSON.parse(notes));
           }catch(err){noteParse=[];}
           return noteParse;
       });
   }
   addNote(note){
       const {title, text} = note;
       if(!title||!text){throw new error("Title and Text must be filled in")}
       const newNote = {title, text, id: uuidv4()};
       return this.getNote()
       .then((notes)=>[...notes, newNote])
       .then((newNoteList)=> this.write(newNoteList))
       .then(()=>newNote);
   }
    deleteNote(id){
       return this.getNote()
       .then((notes)=>notes.filter((note)=>note.id !==id))
       .then((removedNotes)=> this.write(removedNotes));
   }
}
module.exports = new Notes();