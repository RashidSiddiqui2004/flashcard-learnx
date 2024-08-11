
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Editcard from './pages/Editcard';
import Admin from './pages/Admin';
import CreateCard from './pages/CreateCard';
import Homepage from './pages/Homepage';

function App() {
  return (

    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/newset" element={<CreateCard />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/edit-card/:id" element={<Editcard />} />
    </Routes >

  );
}

export default App; 
