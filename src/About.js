import React, { Component } from 'react';
import anime from 'animejs';

class About extends Component {
  render() {
    //ANIMATIONS REQUIRED
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code>ABOUT
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

export default About;