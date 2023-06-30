import React, { useState, useContext, useEffect } from "react";
import { AccountContext } from "./Account";
import {redirect} from "react-router-dom"
import Dashboard from "./components/Dashboard";
import Signup from "./components/Signup";

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
  }, []);

  return (
    status ? <Dashboard /> : <Signup />
  );
};

export default Status;
