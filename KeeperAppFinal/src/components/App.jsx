import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  function handleChange(event) {
    if (event.target.name === "title") {
      setTitle(event.target.value);
    } else {
      setText(event.target.value);
    }
  }
  function addNote(event) {
    setNotes((notes)=>{
      return [...notes, {title: title,
      notes: text}]
    });
    event.preventDefault()
  }
  function deleteNote(id){
    setNotes(notes=> { return notes.filter((item, index) =>{ return index !== id})})
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} onChange={handleChange} />
      <div>
      <ul>
      {
        notes.map((note, index) => {
        return <Note key={index} id={index} title={note.title} content={note.notes} onClick={deleteNote}/>;
      })}
      </ul>
      </div>
      <Footer />
    </div>
  );
}

export default App;
