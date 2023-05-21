import React, { useState } from 'react';

function Login () {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const submitInfo = (x) => {
        console.log("Logging in with username:${username}, and password:${password}");
    };
    
    return (
        <div className='flex flex-col justify-center bg-gray-400 w-[300px] h-[300px] px-5 mx-auto mt-[30%]'>
            <h1 className='text-xl text-center text-white'>Log In</h1>
            <form onSubmit={submitInfo} className="flex flex-col items-center"> 
                <label className='w-full text-white my-2'>Username:</label>
                <input className='w-full' type="text" value={username} onChange={x => setUsername(x.target.value)} />

                <label className='w-full text-white my-2'>Password:</label>
                <input className='w-full' type="text" value={password} onChange={x => setPassword(x.target.value)} />

                <button type="Submit" className="mt-9 border border-black-150 bg-blue-150 text-white p-2 w-[80%] hover:text-blue-800 hover:border-blue-800 hover:scale-105 duration-300">Log In</button>
            </form>
        </div>
    )
}




export default Login;