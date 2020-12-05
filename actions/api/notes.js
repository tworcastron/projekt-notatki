const Note = require('../../db/models/note');

module.exports = {
  saveNote(req, res) {

    
    const newNote = new Note({ 
      title: 'Zrobić zakupy 2', 
      body: 'mleko, jajka, woda'
    });
    newNote.save().then(() => {
      console.log('notatka została zapisana')
    });


    res.send('Strona główna działa!');
  }
}