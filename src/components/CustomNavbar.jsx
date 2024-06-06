import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa'; // Import Font Awesome icon
import Logo from '../assets/logo.jpg'; // Import logo image
import TypewriterComponent from './TypewriterComponent'; // Import the TypewriterComponent


function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar" style={{ height: '60px' }}> {/* Adjust navbar height */}
      <div className="navbar-brand">
        <a href="/" style={{ display: 'inline-block' }}>
          <img 
            src={Logo} 
            alt="Logo" 
            style={{ 
              width: '110px', 
              height: 'auto', 
              filter: 'drop-shadow(0 0 1px #3acfbb) drop-shadow(0 0 5px #3acfbb) drop-shadow(0 0 20px #3acfbb)',
              transition: 'filter 0.3s', // Added transition for the filter property
            }} 
            onMouseOver={(e) => e.target.style.filter = 'drop-shadow(0 0 5px #3acfbb) drop-shadow(0 0 10px #3acfbb) drop-shadow(0 0 30px #3acfbb)'}
            onMouseOut={(e) => e.target.style.filter = 'drop-shadow(0 0 1px #3acfbb) drop-shadow(0 0 5px #3acfbb) drop-shadow(0 0 20px #3acfbb)'}
          /> {/* Adjust size here */}
        </a>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <button className="dropdown-btn" onClick={toggleDropdown}>
            <FaBars /> {/* Menu icon */}
          </button>
          {dropdownOpen && (
            <div className="dropdown-content">
              <a href="/">Link 1</a>
              <a href="/">Link 2</a>
              <a href="/">Link 3</a>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
