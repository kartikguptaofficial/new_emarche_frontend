import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import './Profile.css'

export default function Profile() {

    let userId = useParams();

    const [user, setUser] = useState([]);

    const fetchUser = async () => {
        const res = await fetch(`https://emarche-backend.herokuapp.com/getusers`);
        const data = await res.json();
        console.log(data)
        setUser(data)
    }

    useEffect(() => {
        fetchUser();
    }, [])

    let currUser = user.filter((item) => {
        return item._id === userId.id;
    })

    console.log(currUser);

  return (
    <div>
        <Navbar />

            <div className="profile-page">
                    {
                        currUser.map((item) => {
                            return (
                                <>
                                    <div className="user-greeting">
                                        <i class="fa-solid fa-user"></i>
                                        <h5>Hi, {item.name}</h5>
                                    </div>
                                    <div className="user-details">
                                        <ul>
                                            <li>Name: {item.name}</li>
                                            <li>Email: {item.email}</li>
                                            <li>Mobile: {item.phone}</li>
                                            <li>Password: {item.password}</li>
                                        </ul>
                                    </div>
                                </>
                            )
                        })
                    }
            </div>

        <Footer />
    </div>
  )
}
