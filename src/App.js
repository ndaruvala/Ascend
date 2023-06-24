import React from 'react';
import Login from './components/Login'
import Signup from './components/Signup'
import {Route, Routes} from 'react-router-dom'

function App() {
    return (
        <Routes>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/" element={<Login/>}/>
        </Routes>
    );
}

export default App;



