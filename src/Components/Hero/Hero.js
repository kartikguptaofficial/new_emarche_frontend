import React from 'react'
import './Hero.css';
import leftImage from '../../Images/left-banner-image.webp';
import topleftImg from '../../Images/baner-right-image-01.webp';
import toprightImg from '../../Images/baner-right-image-02.webp';
import bottomleftImg from '../../Images/baner-right-image-03.webp';
import bottomrightImg from '../../Images/baner-right-image-04.webp';
import banner1 from '../../Images/banner1.webp';
import banner3 from '../../Images/banner3.webp';

import { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";


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
                <a href="/allproducts/apparel-accessories/both/all" className='right-img-href'>
                    <h6>Accessories</h6>
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

        <div className="main-banners">
            <Swiper
                spaceBetween={15}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img src={banner1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={banner3} alt="" /></SwiperSlide>
            </Swiper>
        </div>

    </div>
  )
}
