import React, { useState, useContext, useEffect } from "react";
import { AccountContext } from "./Account";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";

const Status = () => {
  const [status, setStatus] = useState(false);

  const { getSession } = useContext(AccountContext);

  useEffect(() => {
    getSession()
      .then((session) => {
        console.log("Session: ", session);
        setStatus(true);
      })
      .catch((err) => {
        console.error(err);
        setStatus(false);
      });
  });

  return status ? <Dashboard /> : <Signup />;
};

export default Status;
