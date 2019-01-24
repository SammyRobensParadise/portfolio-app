import React, { Component } from 'react';
import logo from './logo.svg';
import './Welcome.css';
import anime from 'animejs';

class Welcome extends Component {
  constructor(props){
    super(props);
    this.state = {
      welcomeTxt: "Welcome.",
      SubTxt: ""
    }
  }
  componentDidMount(){
    let updateMsg = "It looks live you've made it from cyber space.";
    setTimeout(() => {
      this.setState({SubTxt: updateMsg});
    },3000)
  }
  render(props) {
    return (
      <div className="welcome-pan">
      <div className="welcome-txt"><span>{this.state.welcomeTxt}</span></div>
      <div className="welcome-msg"><span>{this.state.SubTxt}</span></div>
      </div>
    );
  }
}

export default Welcome;