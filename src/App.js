import React from "react";
import Status from "./Status";
import Login from "./components/Login";
import { Account} from "./Account";
import { Route, Routes, Router} from "react-router";


function App() {
  return (
    <Account>
        <Routes>
          <Route path='/' element={<Status />} />
          <Route path='/login' element={<Login />} />
        </Routes>
    </Account>
  );
}

export default App;