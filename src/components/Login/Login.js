import React, { Component } from "react";
import "./Login.css";

export default class Login extends Component {
  render() {
    return (
      <div className="Login">
        <a href={process.env.REACT_APP_LOGIN}>
          <button type="" className="">
            Sign in from Login Component
          </button>
        </a>
      </div>
    );
  }
}
