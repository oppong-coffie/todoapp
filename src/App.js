import './App.css';
import Todolist from './components/Todolist';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Update from './components/Update';
import Delete from './components/Delete';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path='/' exact element={<Todolist />} />
        <Route path='/delete/:edit_id' element={<Delete />} />
        <Route path='/update/:del_id' element={<Update />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
