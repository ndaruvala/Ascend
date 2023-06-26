import React from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Account } from "./Account";
import { Route, Routes } from "react-router-dom";
import Status from "./Status";

function App() {
  return (
    <Account>
      <Status />?
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Account>
  );
}

export default App;
