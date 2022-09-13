import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Viewproduct.css';
import logo from '../../Images/mainlogo.png';
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

export default function Viewproduct() {

    const id = useParams();
    console.log(id.id);

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
    console.log(filterProducts)

    useEffect(() => {
        getProducts();
    }, [])

    return (
        <div>
            <Navbar />

            <div className="product-area">

                <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {
                            filterProducts.map((item) => {
                                return (
                                    <div className="carousel-item active" data-bs-interval="10000">
                                        <img src={item.img1} className="d-block w-100" alt="..." />
                                    </div>

                                )
                            })
                        }
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                <div className="product-content-area">
                    {
                        filterProducts.map((item) => {
                            return (
                                <>
                                    <h4>{item.name}</h4>
                                    <p>₹ {item.sellingprice}  <s>₹ {item.sellingprice}</s></p>
                                    <p className='free-delivery'>Free Delivery</p>
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

            </div>

            <Footer />
        </div>
    )
}
