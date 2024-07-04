import axios from 'axios';
import React, { useState } from 'react';
import { Await } from 'react-router-dom';

const SignupForm = ({ switchToLogin }) => {

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    async function save(event){
      event.preventDefault();
      try{
        await axios.post("http://localhost:9090/api/v1/users/login", {
           userName: userName,
           email: email,
           password: password,
           confirmPassword: confirmPassword,
        });
        alert("Student Registration Successfully");
    }
    catch (err){
        alert(err);
    }
  }
   

    return (
        <div className='bg-gradient-to-t from-slate-600 to-slate-300 p-7'>
      <h2 className="text-2xl font-semibold mb-4 text-center">Sign Up</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input type="text" className="w-full p-2 border rounded  bg-[#eaedec]" placeholder='John Doe' value={userName} onChange={(event) => {setUserName(event.target.value)}}/>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input type="email" className="w-full p-2 border rounded  bg-[#eaedec]" placeholder='johndoe@gmail.com' value={email} onChange={(event) => {setEmail(event.target.value)}}/>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input type="password" className="w-full p-2 border rounded  bg-[#eaedec]" value={password} onChange={(event) => {setPassword(event.target.value)}}/>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Confirm Password</label>
          <input type="password" className="w-full p-2 border rounded  bg-[#eaedec]" value={confirmPassword} onChange={(event) => {setConfirmPassword(event.target.value)}}/>
        </div>
        <button type="submit" onClick={save} className="bg-gradient-to-r from-[#0ca39a] to-teal-100 text-gray-600 px-5 py-3 hover:scale-105 mx-auto rounded-full w-full">
          Sign Up
        </button>
      </form>
      <p className="mt-4 text-white">
        Already have an account?{' '}
        <button onClick={switchToLogin} className="text-[#5db0aa] hover:underline mx-1">
          Login
        </button>
      </p>
    </div>
    );
};

export default SignupForm;