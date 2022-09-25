import "./styles.css";
import AddNotes from "./components/AddNotes";
import RealTimeNotes from "./components/RealtimeNotes";

export default function App() {
  return (
    <div className="App">
      <RealTimeNotes />
      <AddNotes />
    </div>
  );
}
