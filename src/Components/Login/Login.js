import React, { useState } from 'react'
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

async function submitHandler(e) {
  e.preventDefault();

  const post = await fetch("https://emarche-backend.herokuapp.com/login", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })

  const data = await post.json()
  // console.log(data)
  if (data.msg === "Invalid Password") {
    toast.error("Invalid Credentials")
  }
  else if (data.msg === "Not registered") {
    toast.error("You are not registered! Signup first")
  }
  else {
    toast.success("Login success");
    // window.alert("Login success");
    localStorage.setItem("token", data.token);
    window.location.href = '/';
  }
}


  return (
    <div>
      <Navbar />

        <div className="signup-page">
            <h3>Login | E Marché</h3>
            <form action="" method="post" onSubmit={submitHandler}>
                <label htmlFor="email">Email Address</label>
                <input type="email" id='email' name='email' placeholder='Enter your email' required value={email} onChange={(e) => setEmail(e.target.value)}/>
                <label htmlFor="password">Password</label>
                <input type="password" id='password' name='password' placeholder='Enter your password' required value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type='submit' className='btn btn-danger'>Submit</button>
            </form>
            <a href="/signup">New user ? Signup</a>
        </div>

      <Footer />
      <ToastContainer />
    </div>
  )
}
