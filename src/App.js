import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      Start new Reminder
      <Link to="/createReminder">Create Reminder</Link>

    </div>
  );
}

export default App;
