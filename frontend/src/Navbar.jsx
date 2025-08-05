import React from 'react';
import './css/Navbar.css';
import { FaBars, FaBell, FaCommentDots } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="custom-navbar">
      <div className="navbar-left">
        <img src="./assets/react.svg" alt="Adam Exports" className="navbar-logo" />
        <button className="sidebar-toggle">
          <FaBars />
        </button>
        <input
          type="text"
          placeholder="Search anything here..."
          className="navbar-search"
        />
      </div>

      <div className="navbar-right">
        <div className="icon-container">
          <FaCommentDots className="icon" />
          <span className="badge">10</span>
        </div>
        <div className="icon-container">
          <FaBell className="icon" />
          <span className="badge">10</span>
        </div>
        <div className="profile">
          <img src="/assets/profile.jpg" alt="Profile" className="profile-img" />
          <div className="profile-info">
            <p className="profile-name">Mohd Saleem</p>
            <p className="profile-role">Admin</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
