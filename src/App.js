import React from "react";
import Status from "./Status";
import Login from "./pages/Login";
import { Account } from "./Account";
import { Route, Routes } from "react-router";

function App() {
  return (
    <Account>
      <Routes>
        <Route path="/" element={<Status />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Account>
  );
}

export default App;
