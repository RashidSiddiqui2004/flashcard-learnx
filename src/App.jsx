
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Editcard from './pages/Editcard';
import CreateCard from './pages/CreateCard';
import Homepage from './pages/Homepage';
import Admin from './pages/admin';
import ManageCards from './components/ManageCards';

function App() {
  return (

    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/newset" element={<CreateCard />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/edit-card/:id" element={<Editcard />} />
      <Route path='/admin/manage-cards' element={<ManageCards />} />
    </Routes >

  );
}

export default App; 
