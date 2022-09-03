import React from "react";
import "./Info.css";
const Info = () => {
  return (
    <div className="info">
      <div className="container">
        <div className="info__inner d-flex text-center justify-content-between">
          <ul>
            <li>
              <h3 className="me-5">Location</h3>
              <p className="me-5 info-desc">
                <address>101 Cuba St,Te Aro, Wellington</address>
              </p>
            </li>
          </ul>
          <ul>
            <li>
              <h3 className="mx-5">Hours</h3>
              <p className="mx-5 mb-4 info-desc">
                Tuesday to Friday
                <br />
                <time> 7AM - 3PM</time>
              </p>
              <p className="mx-5 info-desc">Saturday to Sunday</p>
            </li>
          </ul>
          <ul>
            <li>
              <h3>Mondays?</h3>
              <p className="info-desc">We are closed on Mondays to reflect and refuel</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Info;
