import React from 'react';
import './Header.css'; 
import imglogo from "../assets/image/logosky-removebg-preview.png"
import { Link } from 'react-router-dom';  // Sirf Link import karo

const Header = () => {
  const navItems = [
    { name: 'Home', path: '/' },
     { name: 'About', path: '/about' },
    { name: 'Consulting', path: '/consulting' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
   
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <div className="header-container ">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="logo-section">
          <span className="insx-logo text-warning">SKY</span>
          <span className="tagline">FUEL ENERGY PRIVATE LIMITED</span>
        </div>
        <div>
          <img src={imglogo} alt="Logo" className='img-fluid' style={{width:"120px", height:"100px"}} />
        </div>
      </div>

      {/* Navigation Bar with Links - Bas yahi change hai */}
      <div className="nav-bar">
        {navItems.map((item) => (
          <Link 
            key={item.name} 
            to={item.path}
            className="nav-item"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;