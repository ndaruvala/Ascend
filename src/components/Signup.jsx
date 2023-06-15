import React, { useState } from "react";
import AscendImg from "../images/ascend.jpg";
import { Link } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitInfo = async (x) => {
    x.preventDefault();
    console.log(`Sign up with email:${email}, and password:${password}`);
    const personData = {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
    };
    try {
      const response = await axios.post(
        "http://localhost:8080/api/users/signup",
        personData
      );
      console.log(`Found data:${response.data}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${AscendImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="flex items-center justify-center h-screen w-screen text-white"
    >
      <div className="flex flex-col justify-center bg-gray-400 w-[330px] h-[450px] px-5 py-5 rounded-md">
        <h1 className="text-xl text-center font-bold">Sign Up</h1>
        <form className="flex flex-col items-center">
          <label className="w-full mt-2">First Name:</label>
          <input
            className="w-full text-black p-1 rounded-md"
            type="text"
            value={firstName}
            onChange={(x) => setFirstName(x.target.value)}
          />
          <label className="w-full mt-2">Last Name:</label>
          <input
            className="w-full text-black p-1 rounded-md"
            type="text"
            value={lastName}
            onChange={(x) => setLastName(x.target.value)}
          />
          <label className="w-full mt-2">Email:</label>
          <input
            className="w-full text-black p-1 rounded-md"
            type="text"
            value={email}
            onChange={(x) => setEmail(x.target.value)}
          />
          <label className="w-full mt-2">Password:</label>
          <input
            className="w-full text-black p-1 rounded-md"
            type="password"
            value={password}
            onChange={(x) => setPassword(x.target.value)}
          />
          <button
            type="Submit"
            className="mt-7 mb-3 border border-black-150 p-2 w-[80%] hover:border-blue-600 hover:scale-103 hover:bg-blue-600 hover:text-white duration-300"
            onClick={submitInfo}
          >
            Sign Up
          </button>
          <p>Already have an account?</p>
          <Link to="/" className="text-blue-500">
            Log in here!
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
