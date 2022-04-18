import React from "react";
import "./Card.css";

const Card = (props) => {
  const { title, price, describe, img } = props.data;

  return (
    <div className="card">
      <img src={img} className="img" alt="" />
      <div className="describe">
        <div className="card-header">
          <h2>{title}</h2>
          <h2>{price}</h2>
        </div>
        <div className="text">{describe}</div>
      </div>
    </div>
  );
};

export default Card;
