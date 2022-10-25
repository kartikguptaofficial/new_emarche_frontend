import { createContext, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainProducts from './Components/MainProducts/MainProducts';
import Allproducts from './Components/AllProducts/Allproducts';
import Viewproduct from './Components/Viewproduct/Viewproduct';
import Admin from './Components/Admin/Admin';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Signup from './Components/Signup/Signup';
import Cart from './Components/Cart/Cart';
import Orders from './Components/Orders/Orders';
import Profile from './Components/Profile/Profile';
import Login from './Components/Login/Login';

const AllProductsData = createContext();

function App() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    const res = await fetch("https://emarche-backend.herokuapp.com/products", {
        method: "GET"
    })
    const products = await res.json();
    if(products) {
        // console.log(products.data)
        setProducts(products.data)
    } 
  }

  useEffect(() => {
    getProducts();
  }, [])

  return (
    <div>
      <AllProductsData.Provider value={products}>
        <BrowserRouter>
          <Routes>

            <Route path='/' element={<MainProducts />}/>
            <Route path='/allproducts/:category/:gender/:filter' element={<Allproducts />} />
            <Route path='/product/:id/' element={<Viewproduct />} />
            <Route path='/admin/:show' element={<Admin />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/cart/:id' element={<Cart />} />
            <Route path='/orders/:id' element={<Orders />} />
            <Route path='/profile/:id' element={<Profile />} />
            {/* <Route path='/checkout' */}
          </Routes>
        </BrowserRouter>
      </AllProductsData.Provider>
    </div>
  );
}

export default App;
