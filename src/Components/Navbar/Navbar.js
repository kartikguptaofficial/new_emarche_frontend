import React, { useEffect, useState } from 'react'
import './Navbar.css';
import logo from '../../Images/logo1.png';
import loginBg from '../../Images/login-bg.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import cartLogo from '../../Images/cart.png';

export default function Navbar() {

  const [userID, setUserID] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [username, setUsername] = useState("");
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [cartLen, setCartLen] = useState(0);

  let cartLength = 0;
  
  async function getUser() {
    const token = localStorage.getItem("token");
    const res = await fetch("https://emarche-backend.herokuapp.com/home", {
      method: "GET",
      headers: {
        'Authorization': token
      }
    })

    const data = await res.json();
    // console.log(data.user)
    if (data.user) {
      setUserID(data.user._id);
      setLogin(true);
      setUsername(data.user.name);
      setUserEmail(data.user.email);
      setUserPhone(data.user.phone);
      setUserPassword(data.user.password);
      // console.log(data.user.cart.length)
      setCartLen(data.user.cart.length)
    }
    if (data.user.admin === true) {
      setAdmin(true)
    }
  }


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

  function logoutBtn() {
    let logoutConfirm = window.confirm("Are you sure you want to logout?");
    if(logoutConfirm){
      localStorage.removeItem('token');
      window.location.href = '/';
    }
  }

  useEffect(() => {
    getUser()

  }, [])

  let respNavbar = document.querySelector(".resp-nav");
  function navMenuBtn() {
    if(respNavbar.style.display === "none"){
      respNavbar.style.display = "block";
    } else{
      respNavbar.style.display = "none"
    }
  }

  let signupDetails = true;
  function loginSignupHandler(){
    if(signupDetails) {
      signupDetails = false;
    } else{
      signupDetails = true;
    }
  }

 
  return (
    <div>
      <nav>

        {
          login ?
          <a href="" type="button" className='profile-btn profile-menu' data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
            <i class="fa-solid fa-bars"></i>
          </a> : ""
        }

        <div className="mainlogo" style={login && window.innerWidth >= "420px" ? {marginLeft: "-7rem"} : {}}>
          <img src={logo} alt="" className='logoImg' />
          <div className='logoContent'>
            <h1>E Marché</h1>
            <p>ONLINE STORE</p>
          </div>
        </div>

        <div className="nav-elements">
        <i className="fa-solid fa-bars" onClick={navMenuBtn}></i>
          <ul>
            <li><a href="/">HOME</a></li>
            <li><a href="/about">ABOUT</a></li>
            <li><a href="/contact">CONTACT</a></li>
            {
              admin && login ? 
                <li>
                  <a href="/admin/add-product" type='button'>ADMIN</a>
                </li>:
                ''
            }
            {
              login ? <>
                <li>
                  <a href="" onClick={logoutBtn} type='button'>LOGOUT</a>
                </li>
                <li>
                {/* <a href='' type="button" className='profile-btn' data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">PROFILE</a> */}
                </li>
                <li>
                  <a href={`/cart/${userID}`}><img src={cartLogo} className="cartImg" alt="" /><span>({cartLen})</span></a>
                </li>
                </>:
                <li>
                    <a href='/login'>LOGIN</a>
                </li> 
            }
            


          {/* <!-- Modal --> */}
          <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
              <img src={loginBg} alt="" />
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Login | E Marché</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                    <form action="/login" method='POST' onSubmit={submitHandler}>
                      <div className="modal-body">
                          <label htmlFor="email">Email Address</label>
                          <input type="email" name='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder=" Enter your email" />
                          <label htmlFor="password">Password</label>
                          <input type="password" name='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder=" Enter your password" />
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" className='btn btn-danger'>Login</button>
                      </div>
                      <a href='/signup'>New user ? Signup</a>
                    </form>
              </div>
            </div>
          </div>

          </ul>
        </div>

            
            <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Hello, {username} {admin ? '(Admin)' : ''}</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                {/* <h5>Profile Details</h5>
                <ul>
                  <li>Name: {username}</li>
                  <li>Email: {userEmail}</li>
                  <li>Phone: {userPhone}</li>
                  <li>Password: {userPassword}</li>
                </ul> */}
                <ul>
                  <a href={`/profile/${userID}`}><li>PROFILE</li></a>
                  <a href={`/orders/${userID}`}><li>YOUR ORDERS</li></a>
                </ul>
              </div>
            </div>

      </nav>
      <div className="resp-nav">
        <ul>
            <li><a href="/">HOME</a></li>
            <li><a href="/about">ABOUT</a></li>
            <li><a href="/contact">CONTACT</a></li>
            
            {
              admin && login ? 
                <li>
                  <a href="/admin/add-product" type='button'>ADMIN</a>
                </li>:
                ''
            }
            {
              login ? <>
                <li>
                  <a href="" onClick={logoutBtn} type='button'>LOGOUT</a>
                </li>
                <li>
                  <a href={`/cart/${userID}`}><img src={cartLogo} className="cartImg" alt="" /><span>({cartLen})</span></a>
                </li>
                <li>
                  <a href='' type="button" className='profile-btn' data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">More options...</a>
                </li>
                </>:
                <li>
                    <a href='/login' type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">LOGIN</a>
                </li> 
            }

        </ul>
      </div>

      <ToastContainer />
    </div>
  )
}
