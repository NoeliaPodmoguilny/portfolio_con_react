import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const marginLeft = {
    "padding-left": "40%"
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent" style={marginLeft}>
      <div className="container justify-content-end">
        <button
          className={`navbar-toggler ${isMenuOpen ? 'collapsed' : ''}`}
          type="button"
          onClick={handleMenuToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link lineHover subtitle" onClick={handleMenuToggle}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-link lineHover subtitle" onClick={handleMenuToggle}>
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link lineHover subtitle" onClick={handleMenuToggle}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
