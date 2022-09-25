import { database } from "../firebaseConfig";
import "./note.css";
import { doc, deleteDoc } from "firebase/firestore";

function Note(props) {
  function deleteNote(id) {
    const noteRef = doc(database, "Notes", id);
    deleteDoc(noteRef)
      .then(() => console.log("document deleted"))
      .catch((error) => console.log(error.message));
  }
  return (
    <div className="note">
      <p className="note-p">{props.text}</p>
      <button onClick={() => deleteNote(props.id)}>❌</button>
    </div>
  );
}

export default Note;
