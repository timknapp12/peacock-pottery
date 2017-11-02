import React from "react";
import "./Item.css";

export default function Item({
  product_id,
  product_name,
  price,
  image,
  addToCart
}) {
  return (
    <div>
      <img src={image} />
      <div>
        <span className="">{product_name}</span>
      </div>
      <div>
        <span className="">$ {price}</span>
        {/* not sure if I need to change id to product_id below or if I need to import addToCart to this component*/}
        <span className="" onClick={ () => { addToCart( id ) }} >$ {addToCart}</span>
      </div>
    </div>
  );
}
