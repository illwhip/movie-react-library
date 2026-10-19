import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Moives from './pages/Movies';

function App() {
  return (
    <Router>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pages/Movies' element={<Moives />} />
      </Routes>
    </Router>
  );
}

export default App;
