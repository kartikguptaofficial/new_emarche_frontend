import React from 'react'
import './Footer.css';
import logo from '../../Images/logo1.jpg';

const Footer = () => {
  return (
    <div className='footer'>
      
        <section className="upper-footer">
            <div className='about-company'>
                <div className="brand-content">
                    <img src={logo} alt="" />
                    <div className="brand-name">
                        <h3>E Marché</h3>
                        <p>Online Store</p>
                    </div>
                </div>
                <div className="brand-details">
                    <p>We have something you can't refuse!</p>
                    <p>emarcheofficial@gmail.com</p>
                </div>
            </div>
            <div>
                <h2>Shopping & Categories</h2>
                <ul>
                    <li><a href="/allproducts/clothing/both/all">Apparel</a></li>
                    <li><a href="/allproducts/footwear/both/all">Footwear</a></li>
                    <li><a href="/allproducts/watches/both/all">Watches</a></li>
                    <li><a href="/allproducts/jewellery/both/all">Jewellery</a></li>
                    <li><a href="/allproducts/apparel-accessories/both/all">Apparel Accessories</a></li>
                    <li><a href="/allproducts/mobile-accessories/both/all">Mobile Accessories</a></li>
                </ul>
            </div>
            <div>
                <h2>Features</h2>
                <ul>
                    <li>Contact for order</li>
                    <li>All over India delivery</li>
                    <li>Online and COD* payments available</li>
                    <li>Easy return within 5 days</li>
                </ul>
            </div>
            <div>
                <h2>Useful Links</h2>
                <ul>
                    <li><a href="http://www.instagram.com/emarche_official" target="_blank">Instagram</a></li>
                    <li><a href="/">Facebook</a></li>
                    <li><a href="/contact">Gmail</a></li>
                </ul>
            </div>
        </section>
        <hr />
        <section className="lower-footer">
            <p>Copyright &copy; E Marche 2022 | All rights reserved</p>
            <p>Created By: Kartik Gupta & Team</p>
            <div className="social-icons">
                <a href="http://www.instagram.com/emarche_official"><i class="fa-brands fa-instagram"></i></a>
                <a href="/"><i class="fa-brands fa-facebook-f"></i></a>
                <a href="/contact"><i class="fa-solid fa-envelope"></i></a>
            </div>
        </section>

    </div>
  )
}

export default Footer
