import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import Loading from './Loading';
import Welcome from './Welcome';
import anime from 'animejs';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      unWelcome: true,
      onboardComplete: false
    };
  }
  componentDidMount(){
    setTimeout( () => this.setState({isLoading: false}), 3000);
  }
  componentDidUpdate(props){
    if(!props.onboardComplete){
      setTimeout( () => this.setState({unWelcome: false, onboardComplete: true}), 6000);
    }
  }

  render() {
    if(this.state.isLoading){
      return <Loading/>;
    }
    if(!this.state.isLoading && this.state.unWelcome){
      return <Welcome/>;
    }
    return (
      <div className="App">
      <Home/>
      </div>
    );
    
  }
}

export default App;
