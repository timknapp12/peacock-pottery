import React, { Component } from "react";
import "./Cart.css";
import Navbar from "../Navbar/Navbar";
import { Link } from 'react-router-dom';
import { removeFromCart, showItems } from '../../ducks/reducer';
import { connect } from 'react-redux';
import Cart_Item from './Cart_Item/Cart_Item';

class Cart extends Component {

  componentDidMount() {
    this.props.showItems();
  }

  render() {
    const displayCart = this.props.cart.map((product) => 
    (
        <Cart_Item
        key={ product.product_id }
        product_id={ product.product_id }
        product_name={ product.product_name }
        price={ product.price }
        image={ product.image }
        removeFromCart={ removeFromCart }
        />
    ))
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
}

function mapStateToProps(state) {
    const { cart } = state;

    return {
        cart
    };
}

export default connect(mapStateToProps, { showItems, removeFromCart })(Cart);