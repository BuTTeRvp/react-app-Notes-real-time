import React, { useEffect, useState } from "react";
import { database } from "../firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";

export default function EditNotes() {
  const [note, setNote] = useState("");
  const [id, setID] = useState("");

  function HandelSubmit(e) {
    const noteRef = doc(database, "Notes", id);
    updateDoc(noteRef, { note }).then((response) => {
      console
        .log(response) // promise type = VOID
        .catch((error) => {
          console.log(error.message);
        });
    });
  }

  return <div></div>;
}
