import React from "react";
import "./Grid.css";
import gridImageOne from "../../assets/images/grid-system-one.jpg";
import gridImageTwo from "../../assets/images/grid-system-two.jpg";
import gridImageThere from "../../assets/images/grid-system-there.jpg";

const Grid = () => {
  return (
    <div className="container d-flex mt-3">
      <div className="d-flex flex-column">
        <img
          className="image"
          width={644}
          height={300}
          src={gridImageOne}
          alt="grid image one"
        />
        <img
          className="image my-5 me-3"
          width={644}
          height={300}
          src={gridImageTwo}
          alt="grid image two"
        />
      </div>

      <img
        className="images"
        width={644}
        height={300}
        src={gridImageThere}
        alt="grid image there"
      />
    </div>
  );
};

export default Grid;
