import React, { Component } from 'react';
import "./Home.css";
import Navbar from '../Navbar/Navbar';
import { connect } from 'react-redux';
import { checkForCart } from '../../ducks/reducer';


class Home extends Component {

    componentDidMount() {
        this.props.checkForCart();
    }

    render(){
        return(
            <div>
                <h1>Home Page</h1>
                <Navbar />
            </div> 
        )    
    }
}



export default connect(null, { checkForCart })( Home );