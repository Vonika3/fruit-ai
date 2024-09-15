import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import FaqManager from './components/FaqManager'; // Import the FaqManager component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/faq-manager" element={<FaqManager />} /> {/* Add the route for FaqManager */}
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default App;
