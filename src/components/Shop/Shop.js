import React, { Component } from 'react';
import "./Shop.css";
import Navbar from '../Navbar/Navbar';
import { getAllProducts, addToCart } from '../../ducks/reducer';
import { connect } from 'react-redux';






class Shop extends Component {

    componentDidMount(){
        this.props.getAllProducts();
      }


    render() {
        // const displayProducts = 
        
        console.log(this.props.products);
        return(
            <div>
                <h1>Shop Page</h1>
                <Navbar/>
                <div>
                </div> 
            </div> 
        )
    }
  
}

function mapStateToProps(state) {
    const { products } = state;

    return {
        products: products
    };
}

export default connect(mapStateToProps, {getAllProducts})(Shop)