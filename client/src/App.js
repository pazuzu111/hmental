import React, { Component } from 'react';
import logo from './logo.svg';
import { Route, Link } from 'react-router-dom'
import './App.css';

export default  class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <p className="App-intro">

          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const nav = () => {
    return (
        <div>
            <ul>
              <li><Link to="/"> purpose </Link></li>
              <li><Link to="/about"> dapp </Link></li>
              <li><Link to="/topics"> whitepaper </Link></li>
            </ul>
        </div>
    )
}
