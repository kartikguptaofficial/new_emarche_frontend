import React, { useEffect } from 'react'
import './Contact.css'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import instaLogo from '../../Images/instagram.png'
import facebookLogo from '../../Images/facebook.png'

export default function Contact() {

    useEffect(() => {
        document.title = "Contact | E Marché";
    }, [])

    return (
    <div>
        <Navbar />

            <div className='contact-page'>
                <h4>Contact Us | E Marche</h4>
                <div className="contact-social-media">
                    <a href="http://www.instagram.com/emarche_official" target="_blank" className="contact-on">
                        <img src={instaLogo} alt="" />
                        <p>@EMARCHE_OFFICIAL</p>
                    </a>
                    <a href='' className="contact-on">
                        <img src={facebookLogo} alt="" />
                        <p>Facebook</p>
                    </a>
                </div>
                <div className="contact-email">
                    <h4>Write us on email</h4>
                    <form action="https://formspree.io/f/mvoygnwy" method="POST">
                        <input type="email" name='email' required placeholder='Enter your email' />
                        <input type="text" name='subject' required placeholder='Enter your subject' />
                        <textarea name="message" required id="" cols="30" rows="5" placeholder='Enter your query'></textarea>
                        <button type='submit' className='btn btn-danger'>Submit</button>
                    </form>
                </div>
            </div>

        <Footer />
    </div>
  )
}
