import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-title">Vibe Music App</div>
      <div className="language-toggle">
        <button>EN</button>
        <button>हिंदी</button>
      </div>
    </nav>
  );
};

export default Navbar;
