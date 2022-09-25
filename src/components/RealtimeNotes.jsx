import React, { useEffect, useState } from "react";
import { onSnapshot, snapshotEqual } from "firebase/firestore";
import { notescollectionRef } from "../firebaseConfig";
import Note from "./note";

export default function RealTimeNotes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(notescollectionRef, (snapshot) => {
      setNotes(snapshot.docs.map((item) => ({ ...item.data(), id: item.id })));
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      {notes.map((note) => (
        <Note text={note.noteContent} key={note.id} id={note.id} />
      ))}
    </div>
  );
}
