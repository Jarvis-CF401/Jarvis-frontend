import React, { useState } from 'react';

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/">Logo</a>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/">Home</a>
        </li>
        <li className="nav-item">
          <a href="/">About</a>
        </li>
        <li className="nav-item dropdown">
          <button className="dropdown-btn" onClick={toggleDropdown}>Dropdown</button>
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
