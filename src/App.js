import React, { Component } from 'react';
import './App.css';
// import { Link } from 'react-router-dom';
import router from './router';

class App extends Component {
  render() {
    return (
      <div>
      {/* <div className="App">
        <Link to='/'><button type='' className=''>Sign In from APP</button></Link>
      </div> */}
      { router }
      </div>
    );
  }
}

export default App;
