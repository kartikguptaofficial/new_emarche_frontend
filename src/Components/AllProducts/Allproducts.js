import React, { useContext, useState, useEffect } from 'react'
import './Allproducts.css'
import Navbar from '../Navbar/Navbar'
import { Link, useParams } from 'react-router-dom'
import AllProductsData from '../../App'
import Footer from '../Footer/Footer'

export default function Allproducts() {

    const category = useParams();
    console.log(category.category);
    console.log(category.gender);
    console.log(category.filter);

    const [products, setProducts] = useState([]);
    // const [showProducts, setShowProducts] = useState("");

    async function getProducts() {
        const res = await fetch(`https://emarche-backend.herokuapp.com/allproducts/${category.category}/${category.gender}/${category.filter}`, {
            method: "GET"
        })
        const data = await res.json();
        if (data) {
              console.log(data)
            setProducts(data)
        }
    }


    useEffect(() => {
        getProducts();
    }, [])

    return (
        <div>
            <Navbar />

                <a type="button" className='filter-btn-resp' data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Add Filters</a>

                <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Add Filters</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                    <p>Showing results: {category.category}/{category.gender}</p>
                    <h6>FILTERS</h6>
                        {
                            category.category === "clothing" || category.category === "footwear" ?
                            <ul className='gender-filter filter-list'>
                                <h6>Gender</h6>
                                <li><a href={`/allproducts/${category.category}/male/${category.filter}`}>Male</a></li>
                                <li><a href={`/allproducts/${category.category}/female/${category.filter}`}>Female</a></li>
                                <li><a href={`/allproducts/${category.category}/both/${category.filter}`}>All</a></li>
                            </ul> : ''
                        }

                        <ul className='sort-filter filter-list'>
                            <h6>Sort-By</h6>
                            <li><a href={`/allproducts/${category.category}/${category.gender}/lowtohigh`}>Price - Low to High</a></li>
                            <li><a href={`/allproducts/${category.category}/${category.gender}/hightolow`}>Price- High to Low</a></li>
                        </ul>

                        <ul className='price-filter filter-list'>
                            <h6>Categories</h6>
                            <li><a href={`/allproducts/clothing/${category.gender}/all`}>Clothing</a></li>
                            <li><a href={`/allproducts/footwear/${category.gender}/all`}>Footwear</a></li>
                            <li><a href={`/allproducts/watches/both/all`}>Watches</a></li>
                            <li><a href={`/allproducts/jewellery/${category.gender}/all`}>Jewellery</a></li>
                            <li><a href={`/allproducts/apparel-accessories/${category.gender}/all`}>Apparel Accessories</a></li>
                            <li><a href={`/allproducts/electronics-accessories/both/all`}>Electronic Accessories</a></li>
                        </ul>

                    </div>
                </div>

                <div className="whole-page">
                <div className="sidebar">
                    <p>Showing results: {category.category}/{category.gender}</p>
                    <h6>FILTERS</h6>

                    {
                        category.category === "clothing" || category.category === "footwear" || category.category === "apparel-accessories" ?
                        <ul className='gender-filter filter-list'>
                            <h6>Gender</h6>
                            <li><a href={`/allproducts/${category.category}/male/${category.filter}`}>Male</a></li>
                            <li><a href={`/allproducts/${category.category}/female/${category.filter}`}>Female</a></li>
                            <li><a href={`/allproducts/${category.category}/both/${category.filter}`}>All</a></li>
                        </ul> : ''
                    }

                    <ul className='sort-filter filter-list'>
                        <h6>Sort-By</h6>
                        <li><a href={`/allproducts/${category.category}/${category.gender}/lowtohigh`}>Price - Low to High</a></li>
                        <li><a href={`/allproducts/${category.category}/${category.gender}/hightolow`}>Price- High to Low</a></li>
                    </ul>

                    <ul className='price-filter filter-list'>
                        <h6>Categories</h6>
                        <li><a href={`/allproducts/clothing/both/all`}>Clothing</a></li>
                        <li><a href={`/allproducts/footwear/both/all`}>Footwear</a></li>
                        <li><a href={`/allproducts/watches/both/all`}>Watches</a></li>
                        <li><a href={`/allproducts/jewellery/both/all`}>Jewellery</a></li>
                        <li><a href={`/allproducts/apparel-accessories/both/all`}>Apparel Accessories</a></li>
                        <li><a href={`/allproducts/mobile-accessories/both/all`}>Mobile Accessories</a></li>
                    </ul>

                </div>

                <div className="products-area">
                    {
                        products.map((item) => {
                            return (
                                <div className="product-card">
                                    <img src={item.img1} alt="" />
                                    <div className="card-content">
                                        <h5>{item.name}</h5>
                                        <h6><span>₹ {item.sellingprice}</span> <s>₹ {item.sellingprice}</s></h6>
                                        <hr />
                                        <div className="card-buttons">
                                            <a href={`/product/${item._id}`}><i class="fa-solid fa-eye"></i>View Product</a>
                                            <a href=""><i class="fa-solid fa-bag-shopping"></i>Buy now</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>


            <Footer />
        </div>
    )
}
