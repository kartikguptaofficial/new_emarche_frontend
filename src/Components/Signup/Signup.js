import React, { useState } from 'react'
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './Signup.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Signup() {

    
const [name, setName] = useState("");
const [phone, setPhone] = useState();
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

    async function submitHandler(e) {
        e.preventDefault();

        const post = await fetch("https://emarche-backend.herokuapp.com/signup", {
            method: "POST",
            headers: {
              'Content-Type': "application/json"
            },
            body: JSON.stringify({
              name, phone, email, password
            })
        }) 

        if(post) {
          const data = await post.json()
          // console.log(data)
          if(data.msg === "You are already registered"){
            toast.warn("This email is already registered. You can login")
          }
          else{
            toast.success("Account created... ");
            window.location.href = '/login';
          }
        }
    }

  return (
    <div>
      <Navbar />

        <div className="signup-page">
            <h3>Signup | E Marché</h3>
            <form action="" method="post" onSubmit={submitHandler}>
                <label htmlFor="name">Full Name</label>
                <input type="text" id='name' name='name' placeholder='Enter your name' required value={name} onChange={(e) => setName(e.target.value)}/>
                <label htmlFor="phone">Mobile No</label>
                <input type="number" id='phone' name='phone' placeholder='Enter your mobile number' required value={phone} onChange={(e) => setPhone(e.target.value)}/>
                <label htmlFor="email">Email Address</label>
                <input type="email" id='email' name='email' placeholder='Enter your email' required value={email} onChange={(e) => setEmail(e.target.value)}/>
                <label htmlFor="password">Password</label>
                <input type="password" id='password' name='password' placeholder='Enter your password' required value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type='submit' className='btn btn-danger'>Submit</button>
            </form>
            <a href="/login">Already signed in ? Login</a>
        </div>

      <Footer />
      <ToastContainer />
    </div>
  )
}
