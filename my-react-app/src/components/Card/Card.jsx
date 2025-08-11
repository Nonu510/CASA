import React from "react";
import "./Card.css"; 

const Card = ({ title, cover }) => {
  return (
    <div className="card">
      <img src={cover} alt={title} className="card-img" />
      <h2 className="card-title">{title}</h2>
    </div>
  );
};

export default Card;
