import React, { useEffect, useState } from "react";
import { getDocs } from "firebase/firestore";
import { notescollectionRef } from "../firebaseConfig";
import Note from "./note";
import "./listnotes.css";

export default function ListNotes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  useEffect(() => {
    console.log(notes);
  }, [notes]);

  function getNotes() {
    getDocs(notescollectionRef)
      .then((response) => {
        const data = response.docs.map((item) => ({
          ...item.data(),
          id: item.id
        }));
        setNotes(data);
      })
      .catch((error) => console.log(error.message));
  }

  return (
    <div>
      {notes.map((note) => (
        <Note text={note.noteContent} key={note.id} id={note.id} />
      ))}
    </div>
  );
}
