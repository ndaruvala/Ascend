import React from 'react';
import Login from './components/Login'
import Title from './components/Title'
import Signup from './components/Signup'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Login />} />
    </Routes>
  );
}

export default App;



