import React from "react";
import logo from "../../assets/images/logo.svg";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header__inner d-flex justify-content-between p-5">
          <div className="links header">
            <a className="header-link" href="#">
              About
            </a>
            <a className="header-link mx-3" href="#">
              Menu
            </a>
            <a className="header-link" href="#">
              Info
            </a>
            <a className="header-link mx-3" href="#">
              Booking
            </a>
          </div>
          <div className="logo">
            <img src={logo} alt="site logo" />
          </div>
          <div className="social-links ">
            <i class="fa-solid fa-envelope"></i>
            <i className="fa-brands fa-facebook mx-3"></i>
            <i class="fa-brands fa-instagram"></i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
