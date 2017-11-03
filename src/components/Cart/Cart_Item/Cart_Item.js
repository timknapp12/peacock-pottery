import React from "react";
import "./Cart_Item.css";

export default function Cart_Item({
  product_id,
  product_name,
  price,
  image,
  removeFromCart
}) {
    // console.log(image);
  return (
    <div>
      <img src={ `${image}` } alt="Product-image" width="200px" height="auto" />
      <div>
        <span className="">{ product_name }</span>
      </div>
      <div>
        <span className="">$ { price }</span>
        {/* not sure if I need to change id to product_id below or if I need to import addToCart to this component*/}
        {/* <button className="" onClick={ () => { addToCart( product_id ) }} >ADD TO CART {addToCart}</button> */}
      </div>
    </div>
  );
}