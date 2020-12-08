import React, { useState } from 'react';

function Note(props) {

  const [showDesc, setShowDesc] = useState(false);

  const toggleDesc = () => {
    setShowDesc(!showDesc);
  }
  const editHandler = () => {
    props.onEdit({ 
      title: props.title, 
      body: props.body, 
      _id: props.id 
    });
  }

  return (
    <div className="note">
      <p onClick={toggleDesc}>{props.title}</p>
      {showDesc && (
        <div className="description">{props.body}</div>
      )}
      <button onClick={editHandler} >edytuj</button>
      <button 
        className="delete" 
        onClick={() => props.onDelete(props.id)}>usuń</button>
    </div>
  );
}

export default Note;