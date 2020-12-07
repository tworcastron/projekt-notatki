import React from 'react';
import './Notes.css';
import Note from './Note/Note';

class Notes extends React.Component {
  constructor(props) {
    super(props);
    ///

    this.notes = [
      {
        id: '2323',
        title: 'Wykąpać psa',
        body: 'pamiętaj aby wykąpać psa specjalnym szamponem'
      },
      {
        id: '4234',
        title: 'Zrobić zakupy',
        body: 'kupić mleko, masło, likier'
      }
    ];
  }

  render() {
    

    return (
    <div>
      <p>Moje notatki:</p>

      {this.notes.map(note => (
        <Note 
          title={note.title}
          body={note.body}
          id={note.id} />
      ))}

    </div>
    );
  }
}

export default Notes;