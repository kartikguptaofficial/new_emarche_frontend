import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import './Orders.css'

export default function Orders() {

  const userId = useParams();
  // console.log(userId.id);

  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const res = await fetch(`https://emarche-backend.herokuapp.com/orders/${userId.id}`);
    const data = await res.json();
    console.log(data)
    setOrders(data);
  }

  useEffect(() => {
    fetchOrders();
  }, [])

  return (
    <div>
      <Navbar />

      <div className="orders-page">
        <h3>Your Orders</h3>
        <ul>
          {
            orders.map((item) => {
              return (
                <li>
                  <img src={item.img1} alt="" />
                  <div className="order-details">
                    <h6>{item.name}</h6>
                    <h6>₹ {item.sellingprice}   <s>₹ {item.mrp}</s></h6>
                  </div>
                  <div className="cartItem-actions">
                    <a href={`/product/${item._id}`} className="btn btn-primary">View</a>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>

      <Footer />
    </div>
  )
}
