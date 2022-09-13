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

    // let filterProducts;
    // if (category.category) {
    //     filterProducts = products.filter((item) => {
    //         return item.category == category.category;
    //     })
    // }
    // if(category.filter){
    //     return item.gender == category.filter;
    // }
    // if(category.filter === "male"){
    //     filterProducts = filterProducts.filter((item) => {
    //         return item.gender == 'male';
    //     })
    // }
    // console.log(filterProducts)

    

    useEffect(() => {
        getProducts();
    }, [])

    return (
        <div>
            <Navbar />

                <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Enable body scrolling</button>

                <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Offcanvas with body scrolling</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <p>Try scrolling the rest of the page to see this option in action.</p>
                        <p>Hello guys</p>
                    </div>
                </div>
                <div className="whole-page">
                <div className="sidebar">
                    <h6>FILTERS</h6>

                    <ul className='gender-filter filter-list'>
                        <h6>Gender</h6>
                        <li><a href={`/allproducts/${category.category}/male/${category.filter}`}>Male</a></li>
                        <li><a href={`/allproducts/${category.category}/female/${category.filter}`}>Female</a></li>
                    </ul>

                    <ul className='sort-filter filter-list'>
                        <h6>Sort-By</h6>
                        {/* <li><input type="checkbox" name="" id="lowToHigh" /><span>Price- Low to High</span></li> */}
                        <li><a href={`/allproducts/${category.category}/${category.gender}/lowtohigh`}>Price - Low to High</a></li>
                        <li><a href={`/allproducts/${category.category}/${category.gender}/hightolow`}>Price- High to Low</a></li>
                    </ul>

                    <ul className='price-filter filter-list'>
                        <h6>Price</h6>
                        <li><input type="checkbox" name="" id="" /><span>under 500</span></li>
                        <li><input type="checkbox" name="" id="" /><span>500-1000</span></li>
                        <li><input type="checkbox" name="" id="" /><span>1000-2000</span></li>
                        <li><input type="checkbox" name="" id="" /><span>2000 & above</span></li>
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
