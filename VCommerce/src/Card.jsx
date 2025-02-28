import React from "react";
import "./Card.css";
import img from "./assets/x.jpg";
const  ProductCard=({image,name,description,price})=> {
  return (
    <div className="card">
      <img id="image" src={image} alt={name} />
      <h3>{name}</h3>
      <p className="description">{description}</p>
      <p className="price">${price}</p>
    </div>
  );
}
export default  ProductCard;