import React, { useEffect, useState } from "react";
import './MainProducts.css';
import Hero from '../../Components/Hero/Hero';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from "../Footer/Footer";

import { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";


export default function MainProducts() {

    const [newArrivals, setNewArrivals] = useState([]);
    const [screenWidth, setScreenWidth] = useState(7);

    async function newProduct() {
        const res = await fetch("data.json");
        const data = await res.json();
        // console.log(data.data);
        setNewArrivals(data.data)
    }

    let noOfSlides = 7;
    if(window.innerWidth <= 420){
        noOfSlides = 3;
    }
    
    useEffect(() => {
        newProduct();
        document.title = "Home | E Marché";
    }, [])

    const clothingProducts = newArrivals.filter((item) => {
        return item.category == "clothing";
    })

    const footwearProducts = newArrivals.filter((item) => {
        return item.category == "footwear";
    })

    const allWatches = newArrivals.filter((item) => {
        return item.category == "watches";
    })

    const mobileAcc = newArrivals.filter((item) => {
        return item.category == "mobile accessories";
    })

    const mensClothing = clothingProducts.filter((item) => {
        return item.gender === "male";
    })
    
    const womensClothing = clothingProducts.filter((item) => {
        return item.gender === "female";
    })

    const kidsClothing = clothingProducts.filter((item) => {
        return item.gender === "kids";
    })
    
    const menShoes = footwearProducts.filter((item) => {
        return item.gender == "male";
    })

    const womenShoes = footwearProducts.filter((item) => {
        return item.gender == "female";
    })


    return (
        <div>
            <Navbar />
            <Hero />

            <div className="men-products product-div">
                <div className="product-div-heading">
                    <h2>Men's Clothing</h2>
                    <a href="/allproducts/clothing/male/all">Explore more</a>
                </div>
                <div className="display-products">
                <Swiper
                    slidesPerView={noOfSlides}
                    spaceBetween={30}
                    slidesPerGroup={3}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        mensClothing.map((item) => {
                            return(
                                    <SwiperSlide>
                                        <div className="category-product-card">
                                            <img src={item.img1} alt="" />
                                            <h6>{item.name}</h6>
                                            <p>₹    {item.sellingprice}</p>
                                            <div className="card-buttons">
                                                <a href={`/product/${item._id}`}><i class="fa-solid fa-eye"></i>View Product</a>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                    }
                </Swiper>

                </div>
            </div>
            <div className="men-products product-div">
                <div className="product-div-heading">
                    <h2>Women's Clothing</h2>
                    <a href="/allproducts/clothing/female/all">Explore more</a>
                </div>
                <div className="display-products">
                <Swiper
                    slidesPerView={noOfSlides}
                    spaceBetween={30}
                    slidesPerGroup={3}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        womensClothing.map((item) => {
                            return(
                                    <SwiperSlide>
                                        <div className="category-product-card">
                                            <img src={item.img1} alt="" />
                                            <h6>{item.name}</h6>
                                            <p>₹ {item.sellingprice}</p>
                                            <div className="card-buttons">
                                                <a href={`/product/${item._id}`}><i class="fa-solid fa-eye"></i>View Product</a>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                    }
                </Swiper>
                </div>
            </div>
            <div className="men-products product-div">
                <div className="product-div-heading">
                    <h2>Footwear</h2>
                    <a href="/allproducts/footwear/both/all">Explore more</a>
                </div>
                <div className="display-products">
                    <Swiper
                        slidesPerView={noOfSlides}
                        spaceBetween={30}
                        slidesPerGroup={3}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {
                            footwearProducts.map((item) => {
                                return(
                                        <SwiperSlide>
                                            <div className="category-product-card">
                                                <img src={item.img1} alt="" />
                                                <h6>{item.name}</h6>
                                                <p>₹ {item.sellingprice}</p>
                                                <div className="card-buttons">
                                                    <a href={`/product/${item._id}`}><i class="fa-solid fa-eye"></i>View Product</a>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })
                        }
                    </Swiper>
                </div>
            </div>
            <div className="men-products product-div">
                <div className="product-div-heading">
                    <h2>Watches</h2>
                    <a href="/allproducts/watches/both/all">Explore more</a>
                </div>
                <div className="display-products">
                <Swiper
                    slidesPerView={noOfSlides}
                    spaceBetween={30}
                    slidesPerGroup={3}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        allWatches.map((item) => {
                            return(
                                    <SwiperSlide>
                                        <div className="category-product-card">
                                            <img src={item.img1} alt="" />
                                            <h6>{item.name}</h6>
                                            <p>₹ {item.sellingprice}</p>
                                            <div className="card-buttons">
                                                <a href={`/product/${item._id}`}><i class="fa-solid fa-eye"></i>View Product</a>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                    }
                </Swiper>
                </div>
            </div>
            <div className="men-products product-div">
                <div className="product-div-heading">
                    <h2>Mobile Accessories</h2>
                    <a href="/allproducts/watches/both/all">Explore more</a>
                </div>
                <div className="display-products">
                <Swiper
                    slidesPerView={noOfSlides}
                    spaceBetween={30}
                    slidesPerGroup={3}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        mobileAcc.map((item) => {
                            return(
                                    <SwiperSlide>
                                        <div className="category-product-card">
                                            <img src={item.img1} alt="" />
                                            <h6>{item.name}</h6>
                                            <p>₹ {item.sellingprice}</p>
                                            <div className="card-buttons">
                                                <a href={`/product/${item._id}`}><i class="fa-solid fa-eye"></i>View Product</a>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                    }
                </Swiper>
                </div>
            </div>


            <Footer />
        </div>
    )
}
