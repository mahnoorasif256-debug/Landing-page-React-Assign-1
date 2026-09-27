import React from 'react'
import image from '../images/image.png'
import '../Components/Main.css'

const Navbar = () => {
return (
<header className="w-100">
  {/* 1. Top Announcement Bar */}
  <div className="text-white py-2 px-3 small d-flex justify-content-between align-items-center" style={{ backgroundColor: '#d48395', fontSize: '13px' }}>
    <div>
      <span className="fw-medium">🚚 Free Shipping on Orders Over $49</span>
    </div>
    <div className="d-none d-md-block">
      <span className="fw-medium">✨ 15% Off Your First Order | Code: NOORGLOW</span>
    </div>
    <div>
      <span className="me-3 cursor-pointer">Help & FAQs</span>
      <span className="cursor-pointer">Track Order</span>
    </div>
  </div>

  {/* 2. Main Clean White Flat Navbar */}
  <nav className="navbar navbar-expand-lg navbar-light bg-white py-2 border-bottom">
    <div className="container d-flex justify-content-between align-items-center">
      
      {/* Brand Logo (Fixing width container so it doesn't push items) */}
      <a className="navbar-brand d-flex align-items-center py-0" href="#" style={{ minWidth: '160px' }}>
        <img 
          src={image} 
          alt="Noor Glow Logo" 
          style={{ height: '60px', width: 'auto', objectFit: 'contain' }} 
        />
      </a>

      {/* Mobile Toggle Button */}
      <button 
        className="navbar-toggler border-0 shadow-none" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#auraNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Nav Links & Right Icons Wrapper */}
      <div className="collapse navbar-collapse justify-content-between" id="auraNavbar">
        {/* Centered Nav Links */}
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-4 fw-medium">
          <li className="nav-item">
            <a className="nav-link text-dark active" href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-secondary" href="#shops">Shop</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-secondary" href="#skincare">Skincare</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-secondary" href="#makeup">Makeup</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-secondary" href="#footer">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-secondary" href="#footer">Contact Us</a>
          </li>
        </ul>

        {/* Right Side Icons & Cart Button */}
        <div className="d-flex align-items-center gap-3">
          <span className="fs-5 cursor-pointer text-dark" title="Search">🔍</span>
          <span className="fs-5 cursor-pointer text-dark" title="Account">👤</span>
          <span className="fs-5 cursor-pointer text-dark" title="Wishlist">❤️</span>
          <a href="#" className="btn rounded-pill px-4 text-white ms-2" style={{ backgroundColor: '#d48395', fontSize: '14px' }}>
            Cart (0)
          </a>
        </div>
      </div>
    </div>
  </nav>
</header>
  );
}

export default Navbar