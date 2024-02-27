import React, { useState } from "react";
import Note from "./Note";
export default function List() {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [noteList, setNoteList] = useState([]);
  function handleChange(event) {
    if (event.target.name === "title") {
      setTitle(event.target.value);
    } else {
      setNote(event.target.value);
    }
  }
  function addNote() {
    setNoteList((prevNote) => {
      return [
        ...prevNote,
        {
          title: title,
          note: note,
        },
      ];
    });
  }

  function deleteNote(id) {
    setNoteList((prevNote) => {
      return prevNote.filter((item, index) => {
        return index !== id;
      });
    });
    console.log(noteList)
  }

  return (
    <div>
      <h1>Enter Note</h1>
      <input type="text" onChange={(e) => handleChange(e)} name="title"></input>
      <textarea
        type="text"
        onChange={(e) => handleChange(e)}
        name="note"
      ></textarea>
    <div>
      <button onClick={addNote}>Add Note</button>
      </div>
      {noteList.map((notes, index) => {
        return (
          <Note
            key={index}
            id={index}
            note={notes.note}
            title={notes.title}
            deleteNote={deleteNote}
          />
        );
      })}
    </div>
  );
}
