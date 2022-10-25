import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './Cart.css';

export default function Cart() {

    const [cart, setCart] = useState([]);
    const [address, setAddress] = useState("");
    const [checkoutPage, setCheckoutPage] = useState(false);
    const [totalAmtPayable, setTotalAmtPayable] = useState(0);

    const paramId = useParams();
    const userId = paramId.id;

    const cartItems = async () => {
        const res = await fetch(`https://emarche-backend.herokuapp.com/cartItems/${userId}`);
        // console.log(res);
        const data = await res.json();
        // console.log(data);
        setCart(data);
    }

    const clearCartFunc = async () => {
        const res = await fetch(`https://emarche-backend.herokuapp.com/clearCart/${userId}`);
        const data = await res.json();
        if (data === "cart cleared") {
            toast.success("Cart Cleared!");
            window.location.href = `/cart/${userId}`
        } else {
            toast.error("Cart is empty already")
        }
    }

    const delItemFromCart = async (productId) => {
        const res = await fetch(`https://emarche-backend.herokuapp.com/removeProduct/${productId}/${userId}`);
        const data = await res.json();
        if (data === "removed") {
            toast.success("Item removed from cart");
            window.location.href = `/cart/${userId}`
        } else {
            toast.error("Some error occured")
        }
    }

    const placeOrderFunc = async () => {
        const res = await fetch(`https://emarche-backend.herokuapp.com/placeOrder/${userId}`, {
            method: "POST",
            headers: {
              'Content-Type': "application/json"
            },
            body: JSON.stringify({ totalAmt: amtPayable , address: address})
        });
        const data = await res.json();
        if (data) {
            toast.success(`Your order has been placed successfully. Order ID: ${data}`, { delay: 10000, position: 'top-center' });
            toast.success('You will receive details on mail too. Thanks for ordering!', { delay: 10000, position: 'top-center' });
            await fetch(`https://emarche-backend.herokuapp.com/clearCart/${userId}`);
            window.location.href = `/orders/${userId}`
        } else {
            toast.error("Something went wrong")
        }
    }

    useEffect(() => {
        cartItems()
    }, [])

    let cartTotal = 0;
    for (let i = 0; i < cart.length; i++) {
        cartTotal += parseInt(cart[i].sellingprice);
    }
    let mrpTotal = 0;
    for (let i = 0; i < cart.length; i++) {
        mrpTotal += parseInt(cart[i].mrp);
    }
    let taxes = 0;
    let taxPercent;
    let taxLine;
    if (cartTotal <= 1999) {
        taxPercent = 1;
        taxes = cartTotal * 1 / 100;
        taxLine = "(Tax will be charged on orders below 2000)";
    } else {
        taxPercent = 0;
        taxes = 0;
        taxLine = "(You are eligible for 0 tax)"
    }

    let amtPayable = 0;
    amtPayable = Math.ceil(cartTotal + taxes);
    // setTotalAmtPayable(amtPayable)


    let btnDisabled = true;
    if (cart.length > 0) {
        btnDisabled = false;
    }
    // useEffect(() => {
    // console.log(cart.length)
    // })

    return (
        <div>
            <Navbar />

            {
                checkoutPage ?
                    <div className="checkout-page">
                        <h2>E Marche | Checkout</h2>
                        <h6>Ready to place order</h6>
                        <ul>
                            {
                                cart.map((item) => {
                                    return (
                                        <li>
                                            <div className='checkout-modal'>
                                                {item.name}
                                            </div>
                                        </li>
                                    )
                                })
                            }
                            <hr />
                        </ul>
                            <h6 className='amount-payable'>Amount Payable : <p className='amt-payable'>₹ {amtPayable}.00</p></h6>
                            <hr />
                            <form action="">
                                <input type="radio" name="" checked={true} id="cod-payment" />
                                <label htmlFor="cod-payment">Cash on delivery (COD)</label>
                                <small>Currently, we are accepting only COD payments</small>
                                <input className='address-input' name='address' required value={address} onChange={(e) => setAddress(e.target.value)} type="text" placeholder='Enter your full address'/>
                            </form>
                            <div className="checkout-actions">
                                <button className="btn btn-danger" onClick={() => setCheckoutPage(false)}>Go Back</button>
                                <button className="btn btn-success" onClick={placeOrderFunc}>Place Order</button>
                            </div>
                    </div>
                    :
                    <div className="cartPage">

                        <div className="cartItems">
                            <h4>Your Cart Items</h4>
                            <ul>
                                {
                                    cart.map((item) => {
                                        return (
                                            <li>
                                                <img src={item.img1} alt="" />
                                                <div className="cartItem-details">
                                                    <h6>{item.name}</h6>
                                                    <h6>₹ {item.sellingprice}   <s>₹ {item.mrp}</s></h6>
                                                </div>
                                                <div className="cartItem-actions">
                                                    <a href={`/product/${item._id}`} className={`btn btn-primary ${window.innerWidth <= "420" ? "btn-sm" : ""}`}>View</a>
                                                    <button className={`btn btn-danger ${window.innerWidth <= "420" ? "btn-sm" : ""}`} onClick={() => delItemFromCart(item._id)}>Delete</button>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className="cartTotals">
                            <h5>Subtotal</h5>
                            <hr />
                            <div className="cartTotals-calculations">
                                <h6>Quantity : <span>{cart.length} pcs.</span></h6>
                                <h6>Total(MRP) : <span>₹ {mrpTotal}</span></h6>
                                <hr />
                                <h6>Discount : <span>- ₹ {mrpTotal - cartTotal}</span></h6>
                                <h6>EM Price : <span>₹ {cartTotal}</span></h6>
                                <h6>Charges/Tax({taxPercent}%) : <span>₹ {taxes}</span></h6>
                                {/* <small>(Tax will be charged on orders below 2000)</small> */}
                                <small>{taxLine}</small>
                                <h6 className='grand-total'>Grand Total : <span>₹ {cartTotal + (cartTotal * 1 / 100)}</span></h6>
                                <small>(You saved {mrpTotal - cartTotal - Math.floor(taxes)})</small>
                                <hr />
                                <h6 className='amount-payable'>Amount Payable : <p className='amt-payable'>₹ {amtPayable}.00</p></h6>
                            </div>
                            <div className="cartTotals-actions">
                                <button className='btn btn-danger' disabled={btnDisabled} onClick={clearCartFunc}>Clear Cart</button>
                                <button type="button" className='btn btn-primary' disabled={btnDisabled} onClick={() => setCheckoutPage(true)}>
                                    Checkout
                                </button>
                            </div>
                        </div>

                    </div>
            }

            <Footer />
        </div>
    )
}
