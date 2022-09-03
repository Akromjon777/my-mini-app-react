import React from "react";
import lattleImg from "../../assets/images/lattle-cafe.jpg";
import "./Menu.css";
const Menu = () => {
  return (
    <div className="menu p-5">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="avorizm">
            <h2 className="menu-title">Menu</h2>
            <p className="menu-desc">
              We change our menu every season. Here is what we are currently
              dishing up.
            </p>
            </div>
   
            <div className="btns d-flex flex-column">
              <button className="btn-one p-3">Food Menu</button>
              <button className="btn-two my-4 p-3">Drinks Menu</button>
              <button className="btn-there p-3">Takeaway Menu</button>
            </div>
          </div>
          <div className="col-6">
            <img src={lattleImg} alt="lattle img cofe" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
