import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/kdlogo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src={logo} // Replace with your logo URL or path
            alt="Logo"
            style={{ height: "60px" }} // Adjust height or other styles as needed
          />
        </Link>
        <p className="navbar-brand fw-bold pt-4">
          Good Luck Bridal Makeover
        </p>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <b>Home</b>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">
                <b>Services</b>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gallery">
                <b>Beauty & fashion</b>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">
                <b>Gallery</b>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/artist">
                <b>About Artist</b>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                <b>Contact</b>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
