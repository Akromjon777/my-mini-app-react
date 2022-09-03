import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <strong className="footer-title">
              Award winning <br /> cafe and bar.
            </strong>
          </div>
          <div className="col-6">
            <p className="footer-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
