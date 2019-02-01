import React, { Component } from 'react';
import './styles/Feature.css';
import anime from 'animejs';

class Feature extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            FEATURE SECTION
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

export default Feature;