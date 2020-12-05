const mongoose = require('mongoose');

const Note = mongoose.model('Note', {
  title: String,
  body: String 
});

module.exports = Note;