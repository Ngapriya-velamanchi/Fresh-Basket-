
/*import 'bootstrap/dist/css/bootstrap.min.css';


const HomePage = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}>
      {/* Header 
      <header className={`py-5 text-center ${darkMode ? 'bg-secondary' : 'bg-success'} text-white`}>
        <h1 className="display-4 fw-bold">Welcome to Fresh & Tasty</h1>
        <p className="lead">Your one-stop shop for farm-fresh and delicious food!</p>
        <div className="form-check form-switch d-flex justify-content-center mt-4">
          <input
            className="form-check-input"
            type="checkbox"
            id="darkModeSwitch"
            checked={darkMode}
            onChange={toggleTheme}
          />
          <label className="form-check-label ms-2" htmlFor="darkModeSwitch">
            {darkMode ? 'Dark Mode' : 'Light Mode'}
          </label>
        </div>
      </header>

      {/* Category Cards 
      <section className="container my-5">
        <div className="row g-4">
          {/* Vegetables 
          <div className="col-md-6 col-lg-3">
            <div className="card shadow-sm h-100 card-hover border-0">
              <img
                src="https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=600&q=80"
                className="card-img-top"
                alt="Vegetables"
              />
              <div className="card-body text-center">
                <h5 className="card-title text-success">Fresh Vegetables</h5>
                <p className="card-text">Organic and farm-picked for your health.</p>
              </div>
            </div>
          </div>

          {/* Non-Veg 
          <div className="col-md-6 col-lg-3">
            <div className="card shadow-sm h-100 card-hover border-0">
              <img
                src="https://images.unsplash.com/photo-1604909052654-6971b67c7b7f?auto=format&fit=crop&w=600&q=80"
                className="card-img-top"
                alt="Non-Vegetarian"
              />
              <div className="card-body text-center">
                <h5 className="card-title text-danger">Non-Vegetarian</h5>
                <p className="card-text">Fresh meats and seafood delivered daily.</p>
              </div>
            </div>
          </div>

          /* Milk
          <div className="col-md-6 col-lg-3">
            <div className="card shadow-sm h-100 card-hover border-0">
              <img
                src="https://images.unsplash.com/photo-1580910051074-4c2c1c84f9b4?auto=format&fit=crop&w=600&q=80"
                className="card-img-top"
                alt="Milk"
              />
              <div className="card-body text-center">
                <h5 className="card-title text-primary">Dairy & Milk</h5>
                <p className="card-text">Pure and fresh milk directly from farms.</p>
              </div>
            </div>
          </div>

          {/* Chocolates 
          <div className="col-md-6 col-lg-3">
            <div className="card shadow-sm h-100 card-hover border-0">
              <img
                src="https://images.unsplash.com/photo-1606312619344-0a2de7a65e63?auto=format&fit=crop&w=600&q=80"
                className="card-img-top"
                alt="Chocolates"
              />
              <div className="card-body text-center">
                <h5 className="card-title text-warning">Chocolates</h5>
                <p className="card-text">Delicious chocolates for all occasions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer 
      <footer className={`pt-5 pb-3 ${darkMode ? 'bg-secondary text-white' : 'bg-dark text-white'}`}>
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-3">
              <h5>About Us</h5>
              <p>
                We deliver fresh and premium quality food items right at your doorstep.
                Enjoy healthy and tasty living with us!
              </p>
            </div>
            <div className="col-md-4 mb-3">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white text-decoration-none">Home</a></li>
                <li><a href="#" className="text-white text-decoration-none">Products</a></li>
                <li><a href="#" className="text-white text-decoration-none">About</a></li>
                <li><a href="#" className="text-white text-decoration-none">Contact</a></li>
              </ul>
            </div>
            <div className="col-md-4 mb-3">
              <h5>Follow Us</h5>
              <div className="d-flex gap-3">
                <a href="#"><i className="bi bi-facebook text-white fs-4"></i></a>
                <a href="#"><i className="bi bi-twitter text-white fs-4"></i></a>
                <a href="#"><i className="bi bi-instagram text-white fs-4"></i></a>
              </div>
            </div>
          </div>
          <hr className="border-light" />
          <p className="text-center mb-0">&copy; 2025 Fresh & Tasty. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;*/

// Assuming you'll create a CSS file for styling

// src/pages/HomePage.jsx

/*import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage-container">
      {/* Hero Section *
      <header className="hero-section">
        <h1>Welcome to Fresh Basket 🛒</h1>
        <p>Your one-stop destination for farm-fresh groceries, dairy, and more!</p>
        <img src="/banner.png" alt="Fresh Grocery Banner" className="hero-image" />
      </header>

      {/* Homepage Introduction *
      <section className="intro-section">
        <h2>Why Fresh Basket?</h2>
        <p>
          At Fresh Basket, we believe in delivering the best and the freshest
          produce straight to your doorsteps. From handpicked vegetables to
          freshly baked bread, we have everything you need to make your kitchen
          complete. Our goal is to provide high-quality, affordable products
          while supporting local farmers and businesses.
        </p>
      </section>

      {/* Product Categories *
      <section className="features">
        {/* Vegetables *
        <div className="feature-card">
          <img src="/veg.png" alt="Fresh Vegetables" />
          <h3>Fresh Vegetables</h3>
          <p>
            Our vegetables are sourced directly from local farms. We make sure
            that you get the freshest, healthiest greens and produce available.
            From leafy greens to root vegetables, everything is picked at the
            peak of freshness.
          </p>
        </div>

        {/* Non-Veg *
        <div className="feature-card">
          <img src="/nonveg.png" alt="Non-Veg Items" />
          <h3>Non-Vegetarian Items</h3>
          <p>
            Whether it's chicken, fish, or other meats, our non-veg products
            are carefully sourced, hygienically processed, and delivered to your
            doorstep with the highest quality standards. We prioritize freshness
            and cleanliness.
          </p>
        </div>

        {/* Milk and Dairy *
        <div className="feature-card">
          <img src="/milk.png" alt="Milk and Dairy" />
          <h3>Milk & Dairy</h3>
          <p>
            Our milk and dairy products come from local farms known for their
            organic and natural practices. Get fresh milk, cheese, yogurt, and
            more—delivered directly to your door, ensuring the highest
            nutritional value.
          </p>
        </div>

        {/* Chocolates *
        <div className="feature-card">
          <img src="/chocolate.png" alt="Chocolates" />
          <h3>Chocolates</h3>
          <p>
            Indulge in a wide variety of premium chocolates, from rich dark
            chocolate to creamy milk chocolate bars. We offer chocolates from
            renowned brands and local artisanal makers for the perfect treat.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section *
      <section className="why-choose-us">
        <h2>Why Choose Fresh Basket?</h2>
        <div className="benefits">
          <div className="benefit-card">
            <h3>Freshness Guaranteed</h3>
            <p>
              We ensure that all our products are fresh, locally sourced, and
              delivered quickly to maintain quality.
            </p>
          </div>
          <div className="benefit-card">
            <h3>Affordable Prices</h3>
            <p>
              Fresh Basket offers competitive pricing on all products, ensuring
              that healthy living doesn't have to be expensive.
            </p>
          </div>
          <div className="benefit-card">
            <h3>Easy Ordering</h3>
            <p>
              With our easy-to-use website and mobile app, ordering is quick
              and simple—just a few clicks and you're all set.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action *
      <section className="cta-section">
        <h2>Ready to Get Fresh?</h2>
        <p>
          Explore our wide selection of groceries, dairy, meats, and treats.
          Start shopping now to experience the freshness delivered to your
          doorstep.
        </p>
        <button className="cta-button">
          <a href="/shop">Start Shopping</a>
        </button>
      </section>

      {/* Footer Section *
      <footer className="footer">
        <div className="footer-left">
          <h3>Fresh Basket</h3>
          <p>Delivering freshness to your doorstep, every single day.</p>
        </div>
        <div className="footer-links">
          <a href="/AboutUs">About Us</a>
          <a href="/ContactUs">Contact</a>
          <a href="/Orders">My Orders</a>
          <a href="/Cart">Cart</a>
        </div>
        <div className="footer-right">
          <p>&copy; {new Date().getFullYear()} Fresh Basket. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;*/

//=======================================================//


import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage-container">
      {/* Hero Section */}
      <header className="hero-section">
        <h1>Welcome to Fresh Basket 🛒</h1>
        <p>Your one-stop destination for farm-fresh groceries, dairy, and more!</p>
      </header>

      {/* Browse by Collection */}
      <section className="collections-section">
        <h2>Browse by Collection</h2>
        <div className="collections-grid">
          <div className="collection-card">
            <img src="/Vegetables.jpg" alt="Veg" />
            <h3>Fresh Vegetables</h3>
            <Link to="/Veg" className="visit-button">Visit</Link>
          </div>
          <div className="collection-card">
            <img src="/NONVeg.jpg" alt="Non-Veg" />
            <h3>Non-Veg Items</h3>
            <Link to="/NonVeg" className="visit-button">Visit</Link>
          </div>
          <div className="collection-card">
            <img src="/Milk1.jpg" alt="Milk" />
            <h3>Milk & Dairy</h3>
            <Link to="/Milk" className="visit-button">Visit</Link>
          </div>
          <div className="collection-card">
            <img src="/Chocolates.jpg" alt="Chocolates" />
            <h3>Chocolates</h3>
            <Link to="/Chocolates" className="visit-button">Visit</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <h2>Why Choose Fresh Basket?</h2>
        <div className="benefits">
          <div className="benefit-card">
            <h3> 🥬Freshness Guaranteed</h3>
            <p>
              We ensure that all our products are fresh, locally sourced, and
              delivered quickly to maintain quality.
            </p>
          </div>
          <div className="benefit-card">
            <h3> 💸Affordable Prices</h3>
            <p>
              Fresh Basket offers competitive pricing on all products, ensuring
              that healthy living doesn't have to be expensive.
            </p>
          </div>
          <div className="benefit-card">
            <h3>📦Easy Ordering</h3>
            <p>
              With our easy-to-use website and mobile app, ordering is quick
              and simple—just a few clicks and you're all set.
            </p>
          </div>
        </div>
      </section>

      
      

      {/* Footer */}
      <footer className="footer">
        <div className="footer-left">
          <h3>Fresh Basket</h3>
          <p>Delivering freshness to your doorstep, every day.</p>
        </div>

        <div className="footer-links">
          <Link to="/AboutUs">About Us</Link>
          <Link to="/ContactUs">Contact Us</Link>
          <p>Made with ❤️ for food lovers</p>
        </div>

        <div className="footer-right">
          <p>© 2025 Priya-store. All rights reserved.</p>
          <p>
            <a href="/terms" className="footer-policy-link">Terms of Service</a> | 
            <a href="/privacy" className="footer-policy-link"> Privacy Policy</a>
          </p>
          <p>Designed & Developed by <strong> Nagapriya </strong></p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

