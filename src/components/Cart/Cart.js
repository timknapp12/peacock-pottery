import React from "react";
import "./Cart.css";
import Navbar from "../Navbar/Navbar";
import { Link } from 'react-router-dom';
import { removeFromCart, showItems } from '../../ducks/reducer';
import { connect } from 'react-redux';

function Cart(props) {
  return (
    <div>
      <h1>Cart Page</h1>
      <Navbar />
      <div>
        <Link to='/checkout'><button type="" className="">
          Checkout
        </button></Link>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
    const { cart } = state;

    return {
        cart
    };
}

export default connect(mapStateToProps, { showItems, removeFromCart })(Cart);