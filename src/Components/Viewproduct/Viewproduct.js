import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Viewproduct.css';
import logo from '../../Images/mainlogo.png';
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import instaLogo from '../../Images/instagram.png'
import facebookLogo from '../../Images/facebook.png'
import gmailLogo from '../../Images/gmail.png'

import { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";


export default function Viewproduct() {

    const id = useParams();
    // console.log(id.id);

    const [products, setProducts] = useState([]);

    async function getProducts() {
        const res = await fetch("https://emarche-backend.herokuapp.com/products", {
            method: "GET"
        })
        const products = await res.json();
        if (products) {
            //   console.log(products.data)
            setProducts(products.data)
        }
    }

    let filterProducts;
    if (id.id) {
        filterProducts = products.filter((item) => {
            return item._id === id.id;
        })
    }
    

    useEffect(() => {
        getProducts();
    }, [])

    return (
        <div>
            <Navbar />

            <div className="product-area">

                <div className="image-area">
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
                        {
                            filterProducts.map((item) => {
                                return(
                                    <>
                                    <SwiperSlide><img src={item.img1} alt="" /></SwiperSlide>
                                    {
                                        item.img2 === "" ? '' :
                                        <SwiperSlide><img src={item.img2} alt="" /></SwiperSlide>
                                    }
                                    {
                                        item.img3 === "" ? '' :
                                        <SwiperSlide><img src={item.img3} alt="" /></SwiperSlide>
                                    }
                                    {
                                        item.img4 === "" ? '' :
                                        <SwiperSlide><img src={item.img4} alt="" /></SwiperSlide>
                                    }
                                    {
                                        item.img5 === "" ? '' :
                                        <SwiperSlide><img src={item.img5} alt="" /></SwiperSlide>
                                    }
                                    {
                                        item.img6 === "" ? '' :
                                        <SwiperSlide><img src={item.img6} alt="" /></SwiperSlide>
                                    }
                                    {
                                        item.img7 === "" ? '' :
                                        <SwiperSlide><img src={item.img7} alt="" /></SwiperSlide>
                                    }
                                    {
                                        item.img8 === "" ? '' :
                                        <SwiperSlide><img src={item.img8} alt="" /></SwiperSlide>
                                    }
                                    </>
                                )
                            })
                        }
                    </Swiper>
                </div>
                
                <div className="product-content-area">
                    {
                        filterProducts.map((item) => {
                            return (
                                <>
                                    <h4>{item.name}</h4>
                                    <p>₹ {item.sellingprice}  <s>₹ {item.mrp}</s></p>
                                    <p className='free-delivery'>Free Delivery</p>
                                    <a type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                        Buy Now
                                    </a>
                                    <h3>Product Details</h3>
                                    <p className='product-desc'>{item.description}</p>

                                    <h3>Sold By</h3>
                                    <div>
                                        <img src="" alt="" />
                                        <h6>E Marche</h6>
                                    </div>

                                    <div className="three-features-onproduct">
                                        <div className="featureOne-onproduct">
                                            <i class="fa-solid fa-tags"></i>
                                            <p>Lowest Price</p>
                                        </div>
                                        <hr />
                                        <div className="featureTwo-onproduct">
                                            <i class="fa-solid fa-sack-dollar"></i>
                                            <p>Cash on Delivery</p>
                                        </div>
                                        <div className="featureThree-onproduct">
                                            <i class="fa-solid fa-right-left"></i>
                                            <p>5-Day Return</p>
                                        </div>
                                    </div>

                                    <div className="trusted-line">
                                        <img src={logo} alt="" />
                                        <h6>Trusted</h6>
                                        <p>Best quality products from trusted suppliers</p>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>

                {/* <!-- Modal --> */}
                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Thanks for making interest in E Marche</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>Follow the below Instructions:-</p>
                        <ul>
                            <li>Copy this code <span style={{fontWeight: "500"}}>{id.id}</span></li>
                            <li>Send to any of the below options</li>
                            <li>Our team will text you for further details</li>
                        </ul>
                        {/* <h6>{filterProducts[0]._id}</h6> */}
                        <a href="https://www.instagram.com/emarche_official"><img src={instaLogo} alt="" />Instagram</a>
                        <a href=""><img src={facebookLogo} alt="" />Facebook</a>
                        <a><img src={gmailLogo} alt="" />emarcheofficial@gmail.com</a>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        {/* <button type="button" class="btn btn-primary">Understood</button> */}
                    </div>
                    </div>
                </div>
                </div>

            </div>

            <Footer />
        </div>
    )
}
