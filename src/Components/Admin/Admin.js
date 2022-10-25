import React, { useEffect, useState } from 'react'
import './Admin.css';
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import { Link, useParams } from 'react-router-dom';

export default function Admin() {

    // const [showPage, setShowPage] = useState();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [costprice, setcostPrice] = useState("");
    const [sellingprice, setSellingPrice] = useState("");
    const [mrp, setMrp] = useState("");
    const [category, setCategory] = useState("");
    const [gender, setGender] = useState("");
    const [img1, setImg1] = useState("");
    const [img2, setImg2] = useState("");
    const [img3, setImg3] = useState("");
    const [img4, setImg4] = useState("");
    const [img5, setImg5] = useState("");
    const [img6, setImg6] = useState("");
    const [img7, setImg7] = useState("");
    const [img8, setImg8] = useState("");
    const [linkToProduct, setLinkToProduct] = useState("");

    const show = useParams();
    // console.log(show.show);
    const showPage = show.show;
    // setShowPage(show.show)

    async function sendData(e) {
        e.preventDefault();

        const send = await fetch("https://emarche-backend.herokuapp.com/admin", {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({ name, description, costprice, sellingprice, mrp, category, gender, img1, img2, img3, img4,  img5, img6, img7, img8, linkToProduct })
        })
        if (send) {
            window.alert("Product is added successfully")
        }
    }

    const [totProd, setTotProd] = useState("");
    
    async function getData() {
        const res = await fetch("https://emarche-backend.herokuapp.com/products");
        const data = await res.json();
        setTotProd(data.data.length);
    }

    useEffect(() => {
        document.title = "Admin Panel | E Marché";
        getData();
    }, [])
        

    return (
        <div>
            <Navbar />

            <div className="whole-page">

                <div className="sidebar">
                    <h4>Admin Panel</h4>
                    <p>Welcome, Admin</p>
                    <hr />
                    <ul className='sidebar-list'>
                        <li><Link to="/admin/add-product">Add Products</Link></li>
                        <li><Link to="/admin/view-products">View Products</Link></li>
                        <li><Link to="/admin/sales-report">Sales Report</Link></li>
                        <li><Link to="/admin/pending-orders">Pending Orders</Link></li>
                    </ul>
                </div>
                <div className="admin-panel">
                    {
                        showPage === 'add-product' ?
                            <div className='add-product-page'>
                                <h3>Add Product</h3>
                                <form action="/admin" method='POST' onSubmit={sendData}>
                                    <label htmlFor="name">Name</label>
                                    <input type="text" required name='name' id='name' value={name} onChange={(e) => setName(e.target.value)} />
                                    <label htmlFor="description">Description</label>
                                    <textarea name="description" required id="description" cols="30" rows="2" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                                    <label htmlFor="costprice">Cost Price</label>
                                    <input type="number" required name='costprice' id='costprice' value={costprice} onChange={(e) => setcostPrice(e.target.value)} />
                                    {
                                        costprice <= 300 && costprice > 0 ? 
                                        <label htmlFor="sellingprice">Selling Price (Add Margin: {Math.ceil(costprice * 1/4)})</label>
                                        : ''
                                    }
                                    {
                                        costprice > 300 && costprice <= 800 ? 
                                        <label htmlFor="sellingprice">Selling Price (Add Margin: {Math.ceil(costprice * 15/100)})</label>
                                        : ''
                                    }
                                    {
                                        costprice > 800 ? 
                                        <label htmlFor="sellingprice">Selling Price (Add Margin: {Math.ceil(costprice * 1/10)})</label>
                                        : ''
                                    }
                                    <input type="number" required name='sellingprice' id='sellingprice' value={sellingprice} onChange={(e) => setSellingPrice(e.target.value)} />
                                    <label htmlFor="mrp">MRP</label>
                                    <input type="number" required name='mrp' id='mrp' value={mrp} onChange={(e) => setMrp(e.target.value)} />
                                    <label htmlFor="category">Category</label>
                                    <select name="category" required id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                                        <option value="">-Select-</option>
                                        <option value="clothing">Clothing</option>
                                        <option value="footwear">Footwear</option>
                                        <option value="watches">Watches</option>
                                        <option value="jewellery">Jewellery</option>
                                        <option value="apparel-accessories">Apparel Accessories</option>
                                        <option value="mobile-accessories">Mobile Accessories</option>
                                    </select>
                                    {
                                        category === "clothing" || category === "footwear" || category === "apparel-accessories" ?
                                        <>
                                            <label htmlFor="gender">Gender</label>
                                            <select name="gender" required id="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
                                                <option value="">-Select-</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                                <option value="unisex">Unisex</option>
                                            </select>   
                                        </> : ''
                                    }
                                    <label htmlFor="img1">Image 1 URL</label>
                                    <input type="text" name='img1' id='img1' required value={img1} onChange={(e) => setImg1(e.target.value)} />
                                    <label htmlFor="img2">Image 2 URL</label>
                                    <input type="text" name='img2' id='img2' value={img2} onChange={(e) => setImg2(e.target.value)} />
                                    <label htmlFor="img3">Image 3 URL</label>
                                    <input type="text" name='img3' id='img3' value={img3} onChange={(e) => setImg3(e.target.value)} />
                                    <label htmlFor="img4">Image 4 URL</label>
                                    <input type="text" name='img4' id='img4' value={img4} onChange={(e) => setImg4(e.target.value)} />
                                    <label htmlFor="img5">Image 5 URL</label>
                                    <input type="text" name='img5' id='img5' value={img5} onChange={(e) => setImg5(e.target.value)} />
                                    <label htmlFor="img6">Image 6 URL</label>
                                    <input type="text" name='img6' id='img6' value={img6} onChange={(e) => setImg6(e.target.value)} />
                                    <label htmlFor="img7">Image 7 URL</label>
                                    <input type="text" name='img7' id='img7' value={img7} onChange={(e) => setImg7(e.target.value)} />
                                    <label htmlFor="img8">Image 8 URL</label>
                                    <input type="text" name='img8' id='img8' value={img8} onChange={(e) => setImg8(e.target.value)} />
                                    <label htmlFor="linkToProduct">Link to Product</label>
                                    <input type="text" required name='linkToProduct' id='linkToProduct' value={linkToProduct} onChange={(e) => setLinkToProduct(e.target.value)} />
                                    <button type="submit" className='btn btn-danger'>Add Product</button>
                                </form>
                            </div> :
                            ''
                    }
                    {
                        showPage === "view-products" ?
                            <div className="view-products-page">
                                <h3>View Products</h3>
                            </div> :
                            ''
                    }
                    {
                        showPage === "sales-report" ?
                            <div className="sales-report-page">
                                <h3>Sales Report</h3>
                                <div className="sales-list">
                                    <div className="progress-circles">
                                        <div className='sales-circle'>
                                            <h6 className='total-sales'>1</h6>
                                            <h6>Total Sales</h6>
                                        </div>
                                        <div className='return-circle'>
                                            <h6 className='total-returns'>0</h6>
                                            <h6>Total Returns</h6>
                                        </div>
                                        <div className='products-circle'>
                                            <h6 className='total-products'>{totProd}</h6>
                                            <h6>Total Products</h6>
                                        </div>
                                    </div>
                                    <div className='sales-list-content'>
                                        <table class="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th scope="col">SNo.</th>
                                                    <th scope="col">Product ID</th>
                                                    <th scope="col">Customer Name</th>
                                                    <th scope='col'>Date of Order</th>
                                                    <th scope='col'>Delivery Date</th>
                                                    <th scope="col">Selling Price</th>
                                                    <th scope='col'>Cost Price</th>
                                                    <th scope='col'>Profit Earned</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>15412654348431254254</td>
                                                    <td>Kshitij Soni</td>
                                                    <td>10/06/2022</td>
                                                    <td>14/06/2022</td>
                                                    <td>300</td>
                                                    <td>224</td>
                                                    <td className='total-profit'>76</td>
                                                </tr>
                                                <tr>
                                                    <th>1</th>
                                                    <th>TOTAL</th>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <th>300</th>
                                                    <td></td>
                                                    <th>76</th>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div> :
                            ''
                    }
                    {
                        showPage === "pending-orders" ?
                            <div className="pending-orders-page">
                                <h3>Pending Orders</h3>
                            </div> :
                            ''
                    }
                </div>

            </div>

            <Footer />
        </div>
    )
}
