import React, { useEffect } from 'react'
import './About.css'
import logo from '../../Images/logo1.jpg';
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

export default function About() {

    useEffect(() => {
        document.title = "About | E Marché"
    }, [])

  return (
    <div>
        <Navbar />

            <div className="about-brand">
                <img src={logo} alt="" />
                <div className="about-company-content">
                    <h2>E Marché</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusantium dolores, 
                        porro vel, provident explicabo id, beatae voluptatibus quae illum harum. Laborum, ratione!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus repellat deserunt sunt?
                    </p>
                </div>
            </div>

            <div className="about-founders">
                <h3>Founders</h3>
                <div className="founders">
                    {/* <h6>Nipurn Jain</h6> */}
                    <h6>Kartik Gupta</h6>
                </div>
            </div>

        <Footer />
    </div>
  )
}
