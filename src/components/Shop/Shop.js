import React, { Component } from 'react';
import "./Shop.css";
import Navbar from '../Navbar/Navbar';
import { getAllProducts, addToCart } from '../../ducks/reducer';
import { connect } from 'react-redux';

// import white_bowl from './images/white_bowl.jpg';   
// import white_bowl2 from './images/DSC_0073.jpg';






class Shop extends Component {

    componentDidMount(){
        this.props.getAllProducts();
      }


    render() {
        const displayProducts = 
        
        console.log(this.props.products);
        return(
            <div>
                <h1>Shop Page</h1>
                <Navbar/>
                <div>
                    {/* <img src={white_bowl} alt='white bowl'/>
                    <img src={white_bowl2} alt='white bowl2'/> */}
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