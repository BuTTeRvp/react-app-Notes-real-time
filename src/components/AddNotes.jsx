import React, { useState } from "react";
import { notescollectionRef } from "../firebaseConfig";
import { addDoc } from "firebase/firestore";

export default function AddNotes() {
  const [note, setNote] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (note === "") {
      return;
    }
    addDoc(notescollectionRef, {
      noteContent: note
    })
      .then((response) => console.log(response.id))
      .catch((error) => console.log(error.message));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="note">New note</label>
        <input
          id="note"
          type={"text"}
          // placeholder={"new note!"}
          onChange={(e) => setNote(e.target.value)}
          value={note}
          required
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
