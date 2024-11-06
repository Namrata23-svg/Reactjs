import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chart from './Components/Chart';

function App() {
  return (
    <Router>
    <div>
    <Routes>
          <Route path="/" element={<Sidebar />} />
          <Route path="/chart" element={<Chart/>} />
    
        </Routes>
      </div>
    </Router>
  );
}

export default App;
