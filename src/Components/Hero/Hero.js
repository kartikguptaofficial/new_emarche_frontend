import React from 'react'
import './Hero.css';
import leftImage from '../../Images/left-banner-image.jpg';
import topleftImg from '../../Images/baner-right-image-01.jpg';
import toprightImg from '../../Images/baner-right-image-02.jpg';
import bottomleftImg from '../../Images/baner-right-image-03.jpg';
import bottomrightImg from '../../Images/baner-right-image-04.jpg';

export default function Hero() {
  return (
    <div className='hero-section'>

        <div className="hero-img-section">
            <div className="left-img-div">
                <div className="left-img-div-content">
                    <h2>E Marché</h2>
                    <p>We have something you can't refuse!</p>
                </div>
                <img src={leftImage} alt="" className='leftImage' />
            </div>
            <div className="hero-right-images">
                <a href="/allproducts/clothing/female/all" className='right-img-href'>
                    <h6>Women</h6>
                    <img src={topleftImg} alt="" />
                </a>
                <a href="/allproducts/clothing/male/all" className='right-img-href'>
                    <h6>Men</h6>
                    <img src={toprightImg} alt="" />
                </a>
                <a href="" className='right-img-href'>
                    <h6>Kids</h6>
                    <img src={bottomleftImg} alt="" />
                </a>
                <a href="" className='right-img-href'>
                    <h6>Explore</h6>
                    <img src={bottomrightImg} alt="" />
                </a>
                
            </div>
        </div>

        <div className="site-features">
            <div className="feature-one">
                <i class="fa-solid fa-check"></i>
                <h6>Quality Products</h6>
            </div>
            <div className="feature-two">
                <i class="fa-solid fa-truck"></i>
                <h6>Free Shipping</h6>
            </div>
            <div className="feature-three">
                <i class="fa-solid fa-arrow-right-arrow-left"></i>
                <h6>5-Day Return</h6>
            </div>
            <div className="feature-four">
                <i class="fa-solid fa-phone-volume"></i>
                <h6>24/7 Support</h6>
            </div>
        </div>

    </div>
  )
}
