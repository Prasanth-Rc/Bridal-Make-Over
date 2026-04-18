import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/kdlogo.png";

const Navbar = () => {
 useEffect(() => {
    const navLinks = document.querySelectorAll(".nav-link");
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    const closeNavbar = () => {
      if (window.bootstrap && navbarCollapse.classList.contains('show')) {
        const bsCollapse = new window.bootstrap.Collapse(navbarCollapse, {
          toggle: false
        });
        bsCollapse.hide();
      }
    };

    navLinks.forEach(link => {
      link.addEventListener("click", closeNavbar);
    });

    return () => {
      navLinks.forEach(link => {
        link.removeEventListener("click", closeNavbar);
      });
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="Logo" style={{ height: "50px", marginRight: "10px" }} />
          <span className="fw-bold fs-5 d-none d-sm-inline">
            Good Luck Bridal Makeover
          </span>
        </Link>
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
                <b>Beauty & Fashion</b>
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
