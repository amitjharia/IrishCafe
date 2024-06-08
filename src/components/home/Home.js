import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { MdHighQuality } from "react-icons/md";
import { FcAbout } from "react-icons/fc";

export default function HomePage() {
    return (
        <div className="home-page">
            <header className="hero-section">
                <div className="hero-text">
                    <h1>Welcome to Irish Cafe</h1>
                    <p>Experience the best coffee in town, crafted with love and passion.</p>
                    {/* <Link to="/menu" className="hero-button">Explore Our Menu</Link> */}
                    <Link to="/products" className="hero-button">Products</Link>
                    {/* <Link to={`${PATH}/`}>   Products  </Link> */}
                </div>
            </header>

            <section className="features">
                <div className="feature"> 
                    <img src="./images/coffeeBeans.jpg" alt="Coffee Beans"/>       
                    <h2>Quality Beans</h2>
                    <p>We source the finest beans from around the world to bring you the best cup of coffee.</p>
                </div>
                <div className="feature">
                <img src="./images/latteArt.jpg" alt="Coffee Beans"/>
                    <h2>Latte Art</h2>
                    <p>Enjoy a beautifully crafted latte with intricate art to brighten your day.</p>
                </div>
                <div className="feature">
                    <img src="./images/interior.jpg" alt="Cozy Cafe"/>
                    <h2>Cozy Atmosphere</h2>
                    <p>Relax and unwind in our cozy, inviting cafe environment.</p>
                </div>
            </section>

            <section className="about-us">
                <h2><FcAbout />About Us</h2>
                <p>At Irish Cafe, we believe in the art of coffee making. Our baristas are trained to provide you with a perfect cup, every time. Whether you're looking for a quiet place to work or a spot to catch up with friends, our cafe is the perfect destination.</p>
            </section>
        </div>
    );
}
