

/*import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './menubar.css';
import { useSelector, useDispatch } from 'react-redux';
import { logoutuser } from './store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import HomePages from './HomePages';
import Veg from './Veg';

import Orders from './Orders';
import Cart from './Cart';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Chocolates from './Chocolates';
import Milk from './Milk';
import NonVegs from './NonVegs';



function App() {
  const dispatch = useDispatch();

  const cartObjects = useSelector(state => state.cart || []);
  const totalcartcount = cartObjects.reduce((sum, item) => sum + item.quantity, 0);

  const isAuthenticated = useSelector(state => state.users.isAuthenticated);
  const currentuser = useSelector(state => state.users.currentuser);

  return (
    
    <BrowserRouter>
      
       {/* <Link to="/Home">Home</Link>
         
        <Link to="/Veg">Veg Items</Link>
        <Link to="/NonVeg">Non-Veg Items</Link>
        <Link to="/Milk">Milk</Link>
        <Link to="/Chocolates">Chocolates</Link>
        <Link to="/Orders">Orders</Link>
        <Link to="/Cart">Cart {totalcartcount}</Link>
        <Link to="/AboutUs">AboutUs</Link>
        <Link to="/ContactUs">ContactUs</Link>*/
       {/* <Link to="/Home"><i className="bi bi-house-door-fill"></i> Home</Link>
       <Link to="/Veg"><i className="bi bi-leaf"></i> Veg Items</Link>
       <Link to="/NonVeg"><i className="bi bi-egg-fried"></i> Non-Veg Items</Link>
       <Link to="/Milk"><i className="bi bi-cup-straw"></i> Milk</Link>
       <Link to="/Chocolates"><i className="bi bi-gift"></i> Chocolates</Link>
      <Link to="/Orders"><i className="bi bi-receipt"></i> Orders</Link>
       <Link to="/Cart"><i className="bi bi-cart-fill"></i> Cart {totalcartcount}</Link>
      <Link to="/AboutUs"><i className="bi bi-info-circle-fill"></i> About Us</Link>
      <Link to="/ContactUs"><i className="bi bi-envelope-fill"></i> Contact Us</Link>
       <Link to="/Signin"><i className="bi bi-box-arrow-in-right"></i> Sign In</Link>*/}



/*  {isAuthenticated ? (
    <>
      <span>Welcome, {currentuser?.username}</span>
      <button onClick={() => dispatch(logoutuser())}>Logout</button>
    </>
  ) : (
    <Link to="/Signin">
      <img src="/icons/contact.png" alt="SignIn" className="nav-icon" /> SignIn
    </Link>
  )}*
<div className="app-container">
 
    
    <div className="navbar">
  <div className="food-zone">Fresh Basket</div>
  <div className="nav-links">
    <Link to="/"><img src="/download.png" className="nav-icon" alt="Home" />Home</Link>
    <Link to="/Veg"><img src="/veg.png" className="nav-icon" alt="Veg" />Veg Items</Link>
    <Link to="/NonVeg"><img src="/nonveg.png" className="nav-icon" alt="Non-Veg" />Non-Veg Items</Link>
    <Link to="/Milk"><img src="/milk.png" className="nav-icon" alt="Milk" />Milk</Link>
    <Link to="/Chocolates"><img src="/chocolate.png" className="nav-icon" alt="Chocolates" />Chocolates</Link>
    <Link to="/Orders"><img src="/order.png" className="nav-icon" alt="Orders" />Orders</Link>
    <Link to="/Cart"><img src="/cart.png" className="nav-icon cart-icon" alt="Cart" />Cart {totalcartcount}</Link>
    <Link to="/AboutUs"><img src="/about.png" className="nav-icon" alt="About Us" />About Us</Link>
    <Link to="/ContactUs"><img src="/contact.png" className="nav-icon" alt="Contact Us" />Contact Us</Link>
  </div>
 
  {isAuthenticated ? (
    <div className="auth-section ">
      <span>Welcome, {currentuser?.username}</span>
      <button onClick={() => dispatch(logoutuser())}>Logout</button>
    </div>
    ): (
        <Link to="/Signin">
          <img src="/sign.png" className="nav-icon" alt="SignIn" /> SignIn
        </Link>
      )}
  
</div>
</div>

    <Routes>
       <Route path="/" element={<HomePages/>} />
        
        <Route path="/Veg" element={<Veg />} />
        <Route path="/NonVeg" element={<NonVegs />} />
        <Route path="/Milk" element={<Milk/>} />
        <Route path="/Chocolates" element={<Chocolates/>} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Signin" element={<SignIn />} />
         <Route path="/Signup" element={<SignUp/>} />
        {/*<Route path="*" element={<PageNotFound />} />*
      </Routes>

      <ToastContainer />

    </BrowserRouter>
    
  );
}

export default App;*/

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './menubar.css';
import { useSelector, useDispatch } from 'react-redux';
import { logoutuser } from './store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import HomePages from './HomePages';
import Veg from './Veg';

import Orders from './Orders';
import Cart from './Cart';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Chocolates from './Chocolates';
import Milk from './Milk';
import NonVegs from './NonVegs';



function App() {
  const dispatch = useDispatch();

  const cartObjects = useSelector(state => state.cart || []);
  const totalcartcount = cartObjects.reduce((sum, item) => sum + item.quantity, 0);

  const isAuthenticated = useSelector(state => state.users.isAuthenticated);
  const currentuser = useSelector(state => state.users.currentuser);

  return (
    
    <BrowserRouter>
      
       {/* <Link to="/Home">Home</Link>
         
        <Link to="/Veg">Veg Items</Link>
        <Link to="/NonVeg">Non-Veg Items</Link>
        <Link to="/Milk">Milk</Link>
        <Link to="/Chocolates">Chocolates</Link>
        <Link to="/Orders">Orders</Link>
        <Link to="/Cart">Cart {totalcartcount}</Link>
        <Link to="/AboutUs">AboutUs</Link>
        <Link to="/ContactUs">ContactUs</Link>*/}
       {/* <Link to="/Home"><i className="bi bi-house-door-fill"></i> Home</Link>
       <Link to="/Veg"><i className="bi bi-leaf"></i> Veg Items</Link>
       <Link to="/NonVeg"><i className="bi bi-egg-fried"></i> Non-Veg Items</Link>
       <Link to="/Milk"><i className="bi bi-cup-straw"></i> Milk</Link>
       <Link to="/Chocolates"><i className="bi bi-gift"></i> Chocolates</Link>
      <Link to="/Orders"><i className="bi bi-receipt"></i> Orders</Link>
       <Link to="/Cart"><i className="bi bi-cart-fill"></i> Cart {totalcartcount}</Link>
      <Link to="/AboutUs"><i className="bi bi-info-circle-fill"></i> About Us</Link>
      <Link to="/ContactUs"><i className="bi bi-envelope-fill"></i> Contact Us</Link>
       <Link to="/Signin"><i className="bi bi-box-arrow-in-right"></i> Sign In</Link>*/}



{/*  {isAuthenticated ? (
    <>
      <span>Welcome, {currentuser?.username}</span>
      <button onClick={() => dispatch(logoutuser())}>Logout</button>
    </>
  ) : (
    <Link to="/Signin">
      <img src="/icons/contact.png" alt="SignIn" className="nav-icon" /> SignIn
    </Link>
  )}*/}
<div className="app-container">
 <div className="navbar">
  <div className="nav-links">
    <div className="food-zone">Fresh Basket</div>
    <Link to="/"><img src="/download.png" className="nav-icon" />Home</Link>
    <Link to="/Veg"><img src="/veg.png" className="nav-icon" />Veg Items</Link>
    <Link to="/NonVeg"><img src="/nonveg.png" className="nav-icon" />Non-Veg Items</Link>
    <Link to="/Milk"><img src="/milk.png" className="nav-icon" />Milk</Link>
    <Link to="/Chocolates"><img src="/chocolate.png" className="nav-icon" />Chocolates</Link>
    <Link to="/Orders"><img src="/order.png" className="nav-icon" />Orders</Link>
    <Link to="/Cart"><img src="/cart.png" className="nav-icon cart-icon" />Cart {totalcartcount}</Link>
    <Link to="/AboutUs"><img src="/about.png" className="nav-icon" />About Us</Link>
    <Link to="/ContactUs"><img src="/contact.png" className="nav-icon" />Contact Us</Link>
  </div>

  <div className="auth-section">
    {isAuthenticated ? (
      <>
      <span className="welcome-text">Welcome, {currentuser?.username}</span>

        <button onClick={() => dispatch(logoutuser())}>Logout</button>
      </>
    ) : (
      <Link to="/Signin">
        <img src="/sign.png" className="nav-icon" alt="SignIn" /> SignIn
      </Link>
    )}
  </div>
</div>

  
    <Routes>
       <Route path="/" element={<HomePages/>} />
        
        <Route path="/Veg" element={<Veg />} />
        <Route path="/NonVeg" element={<NonVegs />} />
        <Route path="/Milk" element={<Milk/>} />
        <Route path="/Chocolates" element={<Chocolates/>} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Signin" element={<SignIn />} />
         <Route path="/Signup" element={<SignUp/>} />
        {/*<Route path="*" element={<PageNotFound />} />*/}
      </Routes>

      <ToastContainer />
      </div>
    </BrowserRouter>
    
  );
}

export default App;