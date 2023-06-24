import React, {useState} from "react";
import AscendImg from "../images/ascend.jpg";
import {Link} from "react-router-dom";
import UserPool from "../UserPool";
import {CognitoUserAttribute} from "amazon-cognito-identity-js";
import axios from "axios";

function Signup() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [birthday, setBirthday] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const submitInfo = async (event) => {
        event.preventDefault();
        const firstNameAttr = new CognitoUserAttribute({Name: 'given_name', Value: firstName});
        const lastNameAttr = new CognitoUserAttribute({Name: 'family_name', Value: lastName});
        const birthdayAttr = new CognitoUserAttribute({Name: 'birthdate', Value: birthday});
        const phoneNumberAttr = new CognitoUserAttribute({Name: 'phone_number', Value: phoneNumber})
        const fullUserData = {firstNameAttr, lastNameAttr, birthdayAttr, phoneNumberAttr};

        UserPool.signUp(email, password, [firstNameAttr, lastNameAttr, birthdayAttr, phoneNumberAttr], null, (err, data) => {
            if (err) {
                console.error(err);
                return;
            }
            try {
                const response = axios.post(
                    "http://localhost:8080/api/users/signup", fullUserData);
                console.log(`Sent user data:,${response}`);
            } catch (e) {
                console.error(e);
            }
        })
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
            <div className="flex flex-col justify-center bg-gray-400 w-[23rem] h-[38rem] px-5 py-5 rounded-md">
                <h1 className="text-xl text-center font-bold">Sign Up</h1>
                <form className="flex flex-col items-center">
                    <label className="w-full mt-2">First Name:</label>
                    <input
                        className="w-full text-black p-1 rounded-md"
                        type="text"
                        value={firstName}
                        onChange={(event) => setFirstName(event.target.value)}
                    />
                    <label className="w-full mt-2">Last Name:</label>
                    <input
                        className="w-full text-black p-1 rounded-md"
                        type="text"
                        value={lastName}
                        onChange={(event) => setLastName(event.target.value)}
                    />
                    <label className="w-full mt-2">Email:</label>
                    <input
                        className="w-full text-black p-1 rounded-md"
                        type="text"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <label className="w-full mt-2">Birthday:</label>
                    <input
                        className="w-full text-black p-1 rounded-md"
                        type="date"
                        value={birthday}
                        onChange={(event) => setBirthday(event.target.value)}
                    />
                    <label className="w-full mt-2">Phone Number:</label>
                    <input
                        className="w-full text-black p-1 rounded-md"
                        type="number"
                        value={phoneNumber}
                        onChange={(event) => setPhoneNumber(event.target.value)}
                    />
                    <label className="w-full mt-2">Password:</label>
                    <input
                        className="w-full text-black p-1 rounded-md"
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <button
                        type="Submit"
                        className="mt-7 mb-3 border border-black-150 p-2 w-[80%] hover:border-blue-600 hover:scale-103 hover:bg-blue-600 hover:text-white duration-300"
                        onClick={submitInfo}
                    >
                        Sign Up
                    </button>
                    <p>Already have an account?</p>
                    <Link to="/" className="text-blue-500 underline">
                        Log in here!
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default Signup;
