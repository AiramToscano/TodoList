import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Main from './pages/Main';

function App() {
  return (
    <Routes>
      <Route path="/home" element={ <Home /> } />
      <Route path="/login" element={ <Main /> } />
      <Route path="/" element={ <Navigate replace to="/login" /> } />
    </Routes>
  );
}

export default App;
