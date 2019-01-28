import React, { Component } from 'react';

import './styles/Navigation.css';
import anime from 'animejs';

class Navigation extends Component {
  render() {
    return (
      <div className="navigation-bar">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload here is some sample text.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default Navigation;