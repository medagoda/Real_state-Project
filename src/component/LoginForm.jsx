import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import axios from 'axios';
import React, { useState } from 'react';

import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';

const CLIENT_ID = '420357215045-lv1bthhqc52i6j1mrv80e2pu330o3q1t.apps.googleusercontent.com';

const LoginForm = ({ switchToSignup }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function login(event){
      event.preventDefault();
      try{
        await axios.post("http://localhost:9090/api/v1/users/login", {
          userName: userName,
          password: password,
        }).then((res) => {
          console.log(res.data);

          if(res.data.message = "Email not exist"){
            alert("Email not exists");
          }
          else if(res.data.message = "Login Success"){
            navigate('/NavBar');
          }
          else{
            alert("Email and password does not match");
          }
        }, fail => {

        console.error(fail);

        });
      }

      catch(err){
        alert(err);
      }
    }

    const handleGoogleLoginSuccess = (response) => {
      console.log('Login Success:', response);
      axios.post("http://localhost:9090/api/v1/auth/google", {
        token: response.credential
      }).then((res) => {
        console.log('Backend response:', res.data);
        navigate('/NavBar');
      }).catch((error) => {
        console.error('Error during backend call:', error);
        alert('Google login failed');
      });
    };

    const handleGoogleLoginError = () => {
      console.log('Login Failed');
      alert('Google login failed');
    };


    return (
      <GoogleOAuthProvider clientId={CLIENT_ID}>
      <div className='bg-gradient-to-t from-slate-600 to-slate-300 p-7'>
        
      <h2 className="text-2xl text-center font-semibold mb-4">Login</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input type="email" value={email} onChange={(event) => {setEmail(event.target.value)}} className="w-full p-2 border rounded mt-3 bg-[#eaedec]" placeholder='Enter Your Email'/>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input type="password" value={password} onChange={(event) => {setPassword(event.target.value)}} className="w-full p-2 border rounded text-gray-700 mt-3 bg-[#eaedec]" placeholder='Enter Your Password'/>
        </div>
        <button type="submit" onClick={login} className="bg-gradient-to-r from-[#0ca39a] to-teal-100 text-gray-600 hover:scale-105 px-4 py-2 mt-4 mx-auto rounded-full w-full">
          Login
        </button>

        <div className="mt-5 rounded-full">
        <GoogleLogin  onSuccess={handleGoogleLoginSuccess} onError={handleGoogleLoginError}/>
        </div>
      
        

      </form>
      <p className="mt-4 text-white">
        Don't have an account?{' '}
        <button onClick={switchToSignup} className="text-[#5db0aa] hover:underline mx-1">
          Sign up
        </button>
      </p>
    
    </div>
    </GoogleOAuthProvider>
    );
};

export default LoginForm;