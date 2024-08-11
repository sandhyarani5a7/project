import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaShoppingCart, FaEnvelope, FaUser, FaSignInAlt, FaUserPlus } from 'react-icons/fa';

const Header = () => {
  return (
    <header>
      <h1>Welcome to Rick's Online Shopping</h1>
      <nav>
        <Link to="/"> <FaHome /> Home </Link>
        <Link to="/cart"><FaShoppingCart /> Cart</Link>
        <Link to="/contact"><FaEnvelope /> Contact</Link>
        <Link to="/profile"><FaUser /> Profile</Link>
        <Link to="/login"><FaSignInAlt /> Login</Link>
        <Link to="/signup"><FaUserPlus /> Signup</Link>
      </nav>
    </header>
  );
};

export default Header;
