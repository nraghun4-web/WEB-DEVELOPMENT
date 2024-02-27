import React from "react";

export default function Note({ title, note, id, deleteNote }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{note}</p>
      <button onClick={()=>deleteNote(id)}>Delete Note</button>
    </div>
  );
}
