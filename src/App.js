import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import anime from 'animejs';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true
    };
  }
  componentDidMount(){
    setTimeout( () => this.setState({isLoading: false}), 6000);
  }

  render() {
    if(this.state.isLoading){
      return null;
    }
    return (
      <div className="App">
      <Home/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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

export default App;
