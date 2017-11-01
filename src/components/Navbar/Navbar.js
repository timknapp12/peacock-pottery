import React from "react";
import "./Navbar.css";
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <Link to='/home'><li className="">Home</li></Link>
        <Link to='/about'><li className="">About</li></Link>
        <Link to='/shop'><li className="">Shop</li></Link>
        <Link to='/cart'><li className="">Cart</li></Link>
      </ul>
      <ul>
      <a href='http://localhost:3030/logout'><li className="">Sign Out</li></a>
      </ul>
    </nav>
  );
}
